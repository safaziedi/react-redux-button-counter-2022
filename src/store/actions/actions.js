import * as ACTIONS_TYPES from "./actions_types";

export const increment = amount => {
	// console.log(amount) ==== amount = parametre passé vers cette fct
	return {
		type: ACTIONS_TYPES.INCREMENT_COUNTER,
		payload: amount
	};
};


export const decrement = amount => {
	return {
		type: ACTIONS_TYPES.DECREMENT_COUNTER,
		payload: amount
	};
};