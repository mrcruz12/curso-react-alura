import React from 'react'

export default ({ addBooks }) => {
  const addList = (newautor, newtitle, newprice) => {
    // console.log('autor: ' + autor)
    // console.log('title: ' + title)
    // console.log('price: ' + price)

    if (!(newautor === '' || newtitle === '' || newprice === '')) {
      let book = { autor: newautor, title: newtitle, price: newprice }
      console.log(book)
      addBooks(book)
      document.getElementById('autor').value = ''
      document.getElementById('title').value = ''
      document.getElementById('price').value = ''
    } else alert('Preencha todos os campos')
  }

  return (
    <div>
      <input placeholder='autor' id='autor' type='text' />
      <input placeholder='title' id='title' type='text' />
      <input placeholder='price' id='price' type='text' />
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
  )
}
