function printName() {
    let helloName = "Hello John";
    console.log(helloName);
    function inner () {
        return helloName;
    }
}

printName()
