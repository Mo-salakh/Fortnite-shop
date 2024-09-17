import { useEffect, useState } from "react"
import { API_KEY, API_URL } from "../config";
import { Preloader } from './Preloader.jsx'
import { Posts } from "./Posts.jsx";
import Cart from "./Cart.jsx";
import { BasketList } from "./BasketList.jsx";
import { Alert } from "./Alert.jsx";


function Shop() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('')

    useEffect(function getPosts() {
       fetch(API_URL, {
        headers: {
            'Authorization': API_KEY
        }
       }) 
       .then(response => response.json())
       .then(data =>{ 
        data.shop && setPosts(data.shop);
        setLoading(false)
        })
    },[])

    function toCart(item) {
        const itemOrderIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId);        
        if (itemOrderIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem ])
        } else {
            const updatedOrder = order.map((orderItem, index) => {
                if (index === itemOrderIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    };
                }
                return orderItem;   
            });
            setOrder(updatedOrder);
        }

        setAlertName(item.displayName)
    }

    function handleShow() {
        setBasketShow(!isBasketShow)
    }
    
    function removeFromBasket(id) {
        setOrder(order.filter(item => item.mainId !== id))
    }

    function icreQuantity(id) {
        const newOrder = order.map(el => {
            if(el.mainId === id) {
                let newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    function decriQuantity(id) {
        const newOrder = order.map(el => {
            if(el.mainId === id) {
                let newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    function closeAlertName() {
        setAlertName('')
    }


    return (
        <main className="main_content content container">
        <Cart quantity={order.length} handleShow={handleShow} />
        {loading ? <Preloader /> : 
            <Posts posts={posts} toCartFunc={toCart}/>
        }
        { isBasketShow && <BasketList orderedItem={order} handleShow={handleShow} removeFromBasket={removeFromBasket} icreQuantity={icreQuantity} decriQuantity={decriQuantity}/>}
        {alertName && <Alert name={alertName} setAlert={closeAlertName} />}
        </main>
    )
}

export {Shop}