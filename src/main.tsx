import React from 'react'
import ReactDOM from 'react-dom/client'
import { SplineSceneBasic } from './components/ui/demo'
import './styles/main.css'
import './styles/utilities.css'
import './styles/variables.css'
import './styles/base.css'

// Find the element to mount our 3D component
const splineElement = document.getElementById('spline-root')

if (splineElement) {
  ReactDOM.createRoot(splineElement).render(
    <React.StrictMode>
      <SplineSceneBasic />
    </React.StrictMode>,
  )
}
