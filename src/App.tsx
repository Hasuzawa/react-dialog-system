import React from "react"
import DialogSystem from "./component/DialogSystem"
import styled from "styled-components"
import { StyledComponent } from "./type"

interface AppProps extends StyledComponent {}

const RawApp = (props: AppProps) => {
	return (
		<div className={props.className} id="app">
			<DialogSystem />
		</div>
	)
}

const App = styled(RawApp)`
	height: 100%;
`

export default App
