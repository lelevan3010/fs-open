import React, { useState } from 'react'

const App = () => {
  // Reference: https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array/11301464
  function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteArr, setVoteArr]   = useState(new Array(6).fill(0))
  console.log(voteArr)
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]} has {voteArr[selected]} votes
      </div>
      <button onClick={() => {
        const copyArr = [...voteArr]
        copyArr[selected] += 1
        setVoteArr(copyArr)
      }}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 5))}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[indexOfMax(voteArr)]}</div>
    </>
  )
}

export default App