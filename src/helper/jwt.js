// import jwt from "jsonwebtoken";

// export const DecodeJWT = (token) => {
//   try {
//     const decodedToken = jwt.decode(token);
//     return decodedToken;
//   } catch (error) {
//     console.error("Error decoding JWT:", error);
//     return null;
//   }
// };
export const formattedDate = (data) => {
    const unixTimestamp = data;
    const normalDate = new Date(unixTimestamp);
    const year = normalDate.getFullYear();
    const month = normalDate.getMonth() + 1; 
    const date = normalDate.getDate();
    const modifiedDate = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    return modifiedDate;

}