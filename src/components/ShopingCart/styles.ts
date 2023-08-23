import { styled } from "@/src/styles";


export const CartContainer = styled('div',  {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom:0,
    zIndex: 1,
    backgroundColor: '$gray800',

    
    paddingLeft: 50,
    
    variants: {
        isOpen: {
            true: {
                transition: '.3s ease',
                width: '30rem'
            },
            false: {
                transition: '.3s ease',
                width: '0',
                overflow: 'hidden',
                paddingLeft: 0,

            }
        }
    },

  

    h1: {
        fontWeight: 'bold',
        fontSize: '$lg',
        marginBottom: 32,

    },
})

export const ContentCardItems = styled('div', {
    minHeight: '60vh',
    maxHeight: '60vh'
})

export const EmptyCart = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1.5rem',
    width: '90%',



})

export const ButtonExit = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 24,
    
    div: {
        cursor: 'pointer',
    }
})


export const CartView = styled('div', {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,
})

export const Card = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '2rem',

    samp:{
        fontSize: '16px',
        color: '$gray300',
        
    },

    div:{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
    },

    p:{
        cursor: 'pointer',
        color: '$green300',
        fontSize: '$md',
    }
})

export const CartImage = styled('div', {
    width: 120,
    height: 120,
    marginRight: 20,
    background: 'linear-gradient(160deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})

export const CartDescription = styled('div', {
    padding: '0 3rem 0 0',

    div: {
        display: 'flex',
        justifyContent: 'space-between',
        lineHeight: '2rem',

        h4: {
            color: '$gray300',
            fontSize: '$md',
        },

        h3: {
            color: '$gray300',
            fontSize: '$md',
        },

        h2: {
            color: '$gray100',
            fontSize: '$lg',
        },
        
    },

    button: {
        width: '100%',
        marginTop: 35,
        backgroundColor: '$green500',
        color: '$white',
        fontSize: '$md',
        fontWeight: 'bold',
        border: 0,
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',

        '&:hover': {
         transition: '.2s ease-out',
         backgroundColor: '$green300',
        }
    }

})
