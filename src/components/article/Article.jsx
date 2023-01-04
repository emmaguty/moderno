import React from 'react'
import './article.css';

// Cambiar la imagen para todos los 
//Para eso se usara los props
const Article = ({ imgUrl }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="blog image" />
      </div>
    </div>
  )
}

export default Article