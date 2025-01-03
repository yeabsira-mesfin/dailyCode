var iniNotNeeded;

let inNeeded=1;

// const inMust;

// console.log(inMust)
console.log(inNeeded)


let a = 10;

console.log(a -'1')
console.log(a + '1')
console.log((+a) + +"1")
console.log(a * '1')
console.log(a % '1')

const fish = [
    'Starfish',,
     'Jellyfish',]

console.log(fish)
console.log(fish[1])

const sales = 'Toyota';

function carSales(name){
    return name==='Honda'? name:`Sorry we don't sell ${name}`
}

const car = {
    myCar:'Saturn',
    getCar:carSales('Honda'),
    special: sales
}

console.log(car.myCar)
console.log(car.getCar)
console.log(car.special)
console.log(carSales('Jaguar'))

const specialObj = {
    obj:{a:'one',b:'two',c:'three'},
    1:'viva'
}
console.log(specialObj.obj.a)