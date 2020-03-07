import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import './Food.scss'

function Food({imageSrc}) {
  const [inputs, setInputs] = useState({
    user_id:'1',
    food_id:'1'
  });

  const onClick = () => {
    console.log('click event ');
    //DB 선호도 내리기
    fetch('/hate',{method: 'POST', body:JSON.stringify(inputs),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }})
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  };

  return (
    <div className="food-container">
      <div className="food">
        <img src={imageSrc} alt="foodImage"/>
        <button onClick={onClick}>
          <FontAwesomeIcon size="2x" icon={faThumbsDown}/>
        </button>
      </div>
    </div>
  );
}

export default Food;