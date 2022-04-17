import React from "react";
import "../comps/BeerCard.css"

function BeerCard(props) {
  return (
    <li id="beerCard">
      <div id="infoBox">
        <div className="beerName"><b>Name:</b> <br></br>{props.beer.name}</div>
        <div className="beerLine"><b>Tagline:</b> <br></br><i>{props.beer.tagline}</i></div>
        <div className="beerDesc"><b>Description:</b> <br></br>{props.beer.description}</div>

      </div>
      <div id="imgAndButton">
        <img src={props.beer.image_url} id="beerImg"></img>
        <button onClick={((e) => {props.favorite(props.id)})} id={props.id} >Favorite</button>
      </div>
    </li>
  )
}

export default BeerCard