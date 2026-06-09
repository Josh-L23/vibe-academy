import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlowyWavesHero } from './components/ui/glowy-waves-hero'
import './styles/main.css'

// Mount Hero
const heroElement = document.getElementById('hero-root')
if (heroElement) {
  ReactDOM.createRoot(heroElement).render(
    <React.StrictMode>
      <GlowyWavesHero />
    </React.StrictMode>,
  )
}
