# ES6()

[실습페이지 | jsbin.com](http://jsbin.com/?js,output)

## var / let, const

- var: Function(함수)단위로 유지되는 변수
- let: Braket({,})으로 정의된 블록 기준으로 유지되는 변수
- const: 선언과 함께 초기화된 이후 값이 변하지 않는 상수값에 적용

## 삼항 조건 연산자

- for 문

  ```javascript
  let myarr = [10, 20, 30];

  for (let i in myarr) {
    console.log(i, myarr[i]);
  }
  // ("0");
  // 10;
  // ("1");
  // 20;
  // ("2");
  // 30;

  for (let i of myarr) {
    console.log(i);
  }
  // 10;
  // 20;
  // 30;
  ```

- Arrow Function

- Map Function

  ```javascript
  let myarr = [10, 20, 30];
  let result = myarr.map(item => item + 10);

  for (let i of result) {
    console.log(i);
  }
  ```

- Template literals

  ```javascript
  let host = "domain.com";
  let port = "9090";
  let url1 = "http://" + host + ":" + port;
  console.log(url1); // "http://domain.com:9090"

  let url2 = `http://${host}:${port}`;
  console.log(url2); // "http://domain.com:9090"
  ```

- Spread Operator

  ```javascript
  const num1 = [1, 3, 5];
  const num2 = [2, 4, 6];
  const num = [0, ...num1, ...num2, 10];

  console.log(num1); //[1, 3, 5]
  console.log(num2); //[2, 4, 6]
  console.log(num); // [0, 1, 3, 5, 2, 4, 6, 10]
  ```

- Destructuring Assignment

  ```javascript
  import { observable, action, runInAction } from 'mobx';
  
  const { store, form, loading, errors, entity } = this.props; 
  ```

- Object.assign() Function
  
  ```javascript
  const obj = {a:1};
  let copy = Object.assign({}, obj);
  console.log(copy); // {a: 1}
  
  const obj1 = {a:1};
  const obj2 = {b:2};
  const obj3 = {c:3};
  let newObj = Object.assign({}, obj1, obj2, obj3);
  console.log(newObj); // {a: 1, b: 2, c: 3}
  ```

- Mandatory Parameter

  ```javascript
  // below ES5
  function foo(bar) {
  if(bar === undefined) {
    throw new Error('Missing parameter!');
  }
    return bar;
  }

  // in ES6
  let mandatory = () => {
    throw new Error('Missing parameter!');
  }
  let foo = (bar = mandatory()) => {
    return bar;
  }
  ```

- Promise Object
  
  ```javascript
  new Promise(function (resolve, reject) {
  }).then(function (resolve) {
    // handle value of resolve
  }).catch(function (reject) {
    // handle value of reject
  }).finally(function(){
    // handle after all
  });
  ```
