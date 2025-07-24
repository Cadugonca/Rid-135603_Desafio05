const express = require('express')
const cors = require('cors')
const app = express()
const livroRoutes = require('./src/routes/livroRoutes')

app.use(cors())
app.use(express.json())

// verificar se a API está no ar
app.get('/', (req, res) => {
  res.send('🚀 API Biblioteca Online - Desenvolvida por Cadugonca')
})

app.use('/livros', livroRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
