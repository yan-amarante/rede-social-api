const pool = require('../db');
const queries = require('./queries');

const getContas = (req, res) => {
    pool.query(queries.getContas, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getContaById = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getContaById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addConta = (req, res) => {
    const { nome, email, senha } = req.body;
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if(results.rows.length){
            res.send("email already exists.");
        }

        pool.query(queries.addConta, [nome, email, senha], (error,results) => {
            if(error) throw error;
            res.status(201).send("Conta Created Successfully");
        })
    })
}

const removeConta = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getContaById, [id], (error, results) => {
        const noContaFound = !results.rows.length;
        if(noContaFound){
        res.send("conta does not exist in the database");
        }

        pool.query(queries.removeConta, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("conta remove sucessfully");
        })
    })
}

const updateConta = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    pool.query(queries.getContaById,[id], (error, results) => {
        const noContaFound = !results.rows.length;
        if(noContaFound){
        res.send("conta does not exist in the database");
        }

        pool.query(queries.updateConta, [nome, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("conta updated sucessfully");
        })
    })
}

module.exports = {
    getContas,
    getContaById,
    addConta,
    removeConta,
    updateConta
};
