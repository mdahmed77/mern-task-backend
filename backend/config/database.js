const mongoose = require('mongoose');

const database = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = database

// ### Use this codeblock to connect to the DB and Server 
// // To Connect to DB First then Run The Server
// const startServer = async () => {
//     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`Server Running on pot ${PORT}`) 
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }
// startServer();