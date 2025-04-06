import React, { useEffect, useRef, useState } from "react";

const MarkdownEditor = () => {
    const [input, setInput] = useState("")
    //const [loading, setLoading] = useState(true)
    
    let preview = useRef(null)

    useEffect(() => {
        preview.current.value = input
    })

    function handleChange(e){
        setInput(e.target.value)
    }

    return (
        <div className="markdown">
            <div className="textarea">
                <textarea
                    style={{ width: "100%", height: "100%", backgroundColor: "#EFF1F5", border: "none" }}
                    value={input}
                    onChange={handleChange}
                />
            </div>
            <div className="preview">
                <textarea
                    ref={preview}
                    style={{ width: "100%", height: "100%", backgroundColor: "#E8EAF1", border: "none", fontWeight: "bolder", fontSize: "20px" }}
                />
            </div>
        </div>
    )
}

export default MarkdownEditor