var names = ["Hoobastank", "Baseketball", "Dumweiner"];

// var returnMe = (name) => name + " returned!";

// console.log(returnMe("dumpus"));

var person = {
    name: "Drangus",
    greet: function() {  //You need a proper function here or else ((this)) has no context to point to.
        
       names.forEach((name) =>{console.log(this.name + " says What do you think you're looking at, " + name);});
       //You need to use an arrow function here or else ((this)) loses its binding to person, and gains a binding to ".greet"
    }
}

person.greet();