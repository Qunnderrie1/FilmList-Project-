import { motion } from 'framer-motion';
import React from 'react'
import '../App.css'

const MovieCard = (props) => {
  return (
    <motion.div 
    whileHover={{scale: 1.1}}
    transition={{duration:0.3}}
    initial={{opacity:0}}
    whileInView={{opacity:1}}
     className='movieContainer container shadow-lg'>
        <img src={props.img} alt="" srcset="" />
        <h1>{props.title}</h1>
        <article>{props.description}</article>
        <p>Directed by: {props.director}</p>
    </motion.div>
  )
}


export default MovieCard;