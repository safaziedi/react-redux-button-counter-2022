import * as ACTIONS_TYPES from '../actions/actions_types'

const initialState ={
	count:1,
}

const CountReducer = (state = initialState.count, action) => {
	//reducer = update selon action type
	switch(action.type) {
        case ACTIONS_TYPES.INCREMENT_COUNTER:
            return state + action.payload;
		case ACTIONS_TYPES.DECREMENT_COUNTER:
				return state - action.payload;
		default:
			return state;
	}
};

export default CountReducer;