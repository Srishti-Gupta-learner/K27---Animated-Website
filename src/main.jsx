import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './components/common/Stair.jsx'
import Navbar from './components/nav/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Stair>
        <Navbar/>
          <App />
        {/* </NavContext> */}
      </Stair>
    </BrowserRouter>
  </React.StrictMode>,
)
