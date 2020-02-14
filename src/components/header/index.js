import React from 'react'

export default () => {
  return (
    <nav>
      <div class='nav-wrapper indigo lighten-1'>
        <a href='#' class='brand-logo'>
          Curso React Alura
        </a>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <a href='sass.html'>Books</a>
          </li>
          <li>
            <a href='badges.html'>Authors</a>
          </li>
          <li>
            <a href='collapsible.html'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
