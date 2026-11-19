
// SpendWise - Interactive Budget Tracker

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

// 4. Format currency
function formatCurrency(amount) {
    return "KES " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// 5. Update dashboard
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses(expenses);
    const remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    document.getElementById("monthly-budget").textContent =
        formatCurrency(monthlyBudget);

    document.getElementById("total-expenses").textContent =
        formatCurrency(totalExpenses);

    document.getElementById("remaining-balance").textContent =
        formatCurrency(remainingBalance);

    const message = document.getElementById("budget-message");

    message.classList.remove("warning", "success");

    if (monthlyBudget <= 0) {
        message.textContent = "Set your monthly budget to get started.";
    } else if (remainingBalance < 0) {
        message.textContent =
            "Warning: You have exceeded your monthly budget!";
        message.classList.add("warning");
    } else {
        message.textContent =
            "Good job! You are within your monthly budget.";
        message.classList.add("success");
    }

    displayExpenses();
}

// 6. Display expenses on the webpage
function displayExpenses() {
    const expenseList = document.getElementById("expense-list");

    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML =
            '<p class="empty-message">No expenses recorded yet.</p>';
        return;
    }

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const item = document.createElement("div");
        item.className = "expense-item";

        const details = document.createElement("div");

        const name = document.createElement("h3");
        name.textContent = expense.name;

        const category = document.createElement("p");
        category.textContent = expense.category;

        details.appendChild(name);
        details.appendChild(category);

        const amount = document.createElement("span");
        amount.className = "expense-amount";
        amount.textContent = formatCurrency(expense.amount);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function() {
            expenses.splice(i, 1);
            updateDashboard();
        });

        item.appendChild(details);
        item.appendChild(amount);
        item.appendChild(deleteButton);

        expenseList.appendChild(item);
    }
}

// 7. Listen for monthly budget form submission
document.getElementById("budget-form").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        const budgetValue = Number(
            document.getElementById("budget-input").value
        );

        if (!Number.isFinite(budgetValue) || budgetValue <= 0) {
            alert("Please enter a valid monthly budget greater than zero.");
            return;
        }

        monthlyBudget = budgetValue;

        updateDashboard();

        document.getElementById("budget-form").reset();
    }
);

// 8. Listen for expense form submission
document.getElementById("expense-form").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        const name = document.getElementById("expense-name").value.trim();
        const category = document.getElementById("expense-category").value;
        const amount = Number(
            document.getElementById("expense-amount").value
        );

        if (
            name === "" ||
            category === "" ||
            !Number.isFinite(amount) ||
            amount <= 0
        ) {
            alert("Please enter a valid expense name, category, and amount.");
            return;
        }

        expenses.push({
            name: name,
            category: category,
            amount: amount
        });

        updateDashboard();

        document.getElementById("expense-form").reset();
    }
);

// 9. Display the initial dashboard
updateDashboard();

