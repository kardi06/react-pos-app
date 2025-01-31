import { userValidation } from "../validations/user.validation.js";
import prisma from "../utils/client.js";
import { encript } from "../utils/bcript.js";
import { loggers } from "../utils/winston.js";

export const createUser = async (req, res) => {
    const {error, value} = userValidation(req.body);
    if(error){
        return res.status(400).json({
            error: error.details[0].message,
            result: null
        });
    }

    try{
        const result = await prisma.user.create({
            data: {
                name: value.name,
                userName: value.userName,
                password: encript(value.password),
                role: value.role,
            }
        })
        result.password = "xxxxxxxxx";
        return res.status(200).json({message: 'Success', result: result});
    }catch (error) {
        loggers.error(
            "controllers/user.controller.js:createUser - " + error.message
        )
        return res.status(500).json({
            message: error.message, 
            result: null
        });
    }
}