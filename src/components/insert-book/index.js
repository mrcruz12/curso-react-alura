import React, { useState, Fragment } from 'react'

export default ({ addBooks }) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const clearInputs = () => {
    setAuthor('')
    setTitle('')
    setPrice('')
  }
  const addList = () => {
    if (!(author === '' || title === '' || price === '')) {
      let book = { author, title, price }
      console.log(book)
      addBooks(book)
      clearInputs()
    } else alert('Preencha todos os campos')
  }

  const handleChange = (e, func) => {
    const { value } = e.target
    func(value)
  }

  return (
    <Fragment>
      <label htmlFor='author'>author</label>
      <input
        placeholder='author'
        id='author'
        value={author}
        onChange={e => handleChange(e, setAuthor)}
        name='author'
        type='text'
      />
      <label htmlFor='title'>title</label>
      <input
        placeholder='title'
        id='title'
        value={title}
        onChange={e => handleChange(e, setTitle)}
        name='title'
        type='text'
      />
      <label htmlFor='price'>Price</label>
      <input
        placeholder='price'
        id='price'
        value={price}
        onChange={e => handleChange(e, setPrice)}
        name='price'
        type='text'
      />
      <button onClick={() => addList()}>Save</button>
    </Fragment>
  )
}
