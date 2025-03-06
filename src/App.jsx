import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Logo.jsx'
import NavBar from './NavBar.jsx'
import SearchBar from './SearchBar.jsx'
import Content from './Content.jsx'
import SideBar from './SideBar.jsx'
;

function App() {
  return (
    <div>
      <Logo />
      <NavBar />
      <SearchBar />
      <Content />
      <SideBar />
    </div>
  )
}

export default App
