import Article from "./Article";
import "./css/QuestBoard.css"

export default function QuestBoard({ board }) {
    return (
        <div id="QuestBoard"> 
            {board.length > 0 ? (
                board.map((quest, index) => (
                    <Article key={index} number={board.length} article={quest}/>
                ))
            ) : (
                "Nothing to display"
            )}
        </div>
    )
}