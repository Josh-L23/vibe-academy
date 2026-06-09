import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthUI } from './components/ui/auth-fuse'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('auth-root')!).render(
  <React.StrictMode>
    <AuthUI />
  </React.StrictMode>,
)
