import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import WText from '../components/w/WText'
import styles from '../styles/Signup.module.css'
import { isEmpty, emailRegex, o } from '../lib/util'


const Signup = () => {
	const [email, setEmail] = useState('')
	
	const [emailValidMsg, setEmailValidMsg] = useState('');
	const [emailErrorState, setEmailErrorState] = useState(false);
	const usernameValidationMsg = '';
	const passwordValidationMsg = '';

	//TODO: placeholder for backend response of emails
	const emails = [
		'test@test.com',
		'will@email.com',
		'nopeatnope.nope'
	];

	const handleEmailChange = (value) => {
		validateEmail(value)
		setEmail(value)
	}

	const handleEmailBlur = (value) => {
		o(['email field blurred', value])
	}

	const validateEmail = (value) => {
		if (isEmpty(value)) {
			clearEmailValidMsg()
			return true;
		}
		
		let valid = true

		for (let vSet of emailValidations) {
			let _valid = vSet[0](value) //run the check
			if (!_valid) appendEmailValidMsg(vSet[1]) //display the error message
			else removeEmailValidMsg(vSet[1]) //remove the error message if it's displayed
			//carry over validity value, continuing true if this loop is true
			valid = _valid && valid
		}

		setEmailErrorState(!valid)
		return valid
	}
	
	const emailValidations = [
		[
			(value) => emailRegex.test(value.toLowerCase()),
			'Must be a valid email'
		],
		[
			(value) => (emails.findIndex((e) => {
				return e.toLowerCase() === value.toLowerCase()
			}) === -1),
			'Email was already used'
		]
	]

	const appendEmailValidMsg = (str) => {
		if (emailValidMsg.includes(str)) return;

		if (emailValidMsg.length > 0)
			setEmailValidMsg(emailValidMsg + ", " + str)
		else
			setEmailValidMsg(str)
	}

	const removeEmailValidMsg = (str) => {
		if (emailValidMsg.includes(str)) {
			let newMsg = emailValidMsg.replace(str, '')
			newMsg = newMsg.replace(/,\s$/g, '')
			setEmailValidMsg(newMsg)
		}
	}

	const clearEmailValidMsg = () => {
		setEmailErrorState(false)
		setEmailValidMsg('')
	}

	return (
		<div>
			<Head>
				<title>Sign Up</title>
			</Head>
			<h1 style={{textAlign: 'center'}}>Sign Up</h1>
			<div className={styles.container}>
				<div>
					<WText
						id='emailTxt'
						name='emailTxt'
						type='email'
						placeholder='Email Address'
						value={email}
						validMsg={emailValidMsg}
						errorState={emailErrorState}
						onChange={v => handleEmailChange(v)}
						onBlur={v => handleEmailBlur(v)}
					/>
				</div>
				<div>
					<input id='usernameTxt' type="text" placeholder="username" />
					<label htmlFor='usernameTxt'>{ usernameValidationMsg }</label>
				</div>
				<div>
					<input id='passwordTxt' type="password" placeholder="password" />
					<label htmlFor="passwordTxt">{ passwordValidationMsg }</label>
				</div>
			</div>
		</div>
	)
}

export default Signup