import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING!);
        console.log('successfully connected to MongoDB');
    } catch(err) {
        console.log(err);
    }
}

export default connect