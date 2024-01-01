import mongoose from "mongoose"

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/note-taking')
        console.log(`mongodb server running on ${mongoose.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDb