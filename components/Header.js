import headerStyles from '../styles/Header.module.css'

const Header = () => {
	
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>Next.js</span> Practice
			</h1>
			<p className={headerStyles.description}>Learning the basics of Next.js</p>
		</div>
	)
}

export default Header