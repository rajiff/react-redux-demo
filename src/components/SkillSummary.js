import React from 'react'

export default class SkillSummary extends React.Component {
	constructor(props) {
		super(props);

		this.styles = {
    }
	}

	render() {
		return (
			<div style={{border: "1px gray", margin: "5px", padding: "10px"}}>
				<section>
					<h3>Core Skills</h3>
					{ (this.props.skills.some((s) => s.level === 'expert') <= 0) ? <p>{"No expert skills..!"}</p>: ''}
					<ul>
					{
						this.props.skills.map((skill) => {
							return (skill.level === 'expert') ? <li key={skill.name}>{skill.name}</li>:'';
						})
					}
					</ul>
				</section>
			</div>
		)
	}
}