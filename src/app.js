import express from "express";
import morgan from "morgan";
//Routes
import noticiaRoutes from "./routes/noticia.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/noticias", noticiaRoutes);
app.use("/api/usuario", usuarioRoutes);

export default app;