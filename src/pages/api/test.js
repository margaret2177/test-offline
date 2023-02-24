import con from "../../lib/mongodbConnect";
import Test from "@/models/Test";
export default async function handler(req, res) {
  await con();

  const { method, query, body } = req;

  if (method === "GET") {
    try {
      const test = await Test.find();
      res.status(200).json({ message: "hello", data: test });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  if (method === "POST") {
    try {
      const newTest = new Test({
        name: body.term,
      });
      const data = await newTest.save();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
