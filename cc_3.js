//Task 1: Create a Function to Calculate Average Sales
function calculateAverageSales(sales) {
    if (sales.length === 0) { return 0 };
    let sum = 0;
    for (let i = 0; i < sales.length; i++) {sum += sales[i]};
    return sum / sales.length};

let sales = [10000, 15000, 25000];
let averageSales = calculateAverageSales(sales);
console.log("Average sales: $" + averageSales);

//Task 2: Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) {return "Excellent";} 
        else if (averageSales >= 7000) {return "Good";} 
        else if (averageSales >= 4000) {return "Satisfactory"; } 
        else {return "Needs Improvement"; }
}

//Task 3: Create a Function to Identify Top and Bottom Performers
function findTopAndBottomPerformers(salespeople) {
    let topPerformer = { name: '', totalSales: 0 };
    let bottomPerformer = { name: '', totalSales: Infinity };
    
    for (let i = 0; i < salespeople.length; i++) {
    let person = salespeople[i];
    let totalSales = 0;
    
    for (let j = 0; j < person.sales.length; j++) {
    totalSales += person.sales[j]; }

    if (totalSales > topPerformer.totalSales) {topPerformer = { name: person.name, totalSales: totalSales };}
    if (totalSales < bottomPerformer.totalSales) {bottomPerformer = { name: person.name, totalSales: totalSales };}
    }
}

//Task 4: Combine Functions to Generate a Performance Report

