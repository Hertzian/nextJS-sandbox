import {server} from '../config/config'
import ArticleList from '../components/ArticleList'
// import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  // console.log(articles)
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: { articles },
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}`)
  const articles = await res.json()

  return {
    props: { articles },
  }
}
