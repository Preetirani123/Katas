const calculateChange = function(total, cash) {
  let final = {};
  let change = cash - total;

  while (change > 0){

    if (change >= 2000){
      final.twentyDollar = final.twentyDollar + 1 || 1;
      change = change - 2000;
    }
    
    else if (change >= 1000) {
      final.tenDollar = final.tenDollar + 1 || 1;
      change = change - 1000;
    }
    
    else if (change >= 500) {
      final.fiveDollar = final.fiveDollar + 1 || 1;
      change = change - 500;
    }

    else if (change >= 200) {
      final.twoDollar = final.twoDollar + 1 || 1;
      change = change - 200;
    }

    else if (change >= 100) {
      final.oneDollar = final.oneDollar + 1 || 1;
      change = change - 100;
    }

    else if (change >= 25) {
      final.quarter = final.quarter + 1 || 1;
      change = change - 25;
    }

    else if (change >= 10) {
      final.dime = final.dime + 1 || 1;
      change = change - 10;
    }

    else if (change >= 5) {
      final.nickel = final.nickel + 1 || 1;
      change = change - 5;
    }

    else {
      final.penny = final.penny + 1 || 1;
      change = change - 1;
    }

  }
  
  return final;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));