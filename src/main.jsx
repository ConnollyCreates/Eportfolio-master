import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { injectSpeedInsights } from '@vercel/speed-insights'
import './index.css'
import App from './App.jsx'

const hostname = window.location.hostname
const speedInsightsHosts = ['gabeconnolly.me', 'www.gabeconnolly.me']

if (
  import.meta.env.PROD &&
  (speedInsightsHosts.includes(hostname) || hostname.endsWith('.vercel.app'))
) {
  injectSpeedInsights()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
