import {getConnection} from "./../database/database.js";

const getNoticias = async(req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, titulo, ruta, fecha FROM lista_noticias");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};

const addNoticia = async(req, res) => {
    try{
        const { titulo, ruta, fecha} = req.body;
        if(titulo == undefined || ruta == undefined){
            res.status(400).json({message: "Solicitud incorrecta, Porfavor llene los campos"});
        }

        const noticia = { titulo, ruta, fecha };
        const connection = await getConnection();
        await connection.query("INSERT INTO lista_noticias SET ?", noticia);
        res.json({ message: "Registro exitoso" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};

const getNoticia = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, titulo, ruta, fecha FROM lista_noticias WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};

const updateNoticia = async(req, res) => {
    try{
        const { id } = req.params;
        const { titulo, ruta, fecha} = req.body;
        if(id == undefined ||titulo == undefined || ruta == undefined){
            res.status(400).json({message: "Solicitud incorrecta, Porfavor llene los campos"});
        }

        const noticia = { id, titulo, ruta, fecha };
        const connection = await getConnection();
        const result = await connection.query("UPDATE lista_noticias SET ? WHERE id = ?", [noticia, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};

const deleteNoticia = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM lista_noticias WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
};



export const methods = {
    getNoticias,
    addNoticia,
    getNoticia,
    updateNoticia,
    deleteNoticia
};
