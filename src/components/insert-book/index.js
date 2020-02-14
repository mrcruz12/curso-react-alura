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
      addBooks(book)
      clearInputs()
    } else alert('Preencha todos os campos')
  }

  const handleChange = (e, func) => {
    const { value } = e.target
    func(value)
  }

  return (
    <div className='row'>
      <div className='input-field col s4'>
        
        <input
        className='validate'
        placeholder='Author'
          id='author'
          value={author}
          onChange={e => handleChange(e, setAuthor)}
          name='author'
          type='text'
        />
      </div>
      <div className='input-field col s4'>
        <label htmlFor='title'>title</label>
        <input
          id='title'
          value={title}
          onChange={e => handleChange(e, setTitle)}
          name='title'
          type='text'
        />
      </div>
      <div className='input-field col s2'>
        <label htmlFor='price'>Price</label>
        <input
          id='price'
          value={price}
          onChange={e => handleChange(e, setPrice)}
          name='price'
          type='text'
        />
      </div>
      <div className='input-field col s2'>
        <button className='waves-effect waves-light btn indigo lighten-1' onClick={() => addList()}>Save</button>
      </div>
    </div>
  )
}
