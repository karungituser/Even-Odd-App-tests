// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumber = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="evenOdd-Container">
          <h1 className="heading">Count {count}</h1>
          <p className="count">Count is {displayText}</p>
          <button className="button" type="button" onClick={this.randomNumber}>
            Increment
          </button>
          <p className="content">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
