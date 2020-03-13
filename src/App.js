import React, { Component } from 'react';
import CardList from './components/card-list/CardList';
import Search from './components/search/Search'
import './index.css';
import './App.css';


class App extends Component {
  state = {
    monsters: [],
    search: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }))
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search placeholder="search monster" handleChange={this.handleChange} filteredMonster={filteredMonster} />
        <CardList monster={filteredMonster} />
      </div>
    )
  }
}

export default App
