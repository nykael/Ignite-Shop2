import { styled } from "@/src/styles"

export const Header = styled('div', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}) 

export const Bag = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$gray800',
    width: '42px',
    height: '42px',
    borderRadius: 4,

    cursor: 'pointer',
    position: 'relative',

    img: {

    },

    div: {
        position: 'absolute',
        background: '$green500',
        width: 26,
        height: 26,
        top:-8,
        right: -8,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99999,
        border: '3px solid $gray900',

        p: {
           color: '$gray100',
            fontWeight: 'bold',
        }   
    }
})