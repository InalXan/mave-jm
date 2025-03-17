import {Router} from "express";
const missionRouter = Router();
import {createMission, getAllMission, updateMission, deleteMission} from "../controllers/mission.controller.js"

missionRouter.post('/', createMission);
missionRouter.get('/', getAllMission);
missionRouter.put('/:id', updateMission);
missionRouter.delete('/:id', deleteMission);

export default missionRouter;
