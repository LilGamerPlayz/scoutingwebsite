import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "Components/App.tsx"
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event: unknown, message: string) => {
  console.log(message)
})
