"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 1499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bag.3161f794.png","height":24,"width":25,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoElEQVR42l2LIQ7CUBBEt4b0Ag2iBykKEFgMohfAo2oIsgHR7hcouni4BJhegHCMHoO3yf+GTSbzdnZWQhgyiROC7VSHbdpVb1mCguOJ8ofCFz/i8/RVErzQRPjAn/hE/la1Ulg26IIqggJHVlE4+034qIFWGHjmityS14A1wF7+xjPUOBwojXxc8bsr8ug36XvLWSrCNb50wSt80XWW/wCy/WvwgzhR/QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.3d7e2816.svg","height":52,"width":130,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  QW: () => (/* binding */ storageCartSave),
  rW: () => (/* binding */ storageGetCart),
  li: () => (/* binding */ storageRemoveCart)
});

;// CONCATENATED MODULE: ./src/cart/storageCartConfig.ts
const CART_STORAGE = "@igniteShope:cart";

;// CONCATENATED MODULE: ./src/cart/storageCart.ts

async function storageCartSave(cart) {
    try {
        localStorage.setItem(CART_STORAGE, JSON.stringify(cart));
    } catch (error) {
        console.error("Error saving cart to AsyncStorage:", error);
    }
}
async function storageGetCart() {
    try {
        const storage = localStorage.getItem(CART_STORAGE);
        const cart = storage ? JSON.parse(storage) : [];
        return cart;
    } catch (error) {
        console.error("Error getting cart from AsyncStorage:", error);
        return [];
    }
}
async function storageRemoveCart() {
    try {
        localStorage.removeItem(CART_STORAGE);
    } catch (error) {
        console.error("Error removing cart from AsyncStorage:", error);
    }
}


/***/ }),

/***/ 7184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2698);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_bag_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1499);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2070);
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6267);
/* harmony import */ var _utils_CalculateTotalQuantity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8824);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_1__]);
_styles__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Header({ toggleCard }) {
    const { cart } = (0,_hooks_useCart__WEBPACK_IMPORTED_MODULE_5__/* .useCart */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.src,
                alt: "",
                width: 200,
                height: 130
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Bag */ .N, {
                onClick: toggleCard,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _assets_bag_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        alt: "",
                        width: 24,
                        height: 24
                    }),
                    cart.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: (0,_utils_CalculateTotalQuantity__WEBPACK_IMPORTED_MODULE_6__/* .CalculateTotalQuantity */ .A)(cart)
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Bag),
/* harmony export */   h: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _src_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_styles__WEBPACK_IMPORTED_MODULE_0__]);
_src_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Header = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    padding: "2rem 0",
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
});
const Bag = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$gray800",
    width: "42px",
    height: "42px",
    borderRadius: 4,
    cursor: "pointer",
    position: "relative",
    img: {},
    div: {
        position: "absolute",
        background: "$green500",
        width: 26,
        height: 26,
        top: -8,
        right: -8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99999,
        border: "3px solid $gray900",
        p: {
            color: "$gray100",
            fontWeight: "bold"
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ HeaderSuccess)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9802);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2070);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_1__]);
_styles__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function HeaderSuccess() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.src,
            alt: "",
            width: 150,
            height: 130
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ Header)
/* harmony export */ });
/* unused harmony export Bag */
/* harmony import */ var _src_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_styles__WEBPACK_IMPORTED_MODULE_0__]);
_src_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Header = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    padding: "2rem 0",
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});
const Bag = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$gray800",
    width: "42px",
    height: "42px",
    borderRadius: 4,
    cursor: "pointer",
    position: "relative",
    img: {},
    div: {
        position: "absolute",
        background: "$green500",
        width: 26,
        height: 26,
        top: -8,
        right: -8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99999,
        border: "3px solid $gray900",
        p: {
            color: "$gray100",
            fontWeight: "bold"
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ ShoppingCart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3380);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_hooks_useCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6267);
/* harmony import */ var _src_utils_CalculateTotalQuantity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8824);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_6__]);
([_styles__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ShoppingCart({ toggledCard, isOpen }) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { cart, dispatch } = (0,_src_hooks_useCart__WEBPACK_IMPORTED_MODULE_4__/* .useCart */ .j)();
    console.log(cart);
    function handleRemoveShirt(item) {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: item
        });
    }
    async function handleBuyProduct() {
        setIsCreatingCheckoutSession(true);
        await axios__WEBPACK_IMPORTED_MODULE_6__["default"].post("/api/checkout", cart.map((item)=>{
            return {
                price: item.defaultPriceId,
                quantity: item.quantity
            };
        })).then((response)=>{
            const { checkoutUrl } = response.data;
            window.location.href = checkoutUrl;
        }).catch((error)=>{
            alert("Falha ao redirecionar ao checkout");
            setIsCreatingCheckoutSession(false);
        });
    }
    function handlePrice() {
        return cart.reduce((total, item)=>{
            const price = parseFloat(item.price.replace(/[^\d.,]/g, "").replace(",", ".")); // Convertendo a string para número de ponto flutuante
            return total + price * item.quantity;
        }, 0);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .CartContainer */ .Kh, {
        isOpen: isOpen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .ButtonExit */ .Cm, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: toggledCard,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineFullscreenExit, {
                        size: 24
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Sacola de compras"
            }),
            cart.length !== 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .ContentCardItems */ .LF, {
                        children: cart.map((cartItem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .CartView */ .zO, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .CartImage */ .zb, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: cartItem.imageUrl,
                                            alt: "",
                                            width: 120,
                                            height: 110
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zb, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("samp", {
                                                children: cartItem.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: cartItem.price
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                        children: [
                                                            "Quantidade: ",
                                                            cartItem.quantity
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                onClick: ()=>handleRemoveShirt(cartItem),
                                                children: "Remover"
                                            })
                                        ]
                                    })
                                ]
                            }, cartItem.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .CartDescription */ .W6, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        children: "Quantidade"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        children: [
                                            (0,_src_utils_CalculateTotalQuantity__WEBPACK_IMPORTED_MODULE_7__/* .CalculateTotalQuantity */ .A)(cart),
                                            " itens"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Valor Total"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        children: [
                                            "R$ ",
                                            handlePrice().toFixed(2)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                disabled: isCreatingCheckoutSession,
                                onClick: handleBuyProduct,
                                children: "Finalizar Compra"
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .EmptyCart */ .Qd, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Opa, Sua sacola de compras est\xe1 vazia, que tal adicionar algo ?"
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cm: () => (/* binding */ ButtonExit),
/* harmony export */   Kh: () => (/* binding */ CartContainer),
/* harmony export */   LF: () => (/* binding */ ContentCardItems),
/* harmony export */   Qd: () => (/* binding */ EmptyCart),
/* harmony export */   W6: () => (/* binding */ CartDescription),
/* harmony export */   Zb: () => (/* binding */ Card),
/* harmony export */   zO: () => (/* binding */ CartView),
/* harmony export */   zb: () => (/* binding */ CartImage)
/* harmony export */ });
/* harmony import */ var _src_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_styles__WEBPACK_IMPORTED_MODULE_0__]);
_src_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const CartContainer = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: "$gray800",
    paddingLeft: 50,
    variants: {
        isOpen: {
            true: {
                transition: ".3s ease",
                width: "30rem"
            },
            false: {
                transition: ".3s ease",
                width: "0",
                overflow: "hidden",
                paddingLeft: 0
            }
        }
    },
    h1: {
        fontWeight: "bold",
        fontSize: "$lg",
        marginBottom: 32
    }
});
const ContentCardItems = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    minHeight: "60vh",
    maxHeight: "60vh"
});
const EmptyCart = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1.5rem",
    width: "90%"
});
const ButtonExit = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    display: "flex",
    justifyContent: "flex-end",
    padding: 24,
    div: {
        cursor: "pointer"
    }
});
const CartView = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    display: "flex",
    alignItems: "center",
    marginBottom: 24
});
const Card = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    display: "flex",
    flexDirection: "column",
    lineHeight: "2rem",
    samp: {
        fontSize: "16px",
        color: "$gray300"
    },
    div: {
        display: "flex",
        alignItems: "center",
        gap: 10
    },
    p: {
        cursor: "pointer",
        color: "$green300",
        fontSize: "$md"
    }
});
const CartImage = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    width: 120,
    height: 120,
    marginRight: 20,
    background: "linear-gradient(160deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    img: {
        objectFit: "cover"
    }
});
const CartDescription = (0,_src_styles__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    padding: "0 3rem 0 0",
    div: {
        display: "flex",
        justifyContent: "space-between",
        lineHeight: "2rem",
        h4: {
            color: "$gray300",
            fontSize: "$md"
        },
        h3: {
            color: "$gray300",
            fontSize: "$md"
        },
        h2: {
            color: "$gray100",
            fontSize: "$lg"
        }
    },
    button: {
        width: "100%",
        marginTop: 35,
        backgroundColor: "$green500",
        color: "$white",
        fontSize: "$md",
        fontWeight: "bold",
        border: 0,
        borderRadius: 8,
        padding: "1.25rem",
        cursor: "pointer",
        "&:hover": {
            transition: ".2s ease-out",
            backgroundColor: "$green300"
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CartContext),
/* harmony export */   k: () => (/* binding */ BagContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_storageCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7767);



const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const cartReducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const existingItemIndex = state.findIndex((item)=>item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                const updatedCart = state.map((item)=>item.id === action.payload.id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item);
                (0,_cart_storageCart__WEBPACK_IMPORTED_MODULE_2__/* .storageCartSave */ .QW)(updatedCart);
                return updatedCart;
            } else {
                (0,_cart_storageCart__WEBPACK_IMPORTED_MODULE_2__/* .storageCartSave */ .QW)([
                    ...state,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]);
                return [
                    ...state,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ];
            }
        case "REMOVE_FROM_CART":
            const itemToRemove = state.find((item)=>item.id === action.payload.id);
            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    const updatedCart = state.map((item)=>item.id === action.payload.id ? {
                            ...item,
                            quantity: item.quantity - 1
                        } : item);
                    (0,_cart_storageCart__WEBPACK_IMPORTED_MODULE_2__/* .storageCartSave */ .QW)(updatedCart);
                    return updatedCart;
                } else {
                    const updatedCart = state.filter((item)=>item.id !== action.payload.id);
                    (0,_cart_storageCart__WEBPACK_IMPORTED_MODULE_2__/* .storageCartSave */ .QW)(updatedCart);
                    return updatedCart;
                }
            }
            return state;
        case "INITIALIZE_CART":
            return action.payload;
        default:
            return state;
    }
};
function BagContextProvider({ children }) {
    const [cart, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(cartReducer, []);
    async function loadCartFromStorage() {
        const storageCart = await (0,_cart_storageCart__WEBPACK_IMPORTED_MODULE_2__/* .storageGetCart */ .rW)();
        if (storageCart) {
            dispatch({
                type: "INITIALIZE_CART",
                payload: storageCart
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadCartFromStorage();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: {
            cart,
            dispatch
        },
        children: children
    });
}


/***/ }),

/***/ 6267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useCart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_Bag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);


function useCart() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_Bag__WEBPACK_IMPORTED_MODULE_1__/* .CartContext */ .A);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5986);
/* harmony import */ var _styles_pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(904);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7184);
/* harmony import */ var _context_Bag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3095);
/* harmony import */ var _components_ShopingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6711);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_HeaderSuccess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8486);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles_global__WEBPACK_IMPORTED_MODULE_1__, _styles_pages_app__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_3__, _components_ShopingCart__WEBPACK_IMPORTED_MODULE_5__, _components_HeaderSuccess__WEBPACK_IMPORTED_MODULE_8__]);
([_styles_global__WEBPACK_IMPORTED_MODULE_1__, _styles_pages_app__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_3__, _components_ShopingCart__WEBPACK_IMPORTED_MODULE_5__, _components_HeaderSuccess__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









(0,_styles_global__WEBPACK_IMPORTED_MODULE_1__/* .globalStyles */ .W)();
function App({ Component, pageProps }) {
    const [openCart, setOpenCart] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const toggleCard = ()=>{
        setOpenCart(!openCart);
    };
    if (router.pathname === `/success`) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_pages_app__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_Bag__WEBPACK_IMPORTED_MODULE_4__/* .BagContextProvider */ .k, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeaderSuccess__WEBPACK_IMPORTED_MODULE_8__/* .HeaderSuccess */ .o, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_pages_app__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_Bag__WEBPACK_IMPORTED_MODULE_4__/* .BagContextProvider */ .k, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ShopingCart__WEBPACK_IMPORTED_MODULE_5__/* .ShoppingCart */ .y, {
                    toggledCard: toggleCard,
                    isOpen: openCart
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h, {
                    toggleCard: toggleCard
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__]);
_styles__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        id: "stitches",
                        dangerouslySetInnerHTML: {
                            __html: (0,_styles__WEBPACK_IMPORTED_MODULE_2__/* .getCssText */ .Gc)()
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ globalStyles)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const globalStyles = (0,___WEBPACK_IMPORTED_MODULE_0__/* .globalCss */ .zY)({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box"
    },
    body: {
        backgroundColor: "$gray900",
        color: "$gray100",
        "-webkit-font-smoothing": "antialiased"
    },
    "body, input, textarea, button": {
        fontFamily: "Roboto",
        fontWeight: 400
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gc: () => (/* binding */ getCssText),
/* harmony export */   theme: () => (/* binding */ theme),
/* harmony export */   zY: () => (/* binding */ globalCss),
/* harmony export */   zo: () => (/* binding */ styled)
/* harmony export */ });
/* unused harmony exports config, css, keyframes, createTheme */
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_react__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const { config, styled, css, globalCss, keyframes, getCssText, theme, createTheme } = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_0__.createStitches)({
    theme: {
        colors: {
            white: "#fff",
            gray900: "#121214",
            gray800: "#202024",
            gray500: "#8D8D99",
            gray300: "#c4c4cc",
            gray100: "#e1e1e6",
            green500: "#00875f",
            green300: "#00b37e"
        },
        fontSizes: {
            md: "1.125rem",
            lg: "1.25rem",
            xl: "1.5rem",
            "2xl": "2rem"
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Container = (0,___WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "100vh"
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CalculateTotalQuantity)
/* harmony export */ });
const CalculateTotalQuantity = (cart)=>{
    return cart.reduce((total, item)=>total + item.quantity, 0);
};


/***/ })

};
;