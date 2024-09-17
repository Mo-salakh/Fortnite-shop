function Cart(props) {

    const {quantity = 0, handleShow} = props

    return (
        <div className="cart" onClick={handleShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart_quantity">{quantity}</span> : null}
        </div>
    )
}

export default Cart