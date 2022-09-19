import React from "react";

const NotesTitles = () => {
    return  <div className="notes-titles">
                <p>Name</p>
                <p>Created</p>
                <p>Category</p>
                <p>Content</p>
                <p>Dates</p>
                <p>
                    <span className="options">
                        <i className="fa-solid fa-box-archive"></i>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </p>
            </div>;
}

export default NotesTitles;