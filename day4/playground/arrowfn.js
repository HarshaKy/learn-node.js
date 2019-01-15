var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Harsha',
  sayHi: () => {
    console.log(arguments);
    console.log(`hi. im ${this.name}`);
  },

  // use the below procedure to define fns inside objects
  sayHiAlt () {
    console.log(arguments);
    console.log(`hi. im ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
