import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Table from './components/table'
import Inputs from './components/insert-book'
function App () {
  const [books, setBooks] = useState([
    { autor: 'Matheus', title: 'React Js', price: 32.5 },
    { autor: 'Cruz R. M.', title: 'Node Js', price: 37.5 },
    { autor: 'Rodrigues M.', title: 'React Js', price: 32.5 }
  ])
  const removeBook = index => {
    setBooks(
      books.filter((row, indexR) => {
        return index !== indexR
      })
    )
  }
  const addBooks = ( book ) => {
	setBooks([...books, book])
  }
  return (
    <div className='App'>
      <Inputs addBooks={addBooks} />
      <Table books={books} removeBook={removeBook} />
    </div>
  )
}

export default App
