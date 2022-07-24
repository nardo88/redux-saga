const defaultState = {
    count: 0
}

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export default function countReducer(state = defaultState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

export const incrementCreator = () => ({type: INCREMENT})
export const decrementCreator = () => ({type: DECREMENT})