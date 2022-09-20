import express from "express";
import morgan from "morgan";
//Routes
import noticiaRoutes from "./routes/noticia.routes";
import usuarioRoutes from "./routes/usuario.routes";

const app = express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/noticias", noticiaRoutes);
app.use("/api/usuario", usuarioRoutes);

export default app;