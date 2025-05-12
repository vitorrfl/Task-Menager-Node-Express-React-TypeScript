import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API do Task Manager funcionando!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});