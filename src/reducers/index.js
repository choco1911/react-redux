import counter from './counter'

//Because it's small reducers
export function issues(state=[], action) {
    switch(action.type) {
    case 'LOAD_ISSUES':
        return action.payload
    default:
        return state
    }
}

export {counter}
