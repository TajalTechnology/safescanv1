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


export const fetchDataAndCalculateValues = (Data) => {

    // Filter out invalid dates and get the last 7 days including today
    const validDates = Data.filter(entry => entry.day !== "NaN-NaN-NaN");
    const last7Days = validDates.slice(-7);
  
    // Extract values for the last 7 days
    const valuesLast7Days = last7Days.map(entry => entry.value);
  
    // Sum up the values
    const totalValueLast7Days = valuesLast7Days.reduce((acc, cur) => acc + cur, 0);
  
    return totalValueLast7Days?totalValueLast7Days:0;
  };


  export const todayDataGet = (Data) => {
    
    // Filter out invalid dates and get the last 7 days including today
    const validDates = Data.filter(entry => entry?.day !== "NaN-NaN-NaN");
    const todayData = validDates?.find(entry => entry?.day === getCurrentDate());
    return todayData?.value ? todayData?.value : 0;
  };
  
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  