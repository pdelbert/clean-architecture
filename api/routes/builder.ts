import express from 'express';
import { initBuilder } from "../controller/builder";

const builderRoute = express.Router();

builderRoute.get('/', initBuilder );

export default builderRoute;