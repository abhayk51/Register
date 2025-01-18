import Dashboard from './Components/Dashboard.jsx'
import LoginForm from './Components/LoginForm.jsx'
import './App.css'

function App() {
  return (
    <div className='container-fluid py-4'>
    <LoginForm/>
    <Dashboard/>
    </div>
  )
}

export default App