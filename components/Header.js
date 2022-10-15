import headerStyles from '../styles/Header.module.css'

const Header = () => {
	const someCondition = 42
	return (
		<div>
			<h1>
				<span className='title'>Next.js</span> Practice
			</h1>
			<style jsx>
				{`
					.title {
						color: ${someCondition == 42 ? 'blue': 'slategrey'};
					}
				`}
			</style>
		</div>
	)
}

export default Header