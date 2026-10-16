import React from 'react'
import Card from './componetes/Card'

const App = () => {
  return (
    <div>
      <div className="parant">
      
        <Card user="Aman" age={18}  img="https://images.unsplash.com/photo-1791292183261-158a21a5e713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
        <Card user="Rahul" age={28} img="https://images.unsplash.com/photo-1790992234941-88921bf21a96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
        <Card user="Raju" age={20} img="https://images.unsplash.com/photo-1792058867784-62591f193e02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
        <Card user="Kamran" age={25} img="https://images.unsplash.com/photo-1792152240190-b1c387361081?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />

        
      </div>

    </div>
  )
}

export default App
