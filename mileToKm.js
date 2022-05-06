//write a function that converts miles to kilometers
function convertToKm(miles) {

    let km = (miles * 1.609344).toFixed(2);
    console.log(miles + " miles is " + km + " km");
    return km;
}
// console.log("--mi to km--");
// console.log(convertToKm(3.107));  //3.1 miles if 5km
// console.log(convertToKm(5));     //5 miles is 8km
// console.log(convertToKm(8));     //8 miles is 12.87km
// console.log(convertToKm(13));     //13 miles is 20.92 km


console.log("--km to mi--");
//Now write a function that converts kilometers to miles
function convertKmToMi(km) {
    let mi = (km * 0.621371).toFixed(2);
    console.log(km + " km is " + mi + " miles");
    return mi;
}

// console.log(convertKmToMi(10));  //10km is 6.2 miles
// console.log(convertKmToMi(8));   //8 km is 5 miles
// console.log(convertKmToMi(32))   //32 km is 19.88 miles

console.log("---------------------------------");
//Could you write a for loop to convert miles to km from 1 mile to 10 miles
for(let i = 1; i <=10; i++) {
    convertToKm(i);
}


//Could you write a for loop to convert km to miles from 1km to 10km
for(let j = 1; j <= 10; j++) {
    convertKmToMi(j);
}