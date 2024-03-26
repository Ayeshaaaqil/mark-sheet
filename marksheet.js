"use strict";
//This code calculates percentage for 5 subjects
//Subject:Anatomy, Physiology, English, Biochemistry, Computer
let userId = "123489pkii";
//TotalMarks =500
//student marks
let AnatomyMarks = 85;
let PhysiologyMarks = 97;
let EnglishMarks = 78;
let BiochemistryMarks = 90;
let ComputervMarks = 67;
let totalMarks = 500;
let obtainedMarks = AnatomyMarks + PhysiologyMarks + EnglishMarks + BiochemistryMarks + ComputervMarks;
let Percentage = (obtainedMarks / totalMarks) * 100;
//console.log function
console.log("AnatomyMarks:", AnatomyMarks);
console.log("PhysiologyMarks:", PhysiologyMarks);
console.log("EnglishMarks:", EnglishMarks);
console.log("BiochemistryMarks:", BiochemistryMarks);
console.log("ComputervMarks:", ComputervMarks);
console.log("Percentage:"), Percentage.toFixed(2) + "%";
console.log(Percentage);
//grades if and else methods
if (Percentage > 80) {
    console.log("Grade A+");
}
else if (Percentage > 70) {
    console.log("Grade A");
}
else if (Percentage > 60) {
    console.log("Grade B");
}
else if (Percentage > 50) {
    console.log("Grade C");
}
else if (Percentage > 40) {
    console.log("Grade D");
}
else if (Percentage > 30) {
    console.log("Grade fail");
}
;
