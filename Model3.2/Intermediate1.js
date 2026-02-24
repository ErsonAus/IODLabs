function uppercaseCity(str) {
    let arrstr = str.split(" ");
    let newArr = [];
    for (let word of arrstr) {
        newArr.push(word[0].toUpperCase() + word.substring(1))}
        let newStr = newArr.join(" ");
        return newStr
    }
    console.log(uppercaseCity("Los Angeles"));