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

- Assign

- Promise Object
