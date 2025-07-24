const { livros } = require('../database/db')

exports.getAllLivros = (req, res) => {
  res.json(livros)
}

exports.getLivroById = (req, res) => {
  const livro = livros.find(l => l.id === parseInt(req.params.id))
  if (!livro) return res.status(404).json({ msg: 'Livro não encontrado' })
  res.json(livro)
}

exports.createLivro = (req, res) => {
  const novoLivro = {
    id: livros.length + 1,
    titulo: req.body.titulo,
    paginas: req.body.paginas,
    isbn: req.body.isbn,
    editora: req.body.editora,
  }
  livros.push(novoLivro)
  res.status(201).json(novoLivro)
}

exports.updateLivro = (req, res) => {
  const id = parseInt(req.params.id)
  const livro = livros.find(l => l.id === id)
  if (!livro) return res.status(404).json({ msg: 'Livro não encontrado' })

  livro.titulo = req.body.titulo
  livro.paginas = req.body.paginas
  livro.isbn = req.body.isbn
  livro.editora = req.body.editora

  res.json(livro)
}

exports.deleteLivro = (req, res) => {
  const id = parseInt(req.params.id)
  const index = livros.findIndex(l => l.id === id)
  if (index === -1) return res.status(404).json({ msg: 'Livro não encontrado' })

  livros.splice(index, 1)
  res.status(204).end()
}
