function makeWorker() {
    let name = 'Pete';
    return function () {
      alert(name);
    };
  }
  let name = 'John';
  let work = makeWorker();
  work(); //alert(pete) becaus arrow cannot houting ได้