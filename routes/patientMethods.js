const { mysql, config } = require('../conection');

// Função para conectar ao banco de dados
async function connect() {
    const connection = await mysql.createConnection(config);
    return connection;
}

//listar pacientes
async function getAllPatients(req, res) {
    const connection = await connect();
    const rows = await connection.execute('SELECT * FROM pacientes');
    connection.end();
    res.json(rows);
}

patientMethods = {
    getAllPatients
}

module.exports = patientMethods
