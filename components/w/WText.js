import { useEffect, useState } from 'react'
import { has, isEmpty } from '../../lib/util.js'
import styles from '../../styles/WText.module.css'

const WText = (props) => {

	const [styleState, setStyleState] = useState({})

	//TODO: create a unique id / name if not supplied
	const id = isEmpty(props.id) ? 'txtInput' : props.id
	const name = isEmpty(props.name) ? 'txtInput' : props.name
	const className = isEmpty(props.className) ? '' : props.className
	const type = isEmpty(props.type) ? 'text' : props.type
	const placeholder = isEmpty(props.placeholder) ? '' : props.placeholder
	const value = isEmpty(props.value) ? '' : props.value

	const validMsg = isEmpty(props.validMsg) ? '' : props.validMsg
	const [_validMsg, setValidMsg] = useState('')

	const handleOnChange = (value) => {
		props.onChange(value)
	}

	const handleOnBlur = (value) => {
		if (!has(props, 'onBlur')) return;
		props.onBlur(value)
	}

	useEffect(() => {
		setValidMsg(props.validMsg)
	}, [props.validMsg])

	useEffect(() => {
		setErrorState(props.errorState)
	}, [props.errorState])

	const setErrorState = (inError) => {
		if (inError) setStyleState({ outlineColor: 'red', borderColor: 'red' })
		else setStyleState({})
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<input
				id={id}
				name={name}
				type={type}
				className={className}
				placeholder={placeholder}
				value={value}
				style={Object.assign({}, styleState)}
				onChange={e => handleOnChange(e.target.value)}
				onBlur={e => handleOnBlur(e.target.value)}
			/>
			<label htmlFor={name} className={styles.validLabel}>{ validMsg }</label>
		</div>
	)
}

export default WText