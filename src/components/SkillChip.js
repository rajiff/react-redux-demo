import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/fontawesome-free-solid'

export default class SkillChip extends React.Component {
	constructor(props) {
		super(props);

		this.styles = {
      chip: {
      	display: "inline-flex",
      	margin: "5px",
      	padding: "15px",
      	background: "#f8fcfd",
				borderRadius: "8px",
				alignItems: "center"
      }
    }
	}

	shouldComponentUpdate(nextProps, nextState) {
    return (this.props.skill.name !== nextProps.skill.name)
  }

  handleRemove = () => {
  	this.props.onSkillRemove(this.props.skill.name);
  }

	render() {
		return (
			<div style={this.styles.chip}>
				{`${this.props.skill.name} (${this.props.skill.level})`}
				<FontAwesomeIcon icon="times-circle" style={{cursor: 'pointer', margin: "2px", padding: "2px"}} onClick={this.handleRemove}/>
			</div>
		)
	}
}