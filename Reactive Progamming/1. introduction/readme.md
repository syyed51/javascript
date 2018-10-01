# Observable

Let's think of 'Observable' as very special kind of function.

```js
function fun() {
  console.log("Hello function");
  return 42;
}
console.log("start");
console.log(fun());
console.log("end");
```

Let's take example of above function.

1. It logs 'Hello function' then return 42.
1. Keep between "start" and "end", meaning it's synchronous.

Now let's take a look at an Observables, which does the same.

```js
var foo = Rx.Observable.create(function(observer) {
  console.log("Hello Rx");
  observer.next(42);
});

console.log("start");
foo.subscribe(function(value) {
  console.log({ value });
});
console.log("end");
```

Now let's see few other things that Observable can do.

```js
var foo = Rx.Observable.create(function(observer) {
  console.log("Hello Rx");
  observer.next(10);
  observer.next(10);
  observer.next(30);
  observer.next(40);
  observer.next(50);
  setTimeout(function() {
    observer.next(100);
  }, 1000);
});

console.log("start");
foo.subscribe(function(value) {
  console.log({ value });
});
console.log("end");
```

1. This observable returns lot's of value, not just one like function.
1. It can return many values.
1. It can return values with time delay, which is quite powerful.

Note: Observables are similar to function generators in Javascript.

## Comparison with Generator

Please read generators in ES6 section.

### Generator function

> Producer is passive, pushes on request.
> consumer has to pull the values.

### Observable streams

> Producer acive and pushes new values, whenever they arrive.
> Consumer, simple consumes it.
