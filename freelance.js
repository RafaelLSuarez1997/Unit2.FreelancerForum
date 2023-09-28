// Sample data for freelancers
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
    { name: "Carol", occupation: "Content Writer", price: 70 },
    { name: "John", occupation: "Hitman", price: 60 },
    { name: "Humphrey", occupation: "Professional Dog", price: 35 },
    { name: "Jessy", occupation: "Security Guard", price: 20 },
];

// Function to calculate the average price
function calculateAveragePrice(freelancers) {
    const totalPrices = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
    const averagePrice = totalPrices / freelancers.length;
    return averagePrice;
}

// Function to display freelancers with a delay
function displayFreelancersWithDelay() {
    const freelancerList = document.getElementById("freelancer-list");
    const averagePriceElement = document.querySelector(".smaller-text");

    let currentIndex = 0;
    let totalPrices = 0;

    function addNextFreelancer() {
        if (currentIndex < freelancers.length) {
            const freelancer = freelancers[currentIndex];
            const listItem = document.createElement("li");
            listItem.textContent = `${freelancer.name} - ${freelancer.occupation} (Starting Price: $${freelancer.price} hourly)`;
            freelancerList.appendChild(listItem);
            currentIndex++;
            totalPrices += freelancer.price;

            // Calculate the updated average with each new freelancer
            const updatedAverage = totalPrices / currentIndex;
            averagePriceElement.textContent = `Average starting price: $${updatedAverage.toFixed(2)}$ Hourly`;

            setTimeout(addNextFreelancer, 2000); // Display the next freelancer after 2 seconds
        }
    }

    // Start adding freelancers with a delay
    addNextFreelancer();
}

// Call the function to display freelancers with a delay
displayFreelancersWithDelay();
