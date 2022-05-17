import styled from "styled-components"
import { StyledComponent } from "../type"
import DialogRegion from "./DialogRegion"
import Person from "./Person"

interface DialogSystemProps extends StyledComponent {}

const RawDialogSystem = (props: DialogSystemProps) => {
	return (
		<div className={props.className} id="dialog-system">
			<Person />
			<DialogRegion />
			<Person />
		</div>
	)
}

const DialogSystem = styled(RawDialogSystem)`
	display: flex;
	flex-flow: row nowrap;
	background-color: lightgreen;
	height: 100%;
`

export default DialogSystem
