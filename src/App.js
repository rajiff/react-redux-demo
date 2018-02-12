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

  componentDidMount () {
    this.props.onMount()
  }

  render() {
    return (
      <div style={this.styles.centerColumn}>

        <div>
        {
          (this.props.error)?<div style={{border: "1px solid red", background: "#dcdcdc", width: '600px'}}><h3 style={{color:'red', margin: "20px"}}>{this.props.error}</h3></div>:''
        }
        </div>

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
    skillColln: state.skillColln,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: () => {
      dispatch(Actions.onFetchSkills());
    },
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
