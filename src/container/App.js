import React, { Component } from 'react';

import { SearchBox } from '../components/search-box/search-box.component';
import { CardList } from '../components/card-list/card-list.component';
import './App.css';
import '../components/assets/fonts/BigelowRules-Regular.ttf'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSignInAlt, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars, faSignInAlt, faUserPlus, faSearch);

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
