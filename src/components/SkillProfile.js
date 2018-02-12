import React from 'react'
import SkillChip from "./SkillChip";

export default class SkillProfile extends React.Component {
	render() {
		return (
			<section>
				<h3>Skill Profile</h3>
				{
					this.props.skills.map((skill) => {
						return (
							<SkillChip key={skill.name} skill={skill} onSkillRemove={this.props.onSkillRemove}/>
						)
					})
				}
			</section>
		)
	}
}