import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BeerCard from './comps/BeerCard';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beerData: []
    }
  }

  componentDidMount() {
    this.initDataLoad()
  }

  initDataLoad = async () => {
    let qry = (await axios.get('https://api.punkapi.com/v2/beers')).data
    this.setState({
      beerData: [...qry]
    })
  }

  favorite = () => {
    
  }

  render() {
    return (
      <div>
        <button onClick={() => { console.log(this.state.beerData) }}>Click To Log Beer Info</button>
        {this.state.beerData.map((beer,index) => {
          return (
            <ul>
              <BeerCard key={index} beer={beer} />
            </ul>
          )
        })}
      </div>
    )
  }
}

export default App;
