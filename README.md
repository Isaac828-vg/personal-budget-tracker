# SpendWise - Personal Finance Dashboard

## Project Description

SpendWise is a responsive personal finance dashboard designed to help users understand and manage their monthly budgets and expenses.

The project uses HTML5, CSS3 and JavaScript. Users can enter a monthly budget, record multiple expenses and calculate their total expenses and remaining balance.

## Project Files

### 1. index.html
Contains the structure of the SpendWise dashboard, including:
- Sidebar navigation.
- Dashboard header and account profile.
- Financial summary cards.
- Six expense categories.
- Footer.
- JavaScript file connection.

### 2. style.css
Controls the visual appearance of the dashboard.

It includes:
- CSS Grid for the overall dashboard layout.
- Flexbox for navigation and dashboard components.
- CSS custom properties for consistent colours.
- Responsive design for mobile screens.
- Hover and keyboard focus effects.
- Dark theme support.

### 3. script.js
Contains the JavaScript functionality.

It includes:
- Variables for storing the monthly budget and expenses.
- Arrays and objects for organising expense information.
- Prompt dialogs for collecting user input.
- Functions for calculating total expenses.
- Functions for calculating the remaining balance.
- Console messages displaying the budget summary.
- Input validation to prevent invalid amounts.

## JavaScript Concepts Implemented

### Variables
The project uses `let` to store the monthly budget and `const` to store the expenses array.

### User Input
JavaScript `prompt()` collects the monthly budget, number of expenses, expense names and expense amounts.

### Data Types
The project uses numbers, strings, arrays and objects to organise financial information.

### Functions
`calculateTotalExpenses()` adds all recorded expenses.

`calculateRemainingBalance()` subtracts total expenses from the monthly budget.

### Loops and Conditional Statements
A `for` loop collects multiple expenses. Conditional statements validate user input and check whether spending exceeds the budget.

### Console Output
`console.log()` displays the monthly budget, total expenses, remaining balance and individual expense details.

## Example Calculation

Monthly budget: KES 50,000

Expenses:
- Food: KES 8,500
- Transport: KES 4,000
- Rent: KES 12,000

Total expenses: KES 24,500

Remaining balance: KES 25,500

## Technologies Used
- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- Google Fonts

## Features
- Responsive personal finance dashboard.
- Monthly budget input.
- Multiple expense entries.
- Automatic expense calculations.
- Remaining balance calculation.
- Budget warning when expenses exceed the budget.
- Clearly labelled browser console results.
- Mobile-friendly design.

## How to Run the Project

1. Open the project in a web browser.
2. Enter your monthly budget when prompted.
3. Enter the number of expenses.
4. Provide each expense name and amount.
5. View the calculated budget summary in the browser console.

## Author
Isaac Ladu James

## Project Purpose
This project demonstrates practical skills in HTML, CSS and JavaScript, including responsive web design, variables, user input, arrays, objects, functions, loops, conditional statements and mathematical calculations.
