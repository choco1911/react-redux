import React from 'react'
import { render } from 'react-dom'
import './index.css'

const  App = () => {
    return (
        <div>
            <h1 className="title">It works!!!111</h1>
        </div>
    )
}
render(<App /> , document.getElementById('cntnr'))
