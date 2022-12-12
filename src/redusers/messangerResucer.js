function reducer(state, action) {
    switch(action.type) {
        case 'DATA_LOAD_SUCCESS' : {
            const {data : {comments}} = action;
            const newState = {
                ...state,
                messages : comments
            }
            return newState
        }
        case 'DATA_LOAD_ERROR' : {
            const {error} = action;
            return {
                ...state,
                error
            }
        }

        case 'ADD_NEW_MESSAGE' : {
            const {message : {body, user}} = action;
            const newArrayMessage =[...state.messages, {
                body,
                user,
                id: state.messages.length
            }];
            return {
                ...state,
                messages: newArrayMessage
            }
        }

        default: {
            return state
        }
    }
} 

export default reducer;