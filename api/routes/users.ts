import express from "express";
import { getAll, findById } from "../controller/user";

const usersRoute = express.Router();

usersRoute.get('', getAll);
usersRoute.get('/:id', findById);

export default usersRoute;
