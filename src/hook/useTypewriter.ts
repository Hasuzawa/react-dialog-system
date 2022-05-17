import { useState, useEffect } from "react"


export const useTypewriter = (line: string, interval: number) => {
	const [text] = useState<string>(line)
	const [displayedChar, setDisplayedChar] = useState<number>(0)

	useEffect(() => {
		const timer = setTimeout(() => {
			if (displayedChar < text.length) {
				setDisplayedChar(displayedChar + 1)
			}
		}, interval)
		return () => clearTimeout(timer)
	}, [displayedChar])

	return text.substring(0, displayedChar)
}
