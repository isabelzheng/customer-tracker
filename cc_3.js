let customers = ["Chad", "Tanner", "Ryan"]; 

let order1 = {
    customerProfile: {name: customers[0], email: "Chad@vsc.com"}, 
    items: [
            {product: "Nike", price: 122}, 
            {product: "Converse", price: 60}, 
            {product: "ASICS", price: 150}
            ]
    }; 

let order2 = {
    customerProfile: {name: customers[1], email: "Tanner@vsc.com"}, 
    items: [
            {product: "Adidas", price: 100}, 
            {product: "Air Jordan", price: 115}, 
            {product: "Under Armor", price: 70}
            ]
    }; 

let order3 = {
    customerProfile: {name: customers[2], email: "Ryan@vsc.com"}, 
    items: [
            {product: "Puma", price: 90}, 
            {product: "Vans", price: 80}, 
            {product: "New Balance", price: 110}
            ]
    }; 

let newCustomer = "Parker"; 
customers.push(newCustomer); 
customers.shift(); 

console.log(customers[0]); 

   
