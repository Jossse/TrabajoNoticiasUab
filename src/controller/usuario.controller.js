import {getConnection} from "./../database/database.js";

const getUsuarios = async(req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT ci, nombre, apellido, correo, tipo FROM usuarios");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};

const addUsuario= async(req, res) => {
    try{
        const { ci, nombre, apellido, correo, password, tipo} = req.body;
        if(ci ==undefined || nombre == undefined || apellido == undefined || correo == undefined || password == undefined || tipo == undefined){
            res.status(400).json({message: "Solicitud incorrecta, Porfavor llene los campos"});
        }

        const usuario = { ci, nombre, apellido, correo, password, tipo };
        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?", usuario);
        res.json({ message: "Registro exitoso" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};

const getUsuario = async(req, res) => {
    try{
        const { ci } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT ci, nombre, apellido, correo, tipo FROM usuarios WHERE ci = ?", ci);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};

const updateUsuario = async(req, res) => {
    try{
        const { ci } = req.params;
        const { nombre, apellido, correo, password, tipo} = req.body;
        if(ci == undefined ||nombre == undefined || apellido == undefined || correo == undefined || password == undefined || tipo == undefined){
            res.status(400).json({message: "Solicitud incorrecta, Porfavor llene los campos"});
        }

        const usuario = { ci, nombre, apellido, correo, password, tipo };
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE ci = ?", [usuario, ci]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};

const deleteUsuario = async(req, res) => {
    try{
        const { ci } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE ci = ?", ci);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};



export const methods = {
    getUsuarios,
    addUsuario,
    getUsuario,
    updateUsuario,
    deleteUsuario
};
