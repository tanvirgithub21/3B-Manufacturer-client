/*  
    Requirements this Project 
      * import React from "react";
      * import { AiFillStar, AiOutlineStar } from "react-icons/ai";
      * import { BsStarHalf } from "react-icons/bs";
    and used react icon package 
    https://react-icons.github.io/react-icons/
    install command 
    npm install react-icons --save
    before not install used 
    npm install react-icons --save --force
*/

import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const colorAndSize = { color: "#ffe234", fontSize: "1.3rem", display: "flex", marginRight: "6px" }

const Rating = ({ children }) => {
  if(children == .5){
    return(
      <div style={colorAndSize}>
        <BsStarHalf /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }

  else if(children == 0.5){
    return(
      <div style={colorAndSize}>
        <BsStarHalf /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  
  else if(children == 1){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(children == 1.5){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><BsStarHalf /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(children == 2){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(children == 2.5){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><BsStarHalf /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(children == 3){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(children == 3.5){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /><AiOutlineStar />
      </div>
    )
  }
  else if(children == 4){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
      </div>
    )
  }
  else if(children == 4.5){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf />
      </div>
    )
  }
  else{
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
      </div>
    );
  }
};

export default Rating;