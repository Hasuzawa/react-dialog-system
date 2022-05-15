import styled from "styled-components"
import { StyledComponent } from "../type"

interface DialogProps extends StyledComponent {}


const RawDialog = (props: DialogProps) => {
	return (
		<div>
			<text>[text here]</text>
		</div>
	)
}


const Dialog = styled(RawDialog)`
	/* width: 90%; */
	background-color: white;
	border-radius: 20px;
	box-shadow: 0px 8px 4px 0px rgba(0,0,0,0.25);
`


interface CornerProps extends StyledComponent {}


const RawCorner = (props: CornerProps) => {
	return (
		<div className={props.className}>

		</div>
	)
}


const Corner = styled(RawCorner)`
	
`


export default Dialog
