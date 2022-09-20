import { Router } from "express";
import { methods as usuarioController } from "../controller/usuario.controller.js";

const router = Router();

router.get("/", usuarioController.getUsuarios);
router.get("/:ci", usuarioController.getUsuario);
router.post("/", usuarioController.addUsuario);
router.put("/:ci", usuarioController.updateUsuario);
router.delete("/:ci", usuarioController.deleteUsuario);

export default router;