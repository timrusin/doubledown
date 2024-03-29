import './Ratecard.css'
import { Link }  from 'react-router-dom'

const Ratecard = (props) => {
  const Top = () =>{
    window.scrollTo({top:0, behavior: 'smooth'})
}

  return (
      <div className="rate-card inner-border">
        <div className="top-left">
      <img src={props.banner} alt={props.alt} className="card-banner"></img>
          <h1 style={{ color: props.color }} className="D">
            D
          </h1>
          <i style={{ color: props.color }} className={`fa-solid ${props.suit}`}></i>
        </div>
        <div className="content">
          <h1 className="rate-name">{props.name}</h1>
          <h3 className="sub-name">{props.subName}</h3>
          <ol className="service-list">
            <li>{props.bulletOne}</li>
            <li>{props.bulletTwo}</li>
            <li>{props.bulletThree}</li>
            <li>{props.bulletFour}</li>
            <li>{props.bulletFive}</li>
            <li>{props.bulletSix}</li>
            <li>{props.bulletSeven}</li>
            <li>{props.bulletEight}</li>
            <li>{props.bulletNine}</li>
          </ol>
          <Link to={`/contact/${props.name}`} className="quote-link" onClick={Top}>
            GET A FREE QUOTE
          </Link>
          <div className="bottom-right">
            <h1 style={{ color: props.color }} className="D">
              D
            </h1>
            <i style={{ color: props.color }} className={`fa-solid ${props.suit}`}></i>
          </div>
        </div>
      </div>
  );
}

export default Ratecard
