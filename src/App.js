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

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        })

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons })
    };

    togglePerson = (e) => {
        e.preventDefault();
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
            backgroundColor: 'blue',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }
        let persons = null;

        const classForStyling = [];
        if(this.state.persons.length <= 2) {
            classForStyling.push('red');
        }
        if(this.state.persons.length <= 1) {
            classForStyling.push('bold');
        }


        if(this.state.togglePerson) {
            persons = (

                <div>
                    {this.state.persons.map((person, index)  => {
                        return <Person
                            deletePersonHandler={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            nameChangedHandler={(event) =>this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            )
            style.backgroundColor = 'lightgreen'

        }
    return (
      <div className="App">
       <h1>Hi I'm a React App</h1>
          <p className={classForStyling.join(' ')}>This is really working</p>
          <button style={style}
                  onClick={this.togglePerson}
          >Switch Name</button>
          {persons}

      </div>
    );
  }
}

export default App;
