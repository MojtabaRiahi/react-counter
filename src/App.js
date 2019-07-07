import React, { Component } from 'react';
import './App.css';
import NavBar from './component/navbar'
import Counters from './component/counters';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handelRest = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handelIncreament = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };
  handelDelete = counterId => {
    console.log("delete", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar tolalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handelRest} onDelete={this.handelDelete} onIncreament={this.handelIncreament} />
        </main>
      </React.Fragment>
    );
  }

}

export default App;
