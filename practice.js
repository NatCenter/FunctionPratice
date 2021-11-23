//best in show
const dogBreed=(typeOfDog)=>{

    if (typeOfDog==="Schnanauze"){
return `My favorite  type of dog ${typeOfDog}`
    }
 if(typeOfDog==="meow"){

return 'I like cats'
}
}
const myFavorite=dogBreed("Schnanauze")

console.log(`When it coomes to pets, ${myFavorite}`)

//Age in dog years
const calculateAgeInDogYears = (age) => 
{
const ageInDogYears=age/7
return ageInDogYears

}

const dogAge=calculateAgeInDogYears(66)
console.log(dogAge)
//addtion
const Addition=(value1,value2,value3)=>{
    return value1+value2+value3
}
console.log(Addition(17,4,11))

// self-driving cars
const go= (direction,speed)=>{
if(direction==="forwards" && speed===45){
console.log(`The car is moving ${direction} ${speed} mph`)

}
else if(speed>=75){
console.log(`The car is moving ${direction} at ${speed} mph. SLOW DOWN!`)
}
if(direction==="backwards" && speed===8){
console.log(`The car is moving ${direction} ${speed} mph`)

}
if(direction==="circles" && speed===12){
console.log(`The car is moving ${direction} ${speed} mph`)

}



}
go('forwared',88)

//Evens or Odd question on what running a for loop with a if statment that checks that either a number can be divided by two evenly or not.
const numberArrays=[1,2,3,4,5];

const EvenOdd=()=>{
  for (const numberArray of numberArrays) {
      if(numberArray %2===0){
        console.log("even")
      }
      else{
          console.log('odd')
      }
  }
  

    

}
EvenOdd()