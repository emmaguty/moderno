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
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
          <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article