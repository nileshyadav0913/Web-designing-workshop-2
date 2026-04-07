function calculateSI() {
    // Get values from input fields
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;

    // Check if inputs are empty
    if (principal === "" || rate === "" || time === "") {
        document.getElementById("result").innerText = "Please fill all fields";
        return;
    }

    // Convert values to numbers
    principal = parseFloat(principal);
    rate = parseFloat(rate);
    time = parseFloat(time);

    // Calculate Simple Interest
    let simpleInterest = (principal * rate * time) / 100;

    // Display result
    document.getElementById("result").innerText =
        "Simple Interest = " + simpleInterest;
}