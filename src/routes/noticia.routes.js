import { Router } from "express";
import { methods as noticiaController } from "../controller/noticia.controller";

const router = Router();

router.get("/", noticiaController.getNoticias);
router.get("/:id", noticiaController.getNoticia);
router.post("/", noticiaController.addNoticia);
router.put("/:id", noticiaController.updateNoticia);
router.delete("/:id", noticiaController.deleteNoticia);

export default router;