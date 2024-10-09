import { Request, Response } from "express";
import bcrypt from "bcrypt"
import { createUser } from "../types/DTOs/userDTOs";
import { userModel } from "../types/schemas/user.schema";
import { imission, missionSchema } from "../types/schemas/mission.schema";
import missionStatus from "../types/enums/todo-status";
import _context from '../DAL/contexts/dbContext'
import context from "../DAL/contexts/users.context";

class controller {
    static getAll = (
        req: Request,
        res: Response
    ) => {
        try {
            res.status(200).json({ message: "get all users" })
        } catch(err) {
            console.log(err);
        }
    }

    static getById = (
        req: Request,
        res: Response
    ) => {
        try {
            res.status(200).json({ message: "get user by id", id: req.params.id })
        } catch(err) {
            console.log(err);
        }
    }

    static create = async (
        req: Request<any, any, createUser>,
        res: Response
    ) => {
        try {
            const dto: createUser = req.body;

            const context = new _context(userModel)
            const creation = await context.create(req.body)
            if (!creation[0]) throw creation[1];
            console.log('created and saved successfully!');

            res.status(201).json({ message: "get all users", newId: "new-id", user: req.body })
        } catch(err) {
            const error = err as Error
            res.status(400).json(error.message)
            console.log(error.message);
        }
    }

    static update = (
        req: Request<any, any, Partial<createUser>>,
        res: Response
    ) => {
        try {
            res.status(200).json({ message: "update user", id: req.params.id, user: req.body })
        } catch(err) {
            console.log(err);
        }
    }

    static delete = (
        req: Request,
        res: Response
    ) => {
        try {
            res.status(200).json({ message: "delete user", id: req.params.id })
        } catch(err) {
            console.log(err);
        }
    }
}

export default controller