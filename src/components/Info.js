import React from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { ImBook } from 'react-icons/im'
import './App.css'

export default function Informacoes(props) {
  return (
    <div className="informacoes">
      <p className="links">
        <FaUserAlt /> <strong>Altor: {props.autor}</strong>
      </p>
      <p className="links">
        <ImBook /> <strong>Titulo: {props.titulo}</strong>
      </p>
      <p className="links">
        <BsLink45Deg /> <strong>Link: {props.url}</strong>
      </p>
    </div>
  )
}
