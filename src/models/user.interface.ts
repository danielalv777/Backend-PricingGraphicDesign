import { Device } from "./user";

export interface User {
    name: String,
    lastname: String,
    email: String,
    password: String,
    phoneNumber: String,
    role: String,
    activeDevice: Array<Device>,
};