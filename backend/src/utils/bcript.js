import bcrypt from "bcrypt";
const saltRounds = 10;

export const encript = async (password) => {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
};

export const compare = (password, hash) => {
    const result = bcrypt.compare(password, hash);
    return result;
};