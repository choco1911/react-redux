import React from 'react'
import { render } from 'react-dom'
import './index.css'
import store from './state'

const  App = () => {
    return (
        <div>
            <h1 className="title">It works!!!111</h1>
        </div>
    )
}
render(<App /> , document.getElementById('cntnr'))

store.subscribe(() =>  console.log('New state', store.getState()))

console.log('increase')
store.dispatch({
    type: 'INCREASE_COUNTER'
})

console.log('increase')
store.dispatch({
    type: 'INCREASE_COUNTER'
})

console.log('reset')
store.dispatch({
    type: 'RESET_COUNTER'
})

console.log('uknown')
store.dispatch({
    type: 'UNKNOWN'
})
