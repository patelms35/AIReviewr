import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

// Add Font Awesome CSS
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

function App() {
   const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
    } catch (error) {
      console.error('Error getting review:', error)
      setReview('Error getting code review. Please try again.')
    }
    setIsLoading(false)
  }

  return (
    <>
     {/* Header */}
     <nav>
        <div className="navbar">
          <div className="left-side">
            <img src="./logo.png" alt="" />
            <h2>AI Code Reviewr</h2>
          </div>

          <div className="right-side">
            <div className="media-icon">
              <a href="https://instagram.com/patel_mark_7262?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/patelms35" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/patelmark6172" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}


      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Code Review</div>
        </div>
        <div className="right">
          {isLoading ? (
            <div className="loading-container">
              <div className="progress-bar"></div>
              <p>Analyzing your code...</p>
            </div>
          ) : (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          )}
        </div>
      </main>
      <footer>
        <div className="foot">
          <p>Made With ❤️ By Mark Patel Copyright © 2025 .</p>
        </div>
      </footer>
    </>
  )
}



export default App
