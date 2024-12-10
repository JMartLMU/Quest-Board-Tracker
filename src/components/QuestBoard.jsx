import Article from "./Article";

export default function QuestBoard({ board }) {
    return (
        <div>
            {board.length > 0 ? (
                board.map((quest, index) => (
                    <Article key={index} article={quest}/>
                ))
            ) : (
                "Nothing to display"
            )}
        </div>
    )
}