//import { getUsersModel } from "../model/user";
import { Request, Response, NextFunction } from "express";
import { fetchBuilder } from "../service/builder.service";
import 'dotenv/config'
import { buildTemplate } from "../builder";
import { userData } from "../builder/types";

const BASE_URL = process.env.USERS_PLACEHOLDER_URL || 'NULL';

const userData2:userData[] = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Sr. Front Developer'
    },
    {
        id: 2,
        name: 'John Doe II',
        title: 'Sr. Backend Developer'
    }
] 

export const initBuilder = async(req:Request, res:Response, next:NextFunction) => {
    const URL = `${BASE_URL}/comments/`;
    const users = await fetchBuilder(URL, 'GET', undefined);
    const builderCards = buildTemplate('Bold', userData2);

    return res.json(builderCards);
    //return res.json(users?.data);
}


