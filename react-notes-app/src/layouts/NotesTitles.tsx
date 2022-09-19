import React from "react";

const NotesTitles: React.FC = () => {
    return  <div className="card">
                <span>Name</span>
                <span>Created</span>
                <span>Category</span>
                <span>Content</span>
                <span>Dates</span>
                <span>
                    <span className="options">
                        <i className="fa-solid fa-box-archive"></i>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </span>
            </div>;
}

export default NotesTitles;