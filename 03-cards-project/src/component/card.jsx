import React from 'react'

const Card = () => {
  return (
    <div className="card">
        <div className="top">
          <img src="https://images.seeklogo.com/logo-png/29/2/amazon-icon-logo-png_seeklogo-297884.png" alt="" />
          <button>Save<i class="ri-bookmark-line"></i></button>
        </div>

        <div className="center">
          <h4>Amazon <span>5 days ago</span></h4>
          <h3>Senior UI/UX Designer</h3>
          <div className="part-time">
            <h4>Part-Time</h4>
            <h4>Senior Lacel</h4>
          </div>
        </div>

        <div className="buttom">
          <div className="contant">
            <h1>$120</h1>
            <p>Mumbai India</p>
          </div>
          <div className="btn">
            <button>Apply now</button>

          </div>

        </div>
      </div>
  )
}

export default Card
