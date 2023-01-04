import React from 'react'
import './article.css';

// Cambiar la imagen para todos los 
//Para eso se usara los props, se obtendra tambien la fecha y el titulo correpondiente de cada imagen
const Article = ({ imgUrl, date, title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="blog"/>
      </div>
    </div>
  )
}

export default Article