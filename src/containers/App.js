import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
// import Scroll from '../components/Scroll';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            robots: [],
            searchValue: ''
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robots =>
                this.setState({
                    robots: robots
                })
            );
    }

    handleSearchChange(e) {
        const searchValue = e.target.value;

        this.setState({
            searchValue: searchValue
        });
    }

    render() {
        const { robots, searchValue } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        return filteredRobots.length ? (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox
                    searchValue={this.state.searchValue}
                    onSearchChange={this.handleSearchChange}
                />
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </div>
        ) : (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox
                    searchValue={this.state.searchValue}
                    onSearchChange={this.handleSearchChange}
                />
                <div>Loading...</div>
            </div>
        );
    }
}

export default App;
