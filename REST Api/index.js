const app = require('./app')
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is lisening at http://localhost:${PORT}`);
});