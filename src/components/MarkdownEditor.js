import React, { useEffect, useRef, useState } from "react";

const MarkdownEditor = () => {
    const [input, setInput] = useState("")
    //const [loading, setLoading] = useState(true)

    let preview = useRef(null)

    useEffect(() => {
        preview.current.value = input
    })

    function handleChange(e) {
        setInput(e.target.value)
    }

    return (
        <div className="app">
            <textarea
                className="textarea"
                value={input}
                onChange={handleChange}
            />
            <textarea
                ref={preview}
                className="preview"
            />
        </div>
    )
}

export default MarkdownEditor