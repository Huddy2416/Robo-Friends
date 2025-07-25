import React, { Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"; // Assuming you have a SearchBox component
import './App.css'; // Assuming you have some styles in App.css
import Scroll from "../components/Scroll"; // Assuming you have a Scroll component

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
}
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
   return !robots.length ? 
    <h1>Loading...</h1> :
    ( 
        <div className="tc">
            <h1 className="b">RoboFriends</h1>
            <SearchBox searchChange={this.OnSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
}
}

export default App;