index.JS

//if low value card the count goes up, if high value card the count goes down, if medium value card the count stays the same. When count is positive, bet high when count is zero or negative, bet low (hold).
//Card value will increase, decrease, or not change the count
//Return if player should hold or bet based on current count value.

var count = 0;

//SWITCH to allow for card selection.
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count = count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count = count--;
            break;
    }
//IF count 0 or -, hold. ELSE, Bet.
    if (count <= 0) {
        return count + " Hold";
    } else {
        return count + " Bet";
    }
    }


cc(2); cc(5); cc(10); cc(7); cc("K"); cc("J");
console.log(cc(8));
