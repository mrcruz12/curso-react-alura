import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Table from './components/table'

function App() {
	const [books, setBooks] = useState([
		{ autor: 'Matheus', title: 'React Js', price: 32.5 },
		{ autor: 'Cruz R. M.', title: 'Node Js', price: 37.5 },
		{ autor: 'Rodrigues M.', title: 'React Js', price: 32.5 }
	])

	const addList = (autor, title, price) => {
		console.log('autor: ' + autor)
		console.log('title: ' + title)
		console.log('price: ' + price)

		autor === '' || title === '' || price === ''
			? alert('Preencha todos os campos')
			: AddBooks(autor, title, price)
	}
	const AddBooks = (autor, title, price) => {
		let book = { autor: autor, title: title, price: price }
    setBooks([...books, book])
    document.getElementById('autor').value = ''
    document.getElementById('title').value = ''
    document.getElementById('price').value = ''
	}
	const removeBook = (index) => {
		setBooks(books.filter((row, indexR) => {
      return index !== indexR;
    }))
	}
	return (
		<div className="App">
			<div>
				<input placeholder="autor" id="autor" type="text" />
				<input placeholder="title" id="title" type="text" />
				<input placeholder="price" id="price" type="text" />
				<button
					onClick={() =>
						addList(
							document.getElementById('autor').value,
							document.getElementById('title').value,
							document.getElementById('price').value
						)
					}
				>
					Adicionar
				</button>
			</div>

			<Table books={books} removeBook={removeBook}/>
		</div>
	)
}

export default App
