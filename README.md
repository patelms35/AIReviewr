# AI Code Reviewer

An AI-powered code reviewer built using the MEAR stack (MongoDB, Express.js, Angular, and React). This project helps developers analyze, review, and improve their code efficiently using AI-driven insights.

## 🚀 Features
- AI-powered code analysis and suggestions
- Syntax and logical error detection
- Code quality improvement recommendations
- Integration with GitHub and local repositories
- User-friendly dashboard for managing code reviews

## 🛠️ Tech Stack
- **Express.js** - Backend framework for handling API requests
- **React.js** - Frontend for user interface and code submission
- **Node.js** - Server-side runtime
- **Google Gemini Developer API** - AI-powered code analysis

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/ai-code-reviewer.git
   cd ai-code-reviewer
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and configure:
   ```env
   GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
   PORT=3000
   ```

4. **Start the backend:**
   ```sh
   cd Backend
   npx nodemon
   ```

5. **Start the frontend (React):**
   ```sh
   cd Frontend
   npm run dev
   ```

## 🧩 Usage
1. Submit code for review via the frontend.
2. AI analyzes the code and provides feedback.
3. View results in the dashboard.
4. Improve your code based on AI suggestions.

## 📌 Roadmap
- [ ] Improve AI accuracy with fine-tuned models
- [ ] Add support for more programming languages
- [ ] Implement real-time collaboration features

## 🤝 Contributing
Pull requests are welcome! Please open an issue first to discuss changes.

## 📜 License
This project is licensed under the MIT License.

## 🔒 Privacy Policy
We value your privacy. The AI Code Reviewer processes code locally and does not store or share your data with third parties. The Google Gemini Developer API is used strictly for code analysis, and no user data is retained beyond the immediate session. For any concerns regarding data privacy, please contact us.

---
Made with ❤️ by Patel Mark
