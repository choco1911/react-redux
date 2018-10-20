import {createStore, combineReducers} from 'redux'
import counterReducer from '../reducers/counter'
import issuesReducer from '../reducers/issues'

const reducer = combineReducers({
        counter: counterReducer,
        issues: issuesReducer
})

const store = createStore(reducer, {
    issues: [],
    repository: '',
    counter: 0
})

export default store
