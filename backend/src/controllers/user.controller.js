import { userUpdateValidation, userValidation } from "../validations/user.validation.js";
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
                password: await encript(value.password),
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

export const updateUser = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(req.params.id),
        }
    });
    if(!user){
        return res.status(404).json({
            message: 'User not found', 
            result: null
        });
    }
    // data validation
    const { error, value } = userUpdateValidation(req.body);
    if (error) {
        return res.status(400).json({
        message: error.details[0].message,
        result: null,
        });
    }
    let pass = user.password;
    if (value.password && value.password.length > 0) {
        pass = encript(value.password);
    }
    try {
        const result = await prisma.user.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name: value.name,
                userName: value.userName,
                password: pass,
                role: value.role,
            },
        });
        result.password = "xxxxxxxxxxxxxxxxxx";
        return res.status(200).json({
            message: "success",
            result,
        });
    } catch (error) {
        loggers.error(
            "controllers/user.controller.js:updateUser - " + error.message
        );
        return res.status(500).json({
            message: error.message,
            result: null,
        });
    }
}