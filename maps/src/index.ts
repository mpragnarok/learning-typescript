import { User } from "./User";
import { Company } from "./Company";
const user = new User();
console.log(user);
// never use export default in TS
// import color from "./User";
// console.log(color);

const company = new Company();
console.log(company);
