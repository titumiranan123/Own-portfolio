import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Main from './component/Layout/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className=' bg-slate-900  '>
      <Main />

    </div>
  </React.StrictMode>,
)
