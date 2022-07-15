const app = require('./src/config/server')
const port = process.env.PORT;

app.listen(port, () => console.log(`API is working at http://localhost:${port}`))