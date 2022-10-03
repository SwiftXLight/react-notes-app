import React from "react";

interface ISummaryItemsProps {
    activeTask: number;
    archiveTask: number;
    activeRandomThought: number;
    archiveRandomThoughtArc: number;
    activeIdea: number;
    archiveIdea: number;
}

const SummaryItems: React.FC<ISummaryItemsProps> = (props: ISummaryItemsProps) => {
    return  <ul>
                <li className="radial-gradient grid grid-cols-3 justify-items-center items-center w-vw75 p-3 mb-3 rounded-lg bg-silver relativem">
                    <span>Task</span>
                    <span id="task-active">{props.activeTask}</span>
                    <span id="task-archive">{props.archiveTask}</span>
                </li>
                <li className="radial-gradient grid grid-cols-3 justify-items-center items-center w-vw75 p-3 mb-3 rounded-lg bg-silver relative">
                    <span>Random Thought</span>
                    <span id="random-thought-active">{props.activeRandomThought}</span>
                    <span id="random-thought-archive">{props.archiveRandomThoughtArc}</span>
                </li>
                <li className="radial-gradient grid grid-cols-3 justify-items-center items-center w-vw75 p-3 mb-3 rounded-lg bg-silver relative">
                    <span>Idea</span>
                    <span id="idea-active">{props.activeIdea}</span>
                    <span id="idea-archive">{props.archiveIdea}</span>
                </li>
            </ul>
}

export default SummaryItems;