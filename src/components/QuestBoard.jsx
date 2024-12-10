import Article from "./Article";
import {DraggableCore} from "react-draggable"

export default function QuestBoard({ board }) {
    return (
        <div>
            {board.length > 0 ? (
                board.map((quest, index) => (
                    <DraggableCore key={index}>
                        <Article article={quest}/>
                    </DraggableCore>
                ))
            ) : (
                "Nothing to display"
            )}
        </div>
    )
}