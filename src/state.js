import {createStore, combineReducers} from 'redux'
import * as reducers from './reducers'
/*
import counterReducer from '../reducers/counter'
import issuesReducer from '../reducers/issues'
*/

console.log('[It\' Reducer Object]', reducers)

const reducer = combineReducers(reducers)

const store = createStore(reducer, {
    issues: [],
    repository: '',
    counter: 0
})

export default store
