function BasketItem(props) {
    const {
        mainId,
        displayName, 
        regularPrice,
        quantity,
        icreQuantity,
        decriQuantity
    } = props    

    return (
        <li className="collection-item">
            <b>{displayName}</b> <i class="material-icons basket-quant" onClick={() => decriQuantity(mainId)}>remove</i> <b>x</b>{quantity} <i class="material-icons basket-quant" onClick={() => icreQuantity(mainId)}>add</i> = {regularPrice * quantity} руб.
            <span className="secondary-content item-delete" onClick={() => props.removeFromBasket(mainId)}>
                <i className="small material-icons">close</i>
            </span>
        </li>
    )
}

export {  BasketItem  }