import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
       persons: [
           {name: 'Megan', age: 29, id: 1},
           {name: 'Gabby', age: 22, id: 2},
           {name: 'Jacob', age: 46, id: 3},
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

    togglePerson = (e) => {
        let doesShow = this.state.togglePerson;
        this.setState({togglePerson: !doesShow})
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
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
                    {this.state.persons.map((person, index)  => {
                        return <Person
                            deletePersonHandler={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}/>
                    })}
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
