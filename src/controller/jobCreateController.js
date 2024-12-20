const JobModel = require('../models/jobModel');

exports.addJob = async (req, res) => {
  try {
    const { title, salary, company, description, email, new_job } = req.body;
 
    if (!title || !company || !email) {
      return res.status(400).json({ error: 'Os campos title, company e email são obrigatórios.' });
    }
    const job = await JobModel.create({
      title,
      salary,
      company,
      description,
      email,
      new_job,
    });
    return res.status(201).json({
      message: 'Job adicionado com sucesso!',
      job,
    });
  } catch (err) {
    console.error('Erro ao adicionar o job:', err.original);
    console.error('Erro ao adicionar o job:', err);
    return res.status(500).json({ error: 'Erro ao adicionar o job.' });
  }
};



