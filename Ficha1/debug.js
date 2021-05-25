// Executar em modo "normal" (breakpoint é ignorado e não se faz debug);
// Executar em modo "debug" (para o breakpoint);

var a = 10;
var b = 5;
var c = a + b;
console.log(c);

function test(msg) {
    console.log(msg + " test");
}

test("hello");
test(5);
test(2.5);

var fn = function() {
    console.log("anonymous");
}

function log(func) {
    func();
}

// fn();
log(fn);
log(function() {
    console.log("anonymous 2");
}); // Faz-se assim quando só se quer fazer uma vez a função; é o mesmo de cima, da var fn;