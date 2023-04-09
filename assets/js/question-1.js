let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
   
function topSalary(salariesAbject){
    let highestPaidPerson=["",0];
    for (const [key,value] of Object.entries(salaries)) {
        if(highestPaidPerson[1]<value)highestPaidPerson=[key,value];
    }

    return highestPaidPerson;
}
console.log(topSalary(salaries));
