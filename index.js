import "dotenv/config";
import cowsay from "cowsay";

const ename = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
  cowsay.say({
    text: "I'm " + ename + " from " + campus,
    e: "oO",
    T: "U ",
  })
);
