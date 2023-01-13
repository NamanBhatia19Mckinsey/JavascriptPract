const a = 1; const b = 8; const c = 3;

(function firstFunction () {
    const b = 8;
  const c = 6;

  (function secondFunction () {

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()

console.log(`a: ${a}, b: ${b}, c: ${c}`);