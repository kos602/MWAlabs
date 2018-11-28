Array.prototype.even = function () {
    let $self = this;
    new Promise(function (resolve, reject) {
        let newarr = [];
        for (let i of $self) {
            if (i % 2 === 0)
                newarr.push(i);
        }
        resolve(newarr)
    }).then(arr => console.log(arr));
};
Array.prototype.odd = function () {
    let $self = this;
    new Promise(function (resolve, reject) {
        let newarr = [];
        for (let i of $self) {
            if (i % 2 === 1)
                newarr.push(i);
        }
        resolve(newarr)
    }).then(arr => console.log(arr));
};

console.log("Start");
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log("End");

/*
 * Output is:
 * Start
 * End
 * [ 2, 4, 6, 8 ]
 * [ 1, 3, 5, 7 ]
 */
