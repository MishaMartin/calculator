const { SSL_OP_NO_QUERY_MTU } = require('constants');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
    tokens = input.split(' ');

    mathSymbol = tokens[0];
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2]);
    num3 = Number(tokens[3]);


    if (mathSymbol === "+"){
      console.log(num1 + num2 + num3);
}

reader.close();

if (mathSymbol === "-"){
  console.log(num1 - num2 - num3);
}

reader.close();

if (mathSymbol === "*"){
  console.log(num1 * num2 * num3);
}

reader.close();

if (mathSymbol === "/"){
  console.log(num1 / num2 / num3);
}

reader.close();

if (mathSymbol === "sqrt"){
  console.log(Math.sqrt(num1));
}

reader.close();

if (mathSymbol === "sq"){
  console.log(Math.pow(num1,2));
}

reader.close();

if (mathSymbol === "cube"){
  console.log(Math.pow(num1,3));
}

reader.close();

if (mathSymbol === "exp"){
  console.log(Math.pow(num1,num2));
}

reader.close();

if (mathSymbol === "rem"){
  console.log(num1 % num2);
}

reader.close();

    // This line closes the connection to the command line interface.
    // reader.close()

});


