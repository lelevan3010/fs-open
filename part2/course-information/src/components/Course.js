const Header = ({ course }) => {
    console.log(course)
    return (
      <h1>{course.name}</h1>
    )
  }
  
const Total = ({ course }) => {
    // ref> https://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects
    const sum = course.parts.reduce((s, p) => {
        return {exercises: s.exercises + p.exercises};
    })
    return(
        <p>Number of exercises {sum.exercises}</p>
    ) 
}
  
const Part = (props) => {
    return (
        <p>
        {props.part.name} {props.part.exercises}
        </p>    
    )
}
  
const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map((part, index) => {
                return <Part part={part} />
            })}
        </div>
    )
}

export const Course = ({ course }) => {
    return (
        <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
        </div>
    )
}