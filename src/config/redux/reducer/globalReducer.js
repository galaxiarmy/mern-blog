const initialState = {

    name: 'Hanif'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Pratama'
        }
    }
    return state;

}

export default globalReducer;