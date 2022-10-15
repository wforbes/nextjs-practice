import Nav from './Nav'
import Header from './Header'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta name="keywords" content='web development, react, next.js, learning, education, practice' />
			</Head>
			<Nav />
			<div className={styles.container}>
				<main className={styles.main}>
					<Header />
					{ children }
				</main>
			</div>
		</>
	)
}

export default Layout