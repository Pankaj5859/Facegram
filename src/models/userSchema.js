const mongoose = require("mongoose")
const validator = require("validator")



const usersSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true, minLength: 2, maxLength: 15 },
    lastName: { type: String, required: true, trim: true, minLength: 2, maxLength: 15 },
    userName: { type: String, required: true, trim: true, unique: true, minLength: 2, maxLength: 20, lowercase: true },
    email: {
        type: String, required: true, trim: true, unique: true, minLength: 11, maxLength: 30,
        validate(value) {
            const flag = validator.isEmail(value)
            if (!flag) {
                throw new Error("Please enter valid e-mail")
            }
        }
    },
    password: {
        type: String, required: true, trim: true, validate(value) {
            const flag = validator.isStrongPassword(value)
            if (!flag) {
                throw new Error("Please match the requirements")
            }
        }
    },
    dateofBirth: {
        type: String, required: true, trim: true, validate(value) {
            const flag = validator.isDate(value)
            if (!flag) {
                throw new Error("Please enter valid date")
            }
        }
    },

})


const Users= mongoose.model("User",usersSchema)

module.exports={Users}