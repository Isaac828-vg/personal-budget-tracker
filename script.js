// SpendWise - JavaScript Foundation

// 1. Variables
let monthlyBudget = 0;
const expenses = [];

// 2. Calculate total expenses
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (const expense of expenseList) {
        total += expense.amount;
    }

    return total;
}

// 3. Calculate remaining balance
function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// 4. Collect monthly budget
const budgetInput = prompt("Enter your monthly budget in KES:");

if (budgetInput === null || budgetInput.trim() === "") {
    console.log("No budget was entered.");
} else {
    monthlyBudget = Number(budgetInput);

    if (!Number.isFinite(monthlyBudget) || monthlyBudget < 0) {
        console.log("Please enter a valid budget.");
    } else {

        // 5. Collect expenses
        const numberInput = prompt("How many expenses do you want to enter?");
        const numberOfExpenses = Number(numberInput);

        if (numberInput === null ||
            numberInput.trim() === "" ||
            !Number.isInteger(numberOfExpenses) ||
            numberOfExpenses < 0) {

            console.log("Please enter a valid number of expenses.");

        } else {

            for (let i = 0; i < numberOfExpenses; i++) {
                const expenseName = prompt("Enter expense name " + (i + 1) + ":");

                if (expenseName === null || expenseName.trim() === "") {
                    console.log("Invalid expense name. Skipped.");
                    continue;
                }

                const amountInput = prompt("Enter amount for " + expenseName + " in KES:");

                if (amountInput === null || amountInput.trim() === "") {
                    console.log("Invalid amount. Skipped.");
                    continue;
                }

                const amount = Number(amountInput);

                if (!Number.isFinite(amount) || amount < 0) {
                    console.log("Invalid amount. Skipped.");
                    continue;
                }

                expenses.push({
                    name: expenseName.trim(),
                    amount: amount
                });
            }

            // 6. Display budget summary
            const totalExpenses = calculateTotalExpenses(expenses);
            const remainingBalance = calculateRemainingBalance(
                monthlyBudget,
                totalExpenses
            );

            console.log("===== SPENDWISE BUDGET SUMMARY =====");
            console.log("Monthly Budget: KES " + monthlyBudget);
            console.log("Total Expenses: KES " + totalExpenses);
            console.log("Remaining Balance: KES " + remainingBalance);

            console.log("Expense Details:");

            expenses.forEach(function(expense, index) {
                console.log(
                    (index + 1) + ". " + expense.name +
                    ": KES " + expense.amount
                );
            });

            if (remainingBalance < 0) {
                console.log("Warning: You have exceeded your budget!");
            } else {
                console.log("Good job! You are within your budget.");
            }
        }
    }
}
