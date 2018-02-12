import { GOT_SKILLS, ERROR_IN_REQUEST, ADD_SKILL, REMOVE_SKILL, GOT_GIT_USER } from './ActionTypes';

let initialState = {
	gitUser: {},
  skillColln: [],
  error: null
}

export default function(previousState = initialState, action) {
	switch(action.type) {
		case GOT_SKILLS: {
			return Object.assign({}, previousState, {
        skillColln: action.payload.skills
      })
		}
		case ERROR_IN_REQUEST: {
			return Object.assign({}, previousState, {
        error: action.payload.error
      })
		}
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
		case GOT_GIT_USER : {
			return Object.assign({}, previousState, {
      	gitUser: action.payload.gitUser
      })
		}
		default:
			return previousState;
	}
}


// @TODO : Refactor above by splitting the reducers to modules and combine them using  import { combineReducers } from 'redux'