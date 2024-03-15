const radiusmeter = 5;
const PI = 3.1415;
const area = PI * radiusmeter * radiusmeter; // ~ 78.54 sq meters

const plant_area = 0.8;
let plants = 20;

// Part 1: Growing Pains
for (let week = 1; week <=3; week++) {
    plants *= 2;
    console.log (plants);
    console.log (week);
    let plants_area = plants * plant_area; // ~ 16 sq meters
    let garden_plants_area = plants_area / area ; 
    if (garden_plants_area >= 0.8) {
        console.log(Math.round(garden_plants_area*100) + "% occupied on the "+" week. Pruned" );} 
    else if (garden_plants_area >=0.5 && garden_plants_area <=0.8) {
        console.log(Math.round(garden_plants_area*100) + "% occupied on the " + " week. Monitored");}
    else { console.log(Math.round(garden_plants_area*100) + "% occupied on the " + " week. Planted"); }
  }

// Part 2: Thinking Bigger

let plants_100 = 100;


for (let week = 1; week <=10; week++) {
    plants_100 *= 2;
}

console.log( "In 10 weeks will be " + plants_100 + " plants.");
const area_max = plants_100 * plant_area;
console.log(area_max);

// Part 3: Errors in Judgement

// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

  const gardenscince = plants_100 * plant_area;


try {
   if ( gardenscince <= area ) {
     debugger; }
   else { 
     throw "Error"; }
   }
    catch (err) {
    // Handle the error
    console.log("Garden overfull"); } finally {
    
  }