import PopUpOverlay from "./QuestPopUp"

export default function Nav({ articles }) {
  return (
    <div>
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <div>
              <p>{a.title}</p>
              <PopUpOverlay quest={a}/>
            </div>
          ))}
    </div>
  )
}
