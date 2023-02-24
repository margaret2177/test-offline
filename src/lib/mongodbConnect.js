import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.set("strictQuery", true);
const con = async () =>
  mongoose.connect(uri, options, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  });

export default con;
