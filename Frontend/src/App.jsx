import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true); // Start loading
    try {
      const response = await axios.post("https://ai-reviewr.vercel.app", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setReview("Failed to fetch review.");
    }
    setLoading(false); // Stop loading
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
              <a href="https://instagram.com/patel_mark_7262?igshid=YmMyMTA2M2Y=">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://github.com/patelms35">
                <i className="fab fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/patelmark6172">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            {loading ? "Processing..." : "Review Code"}
          </div>
        </div>

        <div className="right">
          {loading && <div className="progress-bar"></div>}
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
      <footer>
        <div className="foot">
          <p>Made With ❤️ By Mark Patel Copyright © 2025 .</p>
        </div>
      </footer>
    </>
  );
}

export default App;
