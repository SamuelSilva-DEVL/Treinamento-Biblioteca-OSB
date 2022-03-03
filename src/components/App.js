import React from 'react'
import { IoSearchCircle } from 'react-icons/io5'
import './App.css'
import Informacoes from './Info'
import { useState, useEffect } from 'react'
import Resultados from './Results'

const urlBase = 'https://hn.algolia.com/api/v1/search?query='

export default function App() {
  const [text, setText] = useState('')

  function handleText(e) {
    e.preventDefault()
    setText(document.querySelector('#search').value)
  }

  return (
    <div className="container">
      <h2>Biblioteca!!</h2>
      <div className="busca">
        <form>
          <input
            type="text"
            id="search" /* onChange={e => setText(e.target.value)} */
          />
          <button onClick={handleText} className="iconePesquisa">
            <IoSearchCircle />
          </button>
        </form>
      </div>
      <section>
        <Resultados res={text} />
      </section>
    </div>
  )
}
