import styled from "styled-components"
import { StyledComponent } from "../type"
import Dialog from "./Dialog"

interface DialogRegionProps extends StyledComponent {}

const RawDialogRegion = (props: DialogRegionProps) => {
	return (
		<div className={props.className}>
			<Dialog />
			<Dialog cornerPlacement="bottom-left" />
			<Dialog cornerPlacement="bottom-right" />
			<Dialog cornerPlacement="top-left" />
			<Dialog cornerPlacement="top-right" />
			<Dialog cornerPlacement={false} />
		</div>
	)
}

const DialogRegion = styled(RawDialogRegion)`
	padding: 10px 0px;
	flex: 2 1 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	/* gap: 20px; */
	gap: 20px;
`

export default DialogRegion
