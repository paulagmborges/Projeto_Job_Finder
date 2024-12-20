const express = require('express');
const jobRoutes = require('./routes/jobRoutes');

const app = express();

app.use(express.json());

app.use('/jobs', jobRoutes);


  const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

