import { server } from '../../../config/config'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import { useRouter } from 'next/router'

const article = ({ article }) => {
  // const router = useRouter()
  // const { articleId } = router.query

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>
        #{article.id} {article.title}
      </h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go back</Link>
    </>
  )
}

// // export const getServerSideProps = async (context) => {
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.articleId}`
//   )
//   const article = await res.json()

//   return { props: { article } }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)

//   const paths = ids.map((id) => ({ params: { articleId: id.toString() } }))

//   return {
//     // paths: { params: { id: '1', id: '2' } },
//     paths,
//     fallback: false
//   }
// }

// export const getServerSideProps = async (context) => {
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/${context.params.articleId}`)
  const article = await res.json()

  return { props: { article } }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}`)
  const articles = await res.json()

  const ids = articles.map((article) => article.id)

  const paths = ids.map((id) => ({ params: { articleId: id.toString() } }))

  return {
    // paths: { params: { id: '1', id: '2' } },
    paths,
    fallback: false,
  }
}

export default article
