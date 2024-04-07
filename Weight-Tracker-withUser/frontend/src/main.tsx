import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WeightContextProvider from './state/WeightContextProvider.tsx'
import UserContextProvider from './state/UserContextProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <WeightContextProvider>
          <App />
        </WeightContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
