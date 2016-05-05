import * as Actions from '../actions/Notes';
import React from 'react';

export default function Notes(state={
	notes: [],
	noteIndex: 0
}, action) {
	switch (action.type) {
		case Actions.ADD_NOTE:
			return Object.assign(
				{}, 
				state, 
				{
					notes: [...state.notes, {title: 'test', contents: (<h1>YOOOO</h1>)}],
					noteIndex: state.noteIndex+1
				}
			);
		default:
			return state;
	}
}