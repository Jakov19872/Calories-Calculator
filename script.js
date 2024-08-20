function myFunction(event) {
    let weight = document.getElementById("wight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let intensity = document.getElementById("intensity").value;
    let goal = document.getElementById("goal").value;
    
    // Example calorie calculation logic
    let bmr;
    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    let calorieNeeds;
    switch (intensity) {
        case "sedentary":
            calorieNeeds = bmr * 1.2;
            break;
        case "light":
            calorieNeeds = bmr * 1.375;
            break;
        case "moderately":
            calorieNeeds = bmr * 1.55;
            break;
        case "very":
            calorieNeeds = bmr * 1.725;
            break;
        case "super":
            calorieNeeds = bmr * 1.9;
            break;
    }
    // Adjust for goal
    switch (goal) {
        case "loose":
            calorieNeeds -= 500;
            break;
        case "gain":
            calorieNeeds += 500;
            break;
    }
    alert(`You need approximately ${Math.round(calorieNeeds)} calories per day.`);
    // Display the result
}
