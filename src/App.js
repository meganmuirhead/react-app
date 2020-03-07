import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
       persons: [
           {name: 'Megan', age: 29},
           {name: 'Gabby', age: 22},
           {name: 'Jacob', age: 46},
       ],
       togglePerson: false,
    }

    switchPersonsInfo = (nameUpdate) => {
        this.setState({persons: [
                {name: nameUpdate, age: 29},
                {name: 'Gabby', age: 22},
                {name: 'Jacob', age: 12},
            ] })
    }
    nameChangedHandler = (event) => {
        event.preventDefault();
        this.setState({persons: [
                {name: 'Megan', age: 29},
                {name: event.target.value, age: 22},
                {name: 'Jacob', age: 12},
            ] })

    }
    togglePerson = (e) => {
        let doesShow = this.state.togglePerson;
        this.setState({togglePerson: !doesShow})
    }
  render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }
        let persons = null;

        if(this.state.togglePerson) {
            persons = (
                <div>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    switchPersonsInfo={this.switchPersonsInfo.bind(this, "mega")}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    nameChangedHandler={this.nameChangedHandler}

                >My Hobbies include: Art</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
            )

        }
    return (
      <div className="App">
       <h1>Hi I'm a React App</h1>
          <p>This is really working</p>
          <button style={style}
                  onClick={this.togglePerson}
          >Switch Name</button>
          {persons}

      </div>
    );
  }
}

export default App;
