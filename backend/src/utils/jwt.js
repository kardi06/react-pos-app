import JsonWebToken from "jsonwebtoken";
import { Buffer } from "buffer";
import "dotenv/config";
import process from "process";

const generateAccessToken = (user) => {
    return JsonWebToken.sign(user, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE_IN || "1800s"
    });
};

const generateRefreshToken = (user) => {
    return JsonWebToken.sign(user, process.env.JWT_REFRESH_SECRET,{
        expiresIn: process.env.JWT_EXPIRE_IN || "86400s"
    });
}

const verifyRefreshToken = (token) => {
    try{
        return JsonWebToken.verify(token, process.env.JWT_REFRESH_SECRET);
    }catch (err) {
        return err;
    }
}

const parseJwt = (token) => {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}
const verifyAccessToken = (token) => {
    try{
        return JsonWebToken.verify(token, process.env.JWT_SECRET);
    }catch (err) {
        return err;
    }
}

export {
    generateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    parseJwt,
    verifyAccessToken
};