import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {orderedItem = [], handleShow = Function.prototype, removeFromBasket,icreQuantity,decriQuantity} = props;

  let totalPrice = orderedItem.reduce((sum, i) => (sum + i.regularPrice * i.quantity), 0)

  return (
    <ul className="collection basket-list">
      <li className="collection-item  active">Корзина</li>
      {orderedItem.length ? (
        orderedItem.map((item) => {return <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} icreQuantity={icreQuantity} decriQuantity={decriQuantity} />;})
        ) 
        : 
        (<li className="collection-item">Корзина пуста</li>)
      }
      <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
      <li className="collection-item">
        <button className="btn">Оформить</button>
      </li>
      <i className="small material-icons i-close" onClick={handleShow}>close</i>
    </ul>
  );
}

export { BasketList };
