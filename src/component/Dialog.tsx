import styled from "styled-components"
import { StyledComponent } from "../type"


type CornerPlacement = "top-left" | "top-right" | "bottom-left" | "bottom-right"

interface DialogProps extends StyledComponent {

	chain?: boolean
	corner?: false | CornerPlacement
}


const RawDialog = (props: DialogProps) => {
	return (
		<>
		<div className={props.className}>
			<p>[text here]</p>
			<Corner />
		</div>
		</>
	)
}


const Dialog = styled(RawDialog)`
	position: relative;
	width: 90%;
	min-height: 100px;
	padding: 10px;
	background-color: white;
	border-radius: 20px;
	box-shadow: 0px 6px 2px 0px rgba(0,0,0,0.25);
`


interface CornerProps extends StyledComponent {

}


const RawCorner = (props: CornerProps) => {
	return (
		<div className={props.className}>
			this is corner
		</div>
	)
}


const Corner = styled(RawCorner)`
	position: absolute;
	left: calc(10%);
	bottom: -100px;
	width: 90px;
	height: 100px;
	background-color: red;
`


export default Dialog
