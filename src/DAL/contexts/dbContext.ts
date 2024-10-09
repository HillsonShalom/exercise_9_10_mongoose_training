import mongoose, { Document, Model } from "mongoose"

class context<TModel extends Document, TDTO> {
    model: Model<TModel>
    constructor(model: Model<TModel>) {
        this.model = model
    }

    create = async (dto: TDTO, others?: any): Promise<[boolean, Error | undefined]> => {
        try {
            const newModel = new this.model({...dto, ...others});
            await newModel.save();
            return [true, undefined]
        } catch(err) {
            const error = err as Error
            return [false, error]
        }
    }
}

export default context