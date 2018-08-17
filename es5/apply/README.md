# apply()
it is similar to call method. 
```javascript
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "Mary",
    lastName: "Doe",
}
person.fullName.apply(person1);  // Will return "Mary Doe"
```
## Arguments
```javascript
var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
person.fullName.apply(person1, ["Oslo", "Norway"]);
```
**Note** that type of arguments is array. 