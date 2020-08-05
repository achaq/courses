import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component"
class App extends Component{
  constructor() {
    super();

    this.state={
      courses: [],
      searchField : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({courses: users}))
  }


  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render() {
    const {courses, searchField} = this.state;
    const filteredCourses = courses.filter(
        course => course.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return ( <div className="App">
      <h1> programming courses</h1>
      <SearchBox
          placeholder='search courses'
          handleChange={this.handleChange}
      />

      <CardList courses = {filteredCourses}>
      </CardList>

    </div>);
  }
}
export default App;
