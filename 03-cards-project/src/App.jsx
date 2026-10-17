import React from 'react'
import Card from './component/card'
import User from './component/user'

const App = () => {
  const arr = [
    {
      user: 'Kishan',
      age: 30
    },
    {
      user: 'Rahul',
      age: 10
    },
    {
      user: 'Lucky',
      age: 15
    }
  ]

  arr.map(function (elem){
     console.log(elem.age);
  } )
  return (
    <div className='parant'>
      <Card />
      <User />
     
      
    </div>
  )
}

export default App
