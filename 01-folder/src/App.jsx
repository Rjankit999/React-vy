import React from 'react'

const App = () => {
  return (
    <div>
     <div className="parant">
      <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIINQvEsieS7d_OKA7hKxeJNDGNGgT-nxWOlW0In7byg&s=10" alt="" />
        <button>Save</button>

        </div>
        <div className="center">
          <h2>Amazon <span>5days ago</span></h2>
          <h1>Senior UI/UX Designer</h1>
          <div className="btn">
            <button>Part-Time</button>
            <button>Senior-Level</button>
          </div>
        </div>

        <div className="buttom">
          <div className="hr">
            <h2>$120/hr</h2>
            <p>Mumbai, india</p>
          </div>
          <div className="apply">
            <button>Applay Now</button>
          </div>
        </div>
        
      </div>
     </div>
    </div>
  )
}

export default App
