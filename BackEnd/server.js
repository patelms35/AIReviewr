require('dotenv').config()
const app = require('./src/app')

// Use the PORT from the environment, or default to 3000 for local development
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
