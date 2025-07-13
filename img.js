const str ="Here you can fin most delicies food in the world"

function vowlscount(y) {
    let  counter = 0;
    const vowls = "aieouy";
    const arr = str.split("");
    arr.forEach(function (v,i) {
        if (vowls.includes(v)) {
            counter = counter + 1;
        }
    });
    return counter;
}
console.log(vowlscount(str));
