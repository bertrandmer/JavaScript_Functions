//Exercise 1 Section
function printOdds (count) {
    for (i = 1; i < count; i++) {
        if(i % 2 == 1) {
        console.log("i");
    } else{
        continue;
    }
}
} 



//Exercise 2 Section
function checkAge (age, userName) {
   let aboveSixteen= 'Congrats ${userName} you can drive !';
   let belowSixteen= 'Sorry ${userName} but you need to wait until you're 16.'';
    if(age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}