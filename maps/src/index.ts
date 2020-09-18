// import { User } from "./User";
// import { Company } from "./Company";
import "googlemaps";

// // install @types/googlemaps to let TS understand google global vars
// const user = new User();
// console.log(user);
// // never use export default in TS
// // import color from "./User";
// // console.log(color);

// const company = new Company();
// console.log(company);

new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: { lat: 0, lng: 0 },
});
