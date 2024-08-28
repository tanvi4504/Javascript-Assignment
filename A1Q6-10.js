// QUESTION 6: COMPARISON OPERATOR

function isGreaterThanFive(a){
    if(a>5){
        return "True";
    }
    else{
        return "False";
    }
}
console.log(isGreaterThanFive(6));





// Question 7 : LOGICAL OPERATOR

function isBetweenOneAndTen(b){
    
    if(b>=1 && b<=10){
        return "True";
    }
    else{
        return "False";
    }
}
console.log(isBetweenOneAndTen(23));






// Question 8: IF ELSE STATEMENT

    function isEven(c){
    
         if (c%2==0) {
        return "Even";
        
         } 
              else {
                  return "Odd";
        
          }
}
    console.log(isEven(5));



 // QUESTION 9: TERNARY OPERATORS

    function checkAge(age){
       return age>=18 ? "Adult" : "Minor";
    }
    console.log(checkAge(2));



// QUESTION 10: SWITCH STATEMENT

    function getDayType(d){
        switch(d){
            case 1:{
                return "Weekday";
                break;}
            
                case 2:{
                    return "Weekday";
                    break;}

                    case 3:{
                        return "Weekday";
                        break;}

                        case 4:{
                            return "Weekday";
                            break;}

                            case 5:{
                                return "Weekday";
                                break;}

                                case 6:{
                                    return "WeekEnd";
                                    break;}

                                    case 7:{
                                        return "WeekEnd";
                                        break;}
        }

    }
    console.log(getDayType(6));