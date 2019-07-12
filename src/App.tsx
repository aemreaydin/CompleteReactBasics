import React, { Component } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import { SearchBar } from './components/searchBar/searchBar';
import { Monster } from './components/card/card';

interface AppState {
  searchText: string;
  monsters: Monster[];
}
interface AppProps {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      searchText : "",
      monsters: [],
    }
  }

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({
      searchText: event.target.value,
    });

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()));
    return (
      <div className="App">
        <h1 className="App-title">Monster Index</h1>
        <SearchBar onChange={this.onChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
