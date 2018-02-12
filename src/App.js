import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import SkillForm from './components/SkillForm';
import SkillProfile from './components/SkillProfile';
import SkillSummary from './components/SkillSummary';

import * as Actions from './ActionCreators';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    /*this.state = {
      skillColln: [
        {name: 'C++', level: 'expert'},
        {name: 'Java', level: 'amature'},
        {name: 'Node.js', level: 'expert'},
        {name: '.Net', level: 'dumb'},
      ]
    }*/

    this.styles = {
      wrapperSkillProfile: {
        border: "1px solid teal",
        margin: "15px",
        padding: "15px",
        background: "#cfe8e8"
      },
      centerColumn: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "wrap"
      }
    }
  }

  /*onSkillRemove = (skillName) => {
    console.log("Removing skill at APP ", skillName);
    this.setState(prevState => {
      let itemToRemove = prevState.skillColln.findIndex(s => s.name === skillName);

      return {
        skillColln: prevState.skillColln.filter((s, i) => i !== itemToRemove)
      }
    });
  }*/

  render() {
    return (
      <div style={this.styles.centerColumn}>

        <div style={{display: "flex"}}>
          <div style={this.styles.wrapperSkillProfile}>
            <SkillSummary skills={this.props.skillColln}/>
          </div>
          <div>
            <SkillForm onSkillAdd={this.props.onAddSkill}/>
          </div>
        </div>

        <div  style={this.styles.wrapperSkillProfile}>
          <SkillProfile skills={this.props.skillColln} onSkillRemove={this.props.onSkillRemove}/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    skillColln: state.skillColln
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSkillRemove: (skillName) => {
      dispatch(Actions.onRemoveSkill(skillName));
    },
    onAddSkill: (newSkill) => {
      dispatch(Actions.onAddNewSkill(newSkill));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
