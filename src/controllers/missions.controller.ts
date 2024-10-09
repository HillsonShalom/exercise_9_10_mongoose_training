import { Request, Response } from "express";
import { createMission } from "../types/DTOs/missionDTOs";
import missionStatus from "../types/enums/todo-status";

class controller {
    static getAll = (
        req: Request,
        res: Response
    ) => {
        try {
            res.status(200).json({ message: "get all missions" })
        } catch(err) {
            console.log(err);
        }
    }

    static getById = (
        req: Request,
        res: Response
    ) => {
        try {
            res.status(200).json({ message: "get mission by id", id: req.params.id })
        } catch(err) {
            console.log(err);
        }
    }

    static create = (
        req: Request<any, any, { status: createMission }>,
        res: Response
    ) => {
        try {
            res.status(201).json({ message: "create mission", user: req.body })
        } catch(err) {
            console.log(err);
        }
    }

    static update = (
        req: Request<any, any, missionStatus>, // missionStatus is enum
        res: Response
    ) => {
        try {
            res.status(200).json({ message: "update mission", id: req.params.id, user: req.body })
        } catch(err) {
            console.log(err);
        }
    }

    static increment = (
        req: Request,
        res: Response
    ) => {
        try {
            res.status(200).json({ message: "increment mission", id: req.params.id, toStatus: req.body })
        } catch(err) {
            console.log(err);
        }
    }

    static delete = (
        req: Request,
        res: Response
    ) => {
        try {
            res.status(200).json({ message: "delete mission", id: req.params.id })
        } catch(err) {
            console.log(err);
        }
    }
}

export default controller