var num1 = 1;
var num2 = 2;

function binary() {
    var sum = num1 + num2;
    // console.log(sum);

    // var quo = sum / 2;
    // var rem = sum % 2;

    // while loop that divides sum down to 0?

    //getting the quotient!!!

    while (sum > 0) {
        var quoArray = [];
        var quo = Math.floor(sum / 2);
        quoArray.push(quo);
        console.log(quoArray);

    // getting the remainder 
        // var rem = (sum / 2) % 1;
        // console.log(rem);
        
    sum--;

    }
    


    // console.log(quo);
    // console.log(rem);

    // To convert integer to binary, start with the integer in question and divide it by 2 keeping notice of the quotient and the remainder. Continue dividing the quotient by 2 until you get a quotient of zero. Then just write out the remainders in the reverse order.

    // divide sum by 2 until quotient is 0
    // use modulus after quotient is 0 to get remainder
    // 


}

binary();

