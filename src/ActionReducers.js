import { ADD_SKILL, REMOVE_SKILL } from './ActionTypes';

let initialState = {
  skillColln: [
    { name: 'C++', level: 'expert' },
    { name: 'Java', level: 'amature' },
    { name: 'Node.js', level: 'expert' },
    { name: '.Net', level: 'dumb' },
  ]
}

export default function(previousState = initialState, action) {
	switch(action.type) {
		case ADD_SKILL: {
			let newSkill = action.payload.newSkill;

      return Object.assign({}, previousState, {
        skillColln: [...previousState.skillColln, newSkill]
      })
		}
		case REMOVE_SKILL: {
			let skillName = action.payload.skillName;
			let idxOfItemToRemove = previousState.skillColln.findIndex(s => s.name === skillName);

			// Filter out all skills, except the removed skill
      return Object.assign({}, previousState, {
      	skillColln: previousState.skillColln.filter((s, i) => i !== idxOfItemToRemove)
      })
		}
		default:
			return previousState;
	}
}


// @TODO : Refactor above by splitting the reducers to modules and combine them using  import { combineReducers } from 'redux'