import React from "react";

const SummaryList = () => {
    return  <ul className="summary-list">
                <li className="summary-item">
                    <p>Task</p>
                    <p id="task-active"></p>
                    <p id="task-archive"></p>
                </li>
                <li className="summary-item">
                    <p>Random Thought</p>
                    <p id="random-thought-active"></p>
                    <p id="random-thought-archive"></p>
                </li>
                <li className="summary-item">
                    <p>Idea</p>
                    <p id="idea-active"></p>
                    <p id="idea-archive"></p>
                </li>
            </ul>;
}

export default SummaryList;