import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/product'

import { stripe } from '@/src/lib/stripe'
import Stripe from 'stripe'
import Head from 'next/head'
import { useCart } from '@/src/hooks/useCart'

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
        quantity: number,
    }
}

export default function Product({product} : ProductProps) {
    const {dispatch} = useCart()

    const {isFallback} = useRouter()


    if(isFallback ) {

        return (
          <div>
            Loading...
          </div>
        )
    }

    async function handleBuyProduct() {
        dispatch({type: 'ADD_TO_CART', payload: product})
    }

    return (
        <>
            <Head>
              <title>{product.name} - Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl}  alt='' width={520} height={480} />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button onClick={handleBuyProduct}>
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {params: {id: 'prod_MsICNYehvGvoPr'}},
            {params: {id: 'prod_MsIBNlQiLJz6iO'}},
            {params: {id: 'prod_MsI8jZewb5gBjj'}},
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {

    const productId = params!.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
          product: {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            description: product.description,
            defaultPriceId: price.id,
            quantity: 1,
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(price.unit_amount! / 100),
          },
        },
        revalidate: 60 * 60 * 1, // 1hour
    }
}