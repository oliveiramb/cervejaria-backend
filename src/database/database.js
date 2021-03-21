import mongoose from 'mongoose'

class Database {

    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            "", 
            {
                useNewUrlParser: true,
                useFindAndModify: true
            }
        );
    }
}

export default new Database();
