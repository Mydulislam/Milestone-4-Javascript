/* =========================================================================================
বার্ষিক 12%  মুনাফায় কত বছরে 10,000 টাকার মুনাফা 4800 টাকা হবে ?
r = rateOfInterrst
p = principal / asol
i = interest / munafa
n = time / year

// Main formula
I = prn
=============================================================================================*/

var rateOfInterest = 12/100;
var p = 10000;
var i = 4800;

var n =  i / (p*rateOfInterest);

console.log(n);