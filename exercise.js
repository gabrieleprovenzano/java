const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };

  const person2 = person1;

  person2.firstName = "Simon"

  //Viene modificato anche l'oggetto person1 perchè abbiamo detto al calcolatore che person2  e person1 sono la stesso oggetto
  
  console.log(person1);
console.log(person2);