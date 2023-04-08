const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ]
//a všechna čísla
numbers.forEach((number)=>

    {console.log(number)}
)
//b druhé mocniny
numbers.forEach((number)=>{
    console.log(number*number)

})
//c záporná čísla
numbers.forEach((number)=>{
    if (number < 0)
    console.log(number)
})
//e sudá čísla
numbers.forEach((number)=>{
    if (number % 2 === 0) 
    console.log(number)

})

//i spočítej kolik je záporných čísel
numbers.forEach((number) =>
{   if (number < 0)
    console.log(number.length)

  
})

//j spočitej součet všech čísel v poli
let soucet=0
for (let i = 0; i< numbers.length; i++)
{ 
    soucet += numbers[i]
}
console.log(soucet)

//k průměr všech čísel v poli
let suma = 0
for (let i = 0; i< numbers.length; i++)
{ 
    suma += numbers[i]

}

const average = soucet / numbers.length
console.log(average)

// l součet všech kladných čísel v poli

let soucetKladnychCisel = 0
numbers.forEach((number)=> {
    if (number>0){
    soucetKladnychCisel += number

}
})

console.log(soucetKladnychCisel)


const roll= () => {
    return Math.random()
}