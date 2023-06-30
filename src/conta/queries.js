const getContas = "SELECT * FROM contas";
const getContaById = "SELECT * FROM contas WHERE id = $1";
const checkEmailExists = "SELECT s FROM contas s WHERE s.email = $1";
const addConta = "INSERT INTO contas (nome, email, senha) VALUES ($1, $2, $3)";
const removeConta = "DELETE FROM contas WHERE id = $1";
const updateConta = "UPDATE contas SET nome = $1 WHERE id = $2";

module.exports = {
    getContas,
    getContaById,
    checkEmailExists,
    addConta,
    removeConta,
    updateConta,
};