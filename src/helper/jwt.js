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

export const dateChange = (dateString)=>{
    const parts = dateString.split('/');
    // Ensure parts contain day, month, and year
    if (parts.length !== 3) return null;
    
    const [month, day, year] = parts.map(Number);
    // Ensure the month and day are valid
    if (isNaN(month) || isNaN(day) || isNaN(year)) return null;

    // Check if it's a valid date
    const date = new Date(year, month - 1, day);
    if (isNaN(date.getTime())) return null;

    // Convert to the desired format
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
}