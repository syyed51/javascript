# Objects

There are 3 ways to create objects

1. Object literal
1. **new** keyword
1. Object constructor.

## Object literal

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

## **new** keyword

```javascript
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

> The two examples above do exactly the same. There is no need to use new Object().
> For simplicity, readability and execution speed, use the first one (the object literal method).

### JavaScript Objects are Mutable

Objects are mutable: They are addressed by reference, not by value.

```javascript
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

var x = person;
x.age = 10; // This will change both x.age and person.age
```

## Constructor function

```javascript
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
```

> It is considered good practice to name constructor functions with an upper-case first letter.
