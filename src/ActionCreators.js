import { GOT_SKILLS, ERROR_IN_REQUEST, ADD_SKILL, REMOVE_SKILL, GOT_GIT_USER } from './ActionTypes';
import request from 'superagent';
import { GraphQLClient } from 'graphql-request';

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
        dispatch(onErrorInRequest(`REST Request failed ${err}`));
      })
  }
}

function onFetchGitUser() {
  return function(dispatch) {
    const client = new GraphQLClient('https://api.github.com/graphql', {
      headers: {
        Authorization: 'Bearer a0fcdbb6475f60198ee789c6e27db98c719922f0',
      },
    });

    let query = `{
      user (login: "rajiff") {
       name
       repositories {
         totalCount
       }
      }
    }`;

    client.request(query)
      .then(data => {
        // SUCCESS
        dispatch(onGotGitUser(data.user));
      })
      .catch((err) => {
        // ERROR
        dispatch(onErrorInRequest(`GraphQL Request failed ${err}`));
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

function onGotGitUser(user) {
  const action = {
    type: GOT_GIT_USER,
    payload: { gitUser: user },
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
  onFetchGitUser,
  onGotGitUser
  // dispatchAddSkill,
  // dispatchRemoveSkill
}