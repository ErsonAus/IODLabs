import React, { useState } from "react";

// Emoji component renders a mood emoji and a button to toggle it
export default function Emoji() {
    // State holds current emoji character (happy by default)
    const [emoji, setEmoji] = useState("😊");

    // ToggleEmoji flips between two emoji values when called
    const toggleEmoji = () => {
        setEmoji(prev => (prev === "😊" ? "😢" : "😊"));
    };

    return (
        <div>
            {/* Display current emoji */}
            <span style={{ fontSize: "2rem" }}>{emoji}</span>

            {/* Button to change mood */}
            <button onClick={toggleEmoji} style={{ marginLeft: "1rem" }}>
                Change Mood
            </button>
        </div>
    );
}