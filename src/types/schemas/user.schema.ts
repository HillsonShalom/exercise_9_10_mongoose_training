import mongoose, { Schema, Document, Model } from "mongoose";
import { imission } from "./mission.schema";
import { missionSchema } from "./mission.schema";

interface iuser extends Document {
    name: string;
    password: String;
    email: String;
    age: Number;
    missions: imission[];
}

export const userSchema = new Schema<iuser>({
    name:     { type: String, required: true, unique: true, maxlength: [20, "STH.Error: the name was too long"] },
    password: { type: String, required: true },
    email:    { type: String, validate: {
        validator: (email: String) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.toString()), message: "STH.Error: wrong email"
    }},
    age:      { type: Number, min: [1, "STH.Error: too low"], max: [120, "STH.Error: too high"] },
    missions:    { type: [missionSchema], default: [] }
}, { timestamps: true })

export const userModel: Model<iuser> = mongoose.model('user', userSchema)


