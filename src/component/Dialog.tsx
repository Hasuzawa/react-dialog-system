import styled, { css } from "styled-components"
import { StyledComponent } from "../type"
import whiteTriangle from "../image/white_triangle.svg"


type CornerPlacement = false | "top-left" | "top-right" | "bottom-left" | "bottom-right"


interface DialogProps extends StyledComponent {
	cornerPlacement ?: CornerPlacement
	minHeight?: number
	cornerWidth?: number
	cornerHeight?: number
	chain?: boolean
	corner?: false | CornerPlacement
}


const RawDialog = (props: DialogProps) => {
	// const cornerWidth = props.cornerWidth ?? 50
	// const cornerHeight = props.cornerHeight ?? 50


	return (
		<>
		<div className={props.className}>
			<p>[text here]</p>
			{/* <Corner /> */}
		</div>
		</>
	)
}


const Dialog = styled(RawDialog)`
	position: relative;
	width: 90%;
	min-height: 50px;
	padding: 10px;
	background-color: white;
	border-radius: 20px;
	box-shadow: 0px 6px 2px 0px rgba(0,0,0,0.25);

	::after {
		/* content: url(${whiteTriangle});
		position: absolute;
		width: ${props => props.cornerWidth ? props.cornerWidth : 50}px;
		height: ${props => props.cornerHeight ? props.cornerHeight : 50}px; */
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		/* left: 10%;
		bottom: -50px; */
		border-width: ${props => props.cornerPlacement ? 25 : 0}px;
		border-style: solid;
		
		transform-origin: 0 0;
		transform: rotate(-45deg);
		box-shadow: -4px 4px 2px 0 rgba(0, 0, 0, 0.25);

		${props => {
			if (props.cornerPlacement === false) {	// undefined default to bottom-left
				return css``
			}
			switch(props.cornerPlacement) {
				case "bottom-right":
					return css`
						right: 10%;
						bottom: -50px;
						border-color: transparent transparent white white;
					`
				case "top-left":
					return css`
						left: 10%;
						top: 0px;
						border-color: white white transparent transparent;
						box-shadow: none;
					`
				case "top-right":
					return css`
						right: 10%;
						top: 0px;
						border-color: white white transparent transparent;
						box-shadow: none;
					`
				case "bottom-left":
				default:
					return css`
						left: 10%;
						bottom: -50px;
						border-color: transparent transparent white white;
					`
			}
		}}
	}
`


interface CornerProps extends StyledComponent {

}


const RawCorner = (props: CornerProps) => {
	return (
		<div className={props.className}>
		</div>
	)
}


const Corner = styled(RawCorner)`
	position: absolute;
	left: calc(10%);
	bottom: -50px;
	width: 0px;
	height: 0px;
	/* height: 50%; */
	border-top: 50px solid white;
	border-right: 50px solid transparent;
	background: linear-gradient(to bottom right, #007bff 50%, rgba(0,0,0,.5) 50%, transparent 52%);
	/* filter: drop-shadow(0px 6px 2px 0px rgba(-100,-100,100,0.25));
	-webkit-filter: drop-shadow(0px 6px 2px 0px rgba(0,0,0,0.25)); */
`


export default Dialog
