document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let orderDetails = document.getElementById('orderDetails').value.trim();

    if (name === "" || email === "" || phone === "" || orderDetails === "") {
        alert("All fields are required!");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
    } else {
        alert("Order placed successfully!");
        document.getElementById('orderForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
}
