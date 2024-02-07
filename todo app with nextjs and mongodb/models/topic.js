import mongoose, {Schema} from 'mongoose'

const topicSchema = new Schema (
    {
        title: String,
        description : String,
    },
    {
        timestamps:true,
    }
);

const topic =mongoose.models.topic || mongoose.model("topic", topicSchema)

export default topic