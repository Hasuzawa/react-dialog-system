
import styled from "styled-components"
import { StyledComponent } from "../type"

interface DialogRegionProps extends StyledComponent {}


const RawDialogRegion = (props: DialogRegionProps) => {
	return (
		<div className={props.className}>
			<span>dialog region</span>
		</div>
	)
}


const DialogRegion = styled(RawDialogRegion)`
	flex: 2 1 0;
`


export default DialogRegion
