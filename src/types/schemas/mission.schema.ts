import mongoose, { Schema, Document, Model } from "mongoose";
import missionStatus from "../enums/todo-status";

export interface imission {
    title: string;
    body: string;
    status: string;
}

export const missionSchema = new Schema<imission>({
    title:     { type: String, required: true, unique: true, maxlength: [256, "STH.Error: the title was too long"] },
    body:      { type: String, required: true },
    status:    { type: String, enum: ['todo', 'inProgress', 'done'] }
}, { timestamps: true })