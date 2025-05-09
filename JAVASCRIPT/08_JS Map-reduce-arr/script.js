let arr = [1,2,34,5]

arr.forEach(function (value) {
    console.log(value);
})

var ansm=arr.map(function value() {
    return 12;
})

var ansf = arr.filter(function (value) {
    return value>2;
})

var ansr = arr.reduce(function (accumulator, value) {
    return accumulator + value
    
}, 0)