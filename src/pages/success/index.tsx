import { storageRemoveCart } from "@/src/cart/storageCart";
import { stripe } from "@/src/lib/stripe";
import { ImageContainer, SuccessContainer, SuccessContentImage } from "@/src/styles/pages/success";
import { CalculateTotalQuantity } from "@/src/utils/CalculateTotalQuantity";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";

interface SuccessProps {
    customerName:string;
    products: {
        name: string;
        imageUrl: string;
        quantity: number;
    }[]

}

export default function Success({customerName, products} : SuccessProps) {

    useEffect(() => {
        storageRemoveCart()
        // PODERIA ENVIAR PARA UM HISTÓRICO 
    }, [])

    return (
        <>
            <Head>
              <title>Compra efetuada - Ignite Shop</title>
              <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <SuccessContentImage>
                {
                    products.map((product) => (
                        <ImageContainer  key={product.name}>
                            <Image src={product.imageUrl} alt="" width={120} height={110} />
                        </ImageContainer>
                    ))
                }
                    </SuccessContentImage>
             
                <h1>Compra efetuada!</h1>
                    {
                        products.length < 2 ? 

                        <p>
                         uhuul <strong>{customerName}</strong>, sua <strong>{products[0].name}</strong> já está a caminho da sua casa 
                        </p>

                        :
                        <p>
                         uhuul <strong>{customerName}</strong>, sua compra de {CalculateTotalQuantity(products)} camisetas já está a caminho da sua casa 
                        </p>
                    }
                <Link href={'/'}>
                Voltar ao catálago
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps : GetServerSideProps = async ({query}) => {

    if(!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    
    const sessionId = String(query.session_id)

  
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        'expand': ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details?.name

    const products: {
        name: string;
        imageUrl: string;
        quantity: number | null;
    }[] | undefined = session.line_items?.data.map((lineItem) => {
        const product = lineItem.price?.product as Stripe.Product
        return {
            name: product.name,
            imageUrl: product.images[0],
            quantity: lineItem.quantity,
        };
    });

    return {
        props: {
            customerName,
            products
        }
    }
}