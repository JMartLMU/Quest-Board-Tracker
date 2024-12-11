import { useEffect, useState } from "react"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import { fetchArticles, createArticle } from "../services/articleService"
import WritingOverlay from "./WritingOverlay"
import ArticleOverlay from "./ArticleList"
import "./css/App.css"
import QuestBoard from "./QuestBoard"


export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const user = useAuthentication()

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
      console.log(articles)
    }
  }, [user])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body, danger, reward }) {
    createArticle({ title, body, danger, reward }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      console.log(articles)
    })
  }

  return (
    <div className="App">
      <header>
      <ArticleOverlay user={user} list={articles} quest={article} setArticle={setArticle}/>
      <WritingOverlay addArticle={addArticle}/>
      {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? 
        <p id="error">Please Sign-In to View Quests</p> : <QuestBoard board={articles}/>}
    </div>
  )
}