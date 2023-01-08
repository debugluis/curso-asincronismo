console.clear();

function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* fibonacci() {
    let current = 0;
    let next = 1;
    while(true){
        yield current;
        [current, next] = [next, current + next];
    }
  }
  
  var it = fibonacci();
  for (let i = 0; i < 24; i++){
    console.log(it.next().value);
  }