import React from "react";

function clickMe(){
    alert('You have now generated a meme!');
}



export default function app() {
    return (
        <div>
            <button onClick={clickMe}>
                Generate Meme
            </button>
        </div>
    );
}