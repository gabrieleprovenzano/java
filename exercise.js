function printName() {
    let helloName = "Hello John";
    console.log(helloName);
    function inner () {
        return helloName;
    }
}

setTimeout(printName, 1000);
