import { GOT_SKILLS, ERROR_IN_REQUEST, ADD_SKILL, REMOVE_SKILL } from './ActionTypes';
import request from 'superagent';

function onFetchSkills() {
  return function(dispatch) {
    let url = "/skills";
    // let url = "https://this-will-never-exists.com";

    // You can dispatch one action to inform, request is in progress

    // Return the promise
    return request.get(url)
      .then((res) => {
        // SUCCESS

        // let skills = res.body;

        let skills = [
          { name: 'C++', level: 'expert' },
          { name: 'Java', level: 'amature' },
          { name: 'Node.js', level: 'expert' },
          { name: '.Net', level: 'dumb' },
        ];
        dispatch(onGotSkills(skills));
      })
      .catch((err) => {
        // ERROR
        dispatch(onErrorInRequest(`Request failed ${err}`));
      })
  }
}

function onGotSkills(skills) {
  const action = {
    type: GOT_SKILLS,
    payload: { skills },
    error: false
  };
  return action;
}

function onErrorInRequest(err) {
  const action = {
    type: ERROR_IN_REQUEST,
    payload: { error: err },
    error: true
  };
  return action;
}

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
  onFetchSkills,
  onErrorInRequest,
  onAddNewSkill,
  onRemoveSkill,
  // dispatchAddSkill,
  // dispatchRemoveSkill
}