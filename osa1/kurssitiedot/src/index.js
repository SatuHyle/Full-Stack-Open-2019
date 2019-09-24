import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => { //div ei tarvita, koska yksi rivi html:aa
    return (
      <h1>{props.course.name}</h1>
    )
  }

const Part = (props) => { //div tarvitaan jos html:aa on enemman kuin yksi rivi
    return (
      <div>
        <h2>{props.part}</h2>
        <p>Number of exercises: {props.exercises}</p> 
      </div>
      ) 
  }

  const Content = (props) => {
    return (
      <div>
      {props.parts.map(part => (
      <Part part={part.name} exercises={part.exercises} />
      ))}
      </div>
    )
}

const Total = (props) => {
    return (
        <h2>Total number of exercises {props.all_parts[0].exercises + props.all_parts[1].exercises + props.all_parts[2].exercises}</h2>
    )
  }

  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }

    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} /> 
        <Total all_parts={course.parts} />
      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))
