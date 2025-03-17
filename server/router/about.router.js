import {Router} from "express";
const aboutRouter = Router();
import {createContent, getAllContent, updateContent, deleteContent} from "../controllers/about.controller.js"

aboutRouter.post('/', createContent);
aboutRouter.get('/', getAllContent);
aboutRouter.put('/:id', updateContent);
aboutRouter.delete('/:id', deleteContent);

export default aboutRouter;
