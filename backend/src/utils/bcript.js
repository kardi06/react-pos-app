import bcrypt from "bcrypt";
const saltRounds = 10;

export const encript = (password) => {
    const hash = bcrypt.hash(password, saltRounds);
    return hash;
};

export const compare = (password, hash) => {
    const result = bcrypt.compare(password, hash);
    return result;
};