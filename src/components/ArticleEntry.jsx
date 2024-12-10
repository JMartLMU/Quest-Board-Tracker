import { useState } from "react"
import Slider from "./Slider"

export default function ArticleEntry({ addArticle }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [error, setError] = useState(null)
  const [danger, setDanger] = useState(0)
  const [reward, setReward] = useState(0)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied")
    } else {
      addArticle({ title, body, danger, reward })
    }
  }
  
  async function updateDang(val){
      await setDanger(val)
  }

  async function updateReward(val){
    await setReward(val)
}

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Name
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Details
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <Slider name={"Danger"} max={"5"} func={updateDang}/>
        <Slider name={"Reward"} max={"10"} func={updateReward}/>
        <button type="submit">Post</button>
      </form>
    </div>
  )
}
