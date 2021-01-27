import { articles } from '../../../data'

// export default function handler({query: articleId}, res) {
export default function handler(req, res) {
  console.log(req.query.articleId)

  const filtered = articles.filter(
    (article) => article.id === req.query.articleId
  )

  if (filtered.length > 0) {
    return res.status(200).json(filtered[0])
  }
  
  return res.status(404).json({
    message: `Article with id of ${req.query.articleId} is not found`,
  })
}
