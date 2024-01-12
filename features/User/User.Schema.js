
import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
        imageUrl: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
})
// const data = [{1,'https://media.licdn.com/dms/image/D4D03AQG1uIuO_rLySQ/profile-displayphoto-shrink_800_800/0/1690281325621?e=1704931200&v=beta&t=fr2JEoeTdvAvDG4D9W6GBWJQh9bEy4kkQ41Ow1ujqIE','prayrit','prayrit@gmail.com','fluffy','12345678'},{2,'https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain','lucky','lucky@gmail.com','rajjo','12345678'},{3,'https://th.bing.com/th?id=OIP.lKKrBxOPZm46Lecr2tcELQHaJr&w=218&h=285&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2','anushka','anushka@gmail.com','moti','1q2w3e4'}]


