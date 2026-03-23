import React, { createContext, useContext, useMemo, useState } from "react";

// Context
const EmojiContext = createContext(null);

// Optional custom hook
function useEmoji() {
    const context = useContext(EmojiContext);
    if (!context) {
        throw new Error("useEmoji must be used within EmojiProvider");
    }
    return context;
}

// Provider (inside same file)
export function EmojiProvider({ children }) {
    const moodByEmoji = {
        "😊": "Feeling happy today!",
        "😢": "Feeling a bit sad right now.",
    };

    const [emoji, setEmoji] = useState("😊");
    const [moodComment, setMoodComment] = useState(moodByEmoji["😊"]);

    const toggleEmoji = () => {
        setEmoji((prev) => {
            const next = prev === "😊" ? "😢" : "😊";
            setMoodComment(moodByEmoji[next]);
            return next;
        });
    };

    const value = useMemo(
        () => ({ emoji, moodComment, toggleEmoji, setMoodComment }),
        [emoji, moodComment]
    );

    return <EmojiContext.Provider value={value}>{children}</EmojiContext.Provider>;
}

// UI that consumes context
export function EmojiContent() {
    const { emoji, moodComment, toggleEmoji } = useEmoji();

    return (
        <div>
            <span style={{ fontSize: "2rem" }}>{emoji}</span>
            <button onClick={toggleEmoji} style={{ marginLeft: "1rem" }}>
                Change Mood
            </button>
            <p style={{ marginTop: "0.75rem" }}>{moodComment}</p>
        </div>
    );
}

// Default export stays <Emoji />
export default function Emoji() {
    return (
        <EmojiProvider>
            <EmojiContent />
        </EmojiProvider>
    );
}