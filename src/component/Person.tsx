import styled from "styled-components"
import { StyledComponent } from "../type"

interface PersonProps extends StyledComponent {}


const RawPerson = (props: PersonProps) => {
	return (
		<div className={props.className}>
			<span>person</span>
		</div>
	)
}


const Person = styled(RawPerson)`
	background-color: coral;
	flex: 1 1 0;
`


export default Person
