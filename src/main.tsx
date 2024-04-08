import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes.global.tsx'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<AppRoutes />)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event: unknown, message: string) => {
  console.log(message)
})