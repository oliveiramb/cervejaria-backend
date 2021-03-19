import mongoose from 'mongoose'

class Database {

    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            "mongodb+srv://admin:admin@cluster0.rfhik.mongodb.net/test?retryWrites=true&w=majority", 
            {
                useNewUrlParser: true,
                useFindAndModify: true
            }
        );
    }
}

export default new Database();