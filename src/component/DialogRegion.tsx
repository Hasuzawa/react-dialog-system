
import styled from "styled-components"
import { StyledComponent } from "../type"
import Dialog from "./Dialog"

interface DialogRegionProps extends StyledComponent {}


const RawDialogRegion = (props: DialogRegionProps) => {
	return (
		<div className={props.className}>
			<Dialog />
		</div>
	)
}


const DialogRegion = styled(RawDialogRegion)`
	padding: 10px 0px;
	flex: 2 1 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`


export default DialogRegion
