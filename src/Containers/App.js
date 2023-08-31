import { Component } from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from "../Components/Searchbox";
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBoundry";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }
}

export default App;
