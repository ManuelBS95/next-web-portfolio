import { useState } from 'react'

export default () => {
	const [scale, setScale] = useState('scaleY(0)')

	const toggleScale = () => {
		if (scale === 'scaleY(1)') {
			setScale('scaleY(0)')
		} else {
			setScale('scaleY(1)')
		}
	}

	return {
		scale,
		toggleScale,
	}
}
