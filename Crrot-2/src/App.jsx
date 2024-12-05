import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/Product'
import Style1 from './component/cards component/style1';
import Style2 from './component/cards component/style2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product/>
      <Style1/>
      <Style2/>
    </>
  )
}

export default App
