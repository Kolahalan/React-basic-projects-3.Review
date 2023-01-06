import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,image,text,job} = people[index]
  const checkindex = (newindex) => {
    if (newindex < 0) {
      return (people.length - 1)
    }
    else if (newindex > people.length -1) {
      return (0)
    }
    else {
      return (newindex)
    }
  }

  const prevbutton= () => {
    setIndex((index)=>{
let newindex = index - 1
    return checkindex(newindex)
    })
    
  }

    const nextbutton= () => {
      setIndex((index)=>{
        let newindex = index+1
    return checkindex(newindex)
      })
    
  }
 const randombutton = () => {
      let randomIndex = Math.floor(Math.random() * people.length)
      if (randomIndex === index) {
        randomIndex = index+1
      } 
      setIndex(checkindex(randomIndex))
      console.log(index)
  }
  return (
     <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevbutton}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextbutton}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randombutton}>
        surprise me
      </button>
    </article>
  )
}

export default Review