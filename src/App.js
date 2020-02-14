import React, { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Table from './components/table'
import Inputs from './components/insert-book'
import Header from './components/header'

function App () {
  const [books, setBooks] = useState([
    { author: 'Matheus', title: 'React Js', price: 32.5 },
    { author: 'Cruz R. M.', title: 'Node Js', price: 37.5 },
    { author: 'Rodrigues M.', title: 'React Js', price: 32.5 }
  ])
  const removeBook = index => {
    setBooks(
      books.filter((row, indexR) => {
        return index !== indexR
      })
    )
  }
  const addBooks = book => {
    setBooks([...books, book])
  }
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Inputs addBooks={addBooks} />
        <Table books={books} removeBook={removeBook} />
      </div>
    </div>
  )
}

export default App
