import LoginForm from './Components/LoginForm.jsx'
import Dashboard from './Components/Dashboard.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
  ])
  return (
    <div className='container-fluid py-4'>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App