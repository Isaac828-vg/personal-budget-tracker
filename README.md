
# SpendWise - Personal Budget Tracker

## Project Overview

SpendWise is a personal finance dashboard developed to help users manage their monthly budgets and track daily expenses. The application allows users to set a monthly budget, record expenses, view spending totals, monitor their remaining balance, and delete recorded transactions.

This project was developed as part of the Power Learn Project (PLP) Web Development Fundamentals course.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Week 6 Improvements: Making SpendWise Interactive

During Week 6, I improved SpendWise by adding JavaScript functionality that connects user actions, application logic, data, and the webpage.

The improvements include:

1. Monthly budget input and validation.
2. Adding and storing multiple expense records.
3. Calculating total expenses automatically.
4. Calculating the remaining budget.
5. Displaying expenses directly on the webpage.
6. Deleting expenses and updating calculations.
7. Showing a warning when spending exceeds the monthly budget.

## JavaScript Concepts Applied

### 1. Conditionals

I used `if`, `else if`, and `else` statements to validate user input and evaluate different budgeting situations.

The application displays a warning when total expenses exceed the monthly budget. It also displays a positive message when spending remains within the budget.

### 2. Arrays

I used an array called `expenses` to store multiple expense records.

Each expense contains:
- Expense name
- Category
- Amount

The `push()` method adds new expenses, while the `splice()` method removes deleted expenses.

### 3. Loops

I used `for...of` to calculate total expenses and a `for` loop to display individual expense records on the webpage.

### 4. DOM Manipulation

I used JavaScript DOM methods such as:
- `document.getElementById()`
- `document.createElement()`
- `appendChild()`
- `textContent`
- `innerHTML`

These methods allow the application to update dashboard figures and display expense records without reloading the webpage.

### 5. Event Listeners

I used `addEventListener()` to respond to user actions.

The application listens for:
- Monthly budget form submissions.
- New expense form submissions.
- Delete button clicks.

These events make the dashboard interactive.

## Testing and Results

I tested the application using a monthly budget of KES 50,000.

Example test results:

| Transaction | Amount |
|---|---:|
| Food | KES 8,500 |
| Transport | KES 4,000 |
| Total Expenses | KES 12,500 |
| Remaining Balance | KES 37,500 |

I also tested deleting an expense and confirmed that the dashboard recalculated the totals correctly.

To test the overspending warning, I added rent of KES 60,000. Total expenses became KES 64,000, leaving a balance of -KES 14,000. The application correctly displayed an overspending warning.

## Challenges and Solutions

One challenge was connecting JavaScript to the HTML elements. I solved this by using the correct element IDs and DOM methods.

Another challenge was ensuring that the dashboard recalculated totals after adding or deleting expenses. I addressed this by creating an `updateDashboard()` function that refreshes the displayed information.

I also encountered a duplicate HTML document in my index file. I identified and removed the extra document so that only one dashboard appeared.

## Project Files

- `index.html` - Defines the structure of the dashboard.
- `style.css` - Controls the appearance and responsive layout.
- `script.js` - Contains the application logic and interactive features.
- `README.md` - Provides project documentation.

## Conclusion

This week's work helped me understand how JavaScript makes a website interactive. I learned how to use conditionals, arrays, loops, DOM manipulation, and event listeners in a practical project.

I successfully transformed SpendWise from a static dashboard into an interactive personal budget tracker.


## GitHub Repository

The source code for this project is available on GitHub:

https://github.com/Isaac828-vg/personal-budget-tracker

## Live Website

SpendWise is deployed and publicly accessible through Netlify:

https://spendwise-personal-budget-tracker.netlify.app

## Deployment Process Summary

I deployed SpendWise using Netlify by connecting my GitHub repository.

The deployment configuration was:

- GitHub repository: `personal-budget-tracker`
- Production branch: `main`
- Build command: None (static website)
- Publish directory: `.`
- Netlify project name: `spendwise-personal-budget-tracker`

Netlify hosts the HTML, CSS, and JavaScript files and makes the website accessible online.

## Continuous Deployment Testing

I tested continuous deployment by updating the website footer to include the text "Deployed with Netlify".

After committing and pushing the change to GitHub, Netlify automatically detected the update and deployed the new version.

I refreshed the live website and confirmed that the updated footer appeared successfully.

This confirmed that GitHub and Netlify were connected correctly and that future changes pushed to the main branch can be deployed automatically.

## Deployment Challenges

One challenge was that Netlify initially could not access my GitHub repository. I resolved this by configuring Netlify's access permissions through GitHub.

I also experienced a temporary DNS connection problem when pushing updates from Termux. I resolved it by using a temporary Git connection configuration to reach GitHub successfully.

## Lessons Learned

Through this deployment exercise, I learned how to:

1. Host a static website using Netlify.
2. Connect a GitHub repository to Netlify.
3. Configure a production branch and publish directory.
4. Use continuous deployment to publish website updates automatically.
5. Test a live website after deployment.
6. Troubleshoot deployment and network connection problems.

## Final Conclusion

I successfully developed, tested, and deployed SpendWise as a personal budget tracking application.

This project improved my practical skills in HTML, CSS, JavaScript, Git, GitHub, and Netlify. It also helped me understand how developers publish websites and maintain them through continuous deployment.
