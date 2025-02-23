import { useState } from 'react'
import  Dashboard  from './components/Dashboard.jsx'
import BudgetSection from './components/BudgetSection.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
      <BudgetSection />
    </>
  )
}

export default App
