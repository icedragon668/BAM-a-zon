class Dog {
    constructor(color, name) {
        this.name = name;
        this.color = color;
    }

    sayName() {
        console.log(this.name);
    }
}

const rufus = new Dog('brown', 'rufus');

rufus.sayName();


// Adding a new method to the Dog prototype

Dog.prototype.sayColor = function () {
    console.log(this.color);
}

rufus.sayColor();

// New members of Dog class have access to the new method

const pretty = new Dog('brindle', 'Pretty');

pretty.sayColor();
///////////////////////

///////////////////////
Array.prototype.sum = function () {
    let sum = 0;
    this.forEach(element => {
        sum += element
    });
    return sum
}

console.log([1, 2, 3].sum())

Array.prototype.forEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i])
    }
};

const printIt = function (it) {
    console.log(it + "p3")
};

[1, 2, 3, 4].forEach(
    function (val) {
        console.log(val + "p2");
    });

[1, 2, 3, 4].forEach(printIt);

Array.prototype.inc = function () {
    let newArray = []
    for (i = 0; i < this.length; i++) {
        newArray[i] = this[i] + 1;
    }
    return newArray
}
console.log([1, 2].inc())

Array.prototype.map = function (cb) {
    let newArray = [];
    for (i = 0; i < this.length; i++) {
        newArray[i] = cb(this[i]);
    }
    return newArray
}
let newA = [1, 2].map(function (e) {
    return e * 2
})

console.log(newA)

/// what? ///
return student.name.startsWith('J') ? student.name + " is cool" : student.name