import dotEnv from "dotenv";

dotEnv.config();

export const PORTNUMBER = process.env.PORT_NUMBER;
export const JWT_SECRETE_KEY = process.env.JWT_SECRETE_KEY || "";
export const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING || "";
export const SENDGRID_API_KEY = process.env.SEND_GRID_API_KEY || "";
export const CLIENT_BASE_URL = process.env.CLIENT_BASE_URL || "";