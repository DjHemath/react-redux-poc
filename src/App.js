import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  increment = () => {
    this.props.dispatch({'type': "INCREMENT"})
  }

  decrement = () => {
    this.props.dispatch({'type': "DECREMENT"})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.decrement}>-</button>
        <input type="number" value={this.props.counter} disabled />
        <button onClick={this.increment}>+</button>
      </div>
    );
  }

}

const mapStateToProps = (store) => {
  return {
      counter: store
  }
}

export default connect(mapStateToProps)(App);
