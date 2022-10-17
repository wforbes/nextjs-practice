import { useEffect, useState } from 'react'
import { isEmpty } from '../../lib/util.js'

const WText = (props) => {

	const [styles, setStyles] = useState({})

	const id = isEmpty(props.id) ? 'txtInput' : props.id
	const name = isEmpty(props.name) ? 'txtInput' : props.name
	const type = isEmpty(props.type) ? 'text' : props.type
	const placeholder = isEmpty(props.placeholder) ? '' : props.placeholder
	const value = isEmpty(props.value) ? '' : props.value

	const validMsg = isEmpty(props.validMsg) ? '' : props.validMsg
	const [_validMsg, setValidMsg] = useState('')

	const labelStyles = {
		fontSize: '0.5em !important',
		color: 'red'
	}

	const handleOnChange = (value) => {
		props.onChange(value)
	}

	const handleOnBlur = (value) => {
		props.onBlur(value)
	}

	useEffect(() => {
		setValidMsg(props.validMsg)
	}, [props.validMsg])

	useEffect(() => {
		setErrorState(props.errorState)
	}, [props.errorState])

	const setErrorState = (inError) => {
		if (inError) setStyles({ outlineColor: 'red', borderColor: 'red' })
		else setStyles({})
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				style={Object.assign({}, styles)}
				onChange={e => handleOnChange(e.target.value)}
				onBlur={e => handleOnBlur(e.target.value)}
			/>
			<label htmlFor={name} style={labelStyles}>{ validMsg }</label>
		</div>
	)
}

export default WText