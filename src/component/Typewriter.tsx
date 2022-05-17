import styled from "styled-components"
import { StyledComponent } from "../type"
import { useTypewriter } from "../hook/useTypewriter"

interface TypewriterProps extends StyledComponent {
	text?: string
}

const RawTypewriter = (props: TypewriterProps) => {
	const text = useTypewriter(props.text ?? "", 50)

	return <p className={props.className}>{text}</p>
}

const Typewriter = styled(RawTypewriter)``

export default Typewriter
