
function addPromise (a, b) {
  return new Promise (function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Both need to be a Number');
    }
  });
}

addPromise('pedro', 15).then(function (add) {
  console.log('Add succed', add);
}, function (err) {
  console.log('Promise error', err);
});
