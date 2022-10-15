import Head from 'next/head'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Next.js Practice</title>
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
}

// 3 different methods can be used to fetch data
//  1. getStaticProps will fetch at build time
//  2. getServerSideProps will fetch on every request
//  3. getStaticPaths will dynamically generate paths based on the data being fetched
export const getStaticProps = async () => {
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}