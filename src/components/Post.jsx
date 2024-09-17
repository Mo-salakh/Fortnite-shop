function Post(props) {
  
  const mainId = props.data.mainId;
  const displayName = props.data.displayName
  const regularPrice = props.data.price.regularPrice
  const {func} = props
  const { displayAssets } = props.data;
  const full_background = displayAssets?.[0]?.full_background || 'default_value';

  return (
    <div className="card" key={mainId}>
        <div className="card-image">
          <img src={full_background} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title">{displayName}</span>
        </div>
        <div className="card-action">
          <button className="btn" onClick={() =>func({mainId, displayName, regularPrice})}>add to cart</button>
          <p>{regularPrice} р</p>
        </div>
    </div>
  );
}

export { Post };
