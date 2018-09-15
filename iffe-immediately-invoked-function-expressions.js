const name = "jane";

(function(lastname) {
  const name = 'jon';
  console.log(`${name} ${lastname}`);
})('Doe');

(function() {
  const name = 'chalupa';
  console.log(name);
}());

console.log(name)
