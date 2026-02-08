// Step 2
let customers = [
    {name: "Chad", email: "Chad@vsc.com", purchases: ["Nike", "Air Jordans", "ASICS"]}, 
    {name: "Tanner", email: "Tanner@vsc.com", purchases: ["Adidas", "Puma", "Under Armor"]}, 
    {name: "Ryan", email: "Ryan@vsc.com", purchases: ["Converse", "Vans", "New Balance"]}
]; 


// Step 3 
let newCustomer = [
    {name: "Parker", email: "Parker@vsc.com", purchases: ["Adidas", "Nike"]}, 
]; 
customers.push(newCustomer[0]); 

customers.shift(); 


// Step 4
customers[0].email= "Tanner4@vsc.com";

let newPurchases = ["On Cloud"]; 

customers[1].purchases.push(newPurchases[0]); 


// Step 5
customers.forEach((customers) => {console.log(`Customer Name: ${customers.name} 
Customer Email: ${customers.email}
Total Purchases: ${customers.purchases.length}
--------------------------------------------------`)});
 




   
