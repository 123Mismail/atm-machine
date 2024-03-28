import inquirer from "inquirer";
let password = 1234;
let totalBal = 20000; //dollar
let pinnAns = await inquirer.prompt([
    {
        name: "pinn", message: "enter your pinn", type: "number",
    }
]);
if (pinnAns.pinn === password) {
    console.log("correct password");
    let operationAans = await inquirer.prompt([
        {
            name: "operator", message: "select your option", type: "list", choices: ["withdraw", "balance inquiry", "back to previous option"]
        }
    ]);
    if (operationAans.operator === "withdraw") {
        let amounAns = await inquirer.prompt([
            {
                name: "amount", message: "select your amount", type: "number"
            }
        ]);
        if (amounAns.amount <= totalBal) {
            totalBal -= amounAns.amount;
            console.log(`your current balance is ${totalBal}`);
        }
    }
    else if (operationAans.operator === "balance inquiry") {
        console.log(`your balance is ${totalBal}`);
    }
    else {
        let operationAans = await inquirer.prompt([
            {
                name: "operator", message: "select your option", type: "list", choices: ["withdraw", "balance inquiry", "back to previous option"]
            }
        ]);
    }
}
else {
    console.log("please enter correct pinn");
}
