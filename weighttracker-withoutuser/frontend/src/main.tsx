import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import WeightContextProvider from './StateManagement/WeightContextProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WeightContextProvider>
        <App />
    </WeightContextProvider>
  </React.StrictMode>,
)
