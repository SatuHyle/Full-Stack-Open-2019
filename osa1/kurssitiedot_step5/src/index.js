import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }

const Part = (props) => {
    return (
      <p>{props.part + " " + props.exercises}</p>
      )
  }

  const Content = (props) => {
      return (
        <>
          {props.parts.map(part => (
          <Part part={part.name} exercises={part.exercises} />
          ))}
        </>
    )
}

const Total = (props) => {
    return (
      <div>
        <h2>Total number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</h2>
      </div>
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
        <Total parts={course.parts} />
      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))
