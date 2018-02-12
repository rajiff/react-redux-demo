import { ADD_SKILL, REMOVE_SKILL } from './ActionTypes';

function onAddNewSkill(newSkill) {
  const action = {
    type: ADD_SKILL,
    payload: { newSkill },
    error: false
  };
  return action;
}

function onRemoveSkill(skillName) {
  const action = {
    type: REMOVE_SKILL,
    payload: { skillName },
    error: false
  };
  return action;
}

/*const addSkill = (newSkill) => dispatch(onAddNewSkill(newSkill));
const removeSkill = (skillName) => dispatch(onRemoveSkill(skillName));
*/
export {
  onAddNewSkill,
  onRemoveSkill,
	// dispatchAddSkill,
	// dispatchRemoveSkill
}