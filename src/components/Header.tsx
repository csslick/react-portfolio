import { useState } from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <header id='header'>
      <h1> <a href="#intro">REACT PORTFOLIO</a></h1>
      <nav className={toggle ? 'active': ''}>
        <ul>
          <li><a href="#intro">intro</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#works">works</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
      <button
        onClick={ () => {setToggle(!toggle) }} 
        className='mobile-toggle'>toggle</button>
    </header>
  )
}
