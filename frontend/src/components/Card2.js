import './cardsass.scss'
function Card2(props) {
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} className="card__image"></img>
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        {/* <button className="card__btn">Watch on YouTube</button> */}
      </div>
    );
}
export default Card2