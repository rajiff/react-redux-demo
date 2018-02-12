import React from 'react'

export default class SkillForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			skill: '',
			level: '',
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
    if (!this.state.skill.trim() || !this.state.level.trim()) {
      return;
    }

    let newSkill = {
    	name: this.state.skill,
    	level: this.state.level
    };

		this.props.onSkillAdd(newSkill);

	  this.setState({skill: '', level: ''});
	}

	render () {
		return (
			<div style={{background: "#c7eeff", border: "1px solid #43d0c4", margin: "10px", padding: "20px"}}>
	      <form onSubmit={this.handleSubmit}>

	        <div style={{margin: "10px"}}>
	        	Skill <input value={this.state.skill} onChange={(e) => this.setState({skill: e.target.value})}/>
	        </div>
	        <div style={{margin: "10px"}}>
	        Expertise <input value={this.state.level} onChange={(e) => this.setState({level: e.target.value})}/>
	        </div>

	        <button type="submit" style={{margin: "10px", padding: "15px", background: 'teal', color: 'white'}}>
	          Add
	        </button>
	      </form>
    	</div>
		)
	}
}