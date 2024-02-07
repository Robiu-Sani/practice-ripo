import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, 'pleace inter product name']
    },
    description: {
        type : String,
        required : [true, 'pleace inter product description']
    },
    price: {
        type : Number,
        required : [true, 'pleace inter product price']
    },
    images: [
        {
            public_id:{
                type : String,
            },
            url : {
                type: String,
            }
        }
    ],
    category: {
        type : String,
        required : [true, 'enter product category'],
        enum: {
            values : [
                'Electronics',
                'Cameras',
                'Laptop',
                'accessories',
                'Headphones',
                'Sports',
            ],
            message: 'please select correct category'
        }
    },
    seller: {
        type : String,
        required : [true, 'pleace inter product seller']
    },
    stock: {
        type : Number,
        required : [true, 'pleace inter product stock']
    },
    ratings: {
        type : Number,
        default : 0
    },
    reviews: [
        {
            rating:{
                type: Number,
                required : true,
            },
            comment: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            }

        }
    ]
});



export default mongoose.models.Product || mongoose.model("product", productSchema);