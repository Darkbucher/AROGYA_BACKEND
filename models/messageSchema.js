import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name Must Contain At Least 3 Characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name Must Contain At Least 3 Characters!"]
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, "Please Provide A Valid Email!"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Must cotains 10 digits!"],
        maxLength: [10, "Must cotains 10 digits!"],
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Must cotains 10 Characters!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);