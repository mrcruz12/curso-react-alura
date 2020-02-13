import React from 'react'

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th>Authors</th>
				<th>Books</th>
				<th>Prices</th>
				<th>Remove</th>
			</tr>
		</thead>
	)
}
const TableBody = ({ books, removeBook }) => {
	return (
		<tbody>
			{books.map((book, index) => (
				<tr key={index}>
					<td>{book.author}</td>
					<td>{book.title}</td>
					<td>{book.price}</td>
					<td>
						<button onClick={() => removeBook(index)}>Remover</button>
					</td>
				</tr>
			))}
		</tbody>
	)
}

export default ({ books, removeBook }) => {
	return (
		<table>
			<TableHead />
			<TableBody books={books} removeBook={removeBook} />
		</table>
	)
}
