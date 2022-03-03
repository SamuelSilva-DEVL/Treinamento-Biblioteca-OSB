import React, { useState, useEffect } from 'react'
import Informacoes from './Info'
import './App.css'

const urlBase = 'https://hn.algolia.com/api/v1/search?query='

export default function Results(props) {
  const [livros, setLivros] = useState([])

  useEffect(() => {
    if (props.res) {
      fetch(`${urlBase}${props.res}`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setLivros(response)
        })
    } else {
      fetch(`${urlBase}`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setLivros(response)
        })
    }
  }, [props.res])

  return (
    <div>
      {livros.hits?.map((livro, index) => (
        <li key={index} >
          <Informacoes
            autor={livro.author}
            titulo={livro.title ? livro.title : livro.story_title}
            url={livro.url ? livro.url : livro.story_url}
          />
        </li>
      ))}
    </div>
  )
}
