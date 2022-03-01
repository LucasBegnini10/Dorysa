import React, { useState } from "react"
import "./App.css"
const axios = require("axios")

export default function App(){
  
    const [idCategory, setIdCategory] = useState('');
    const [nameCategory, setNameCategory] = useState('');

    const url = "http://localhost:3001"
    const infos = {
      id: idCategory,
      name: nameCategory,
    }

    function create(){
      axios
      .post(`${url}/category`, infos)
      .then(result => result.data())
      .catch(err => console.log(err))
    }

    function read(){
      axios
      .get(`${url}/category`, infos)
      .then(result => result.data())
      .catch(err => console.log(err))
    }

    function update(){
      axios
      .put(`${url}/category`, infos)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    } 

    function delet(){
      axios
      .delete(`http://localhost:3001/category/${idCategory}`)
    }


  return(
    <div className="app">

        <input 
        placeholder="Digite o id"
        onChange={(e) => setIdCategory(e.target.value)}/>

        <br></br>

        <input 
        placeholder="Digite o nome da Categoria"
        onChange={(ev)  => setNameCategory(ev.target.value)}/>

        <br></br><br></br>

        <button onClick={create}>Inserir</button>
        <button onClick={read}>Exibir</button>
        <button onClick={update}>Editar</button>
        <button onClick={delet}>Deletar</button>

        
    </div>
  )
}


