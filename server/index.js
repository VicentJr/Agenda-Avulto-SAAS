    // Importa as dependências
    require('dotenv').config();
    const express = require('express');
    const cors = require('cors');
    
    // Cria a aplicação Express
    const app = express();
    
    // Configura os middlewares
    app.use(cors()); // Permite que o frontend acesse a API
    app.use(express.json()); // Permite que o servidor entenda JSON
    
    // Rota de teste
    app.get('/', (req, res) => {
      res.send('API da Agenda Avulto funcionando!');
    });
    
    // Define a porta a partir do .env ou usa 3001 como padrão
    const PORT = process.env.PORT || 3001;
    
    // Inicia o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });