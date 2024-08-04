//import { getUsersModel } from "../model/user";
import { Request, Response, NextFunction } from "express";
import { fetchUser } from "../service/users.service";
import 'dotenv/config'

const BASE_URL = process.env.USERS_PLACEHOLDER_URL || 'NULL';

export const getAll = async(req:Request, res:Response, next:NextFunction) => {
    const URL = `${BASE_URL}/posts/`;
    const users = await fetchUser(URL, 'GET', undefined);
    return res.json(users?.data);
}

export const findById = async (req:Request, res:Response, next:NextFunction) => {
    const  { id } = req.params;
    const URL = `${BASE_URL}/posts/${id}`;

    const findUser = await fetchUser(URL, 'GET', undefined);
    return res.json(findUser?.data);
}
