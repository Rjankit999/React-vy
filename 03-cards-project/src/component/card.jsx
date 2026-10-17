import React from 'react'

const Card = (props) => {
  console.log(props);
  console.log(props.name);
  
  return (
    <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save<i class="ri-bookmark-line"></i></button>
        </div>

        <div className="center">
          <h4>{props.company} <span>{props.date}</span></h4>
          <h3>{props.post}r</h3>
          <div className="part-time">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="buttom">
          <div className="contant">
            <h1>{props.pay}</h1>
            <p>{props.location}</p>
          </div>
          <div className="btn">
            <button>Apply now</button>

          </div>

        </div>
      </div>
  )
}

export default Card
