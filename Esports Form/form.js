function validateForm() {
    // Get references to form elements
    const username = document.getElementById("Discord username");
    const gamePlayed = document.getElementById("Game played");
    const playerId = document.getElementById("player id");
    const birthdate = document.getElementById("Birth date");
    const phone = document.getElementById("Tel No");
    const playerType = document.querySelector('input[name="Player type"]:checked');
    const region = document.getElementById("Region");
    const email = document.getElementById("Email");
    const photo = document.getElementById("photo chosen");
    const description = document.getElementById("Description for team");

    // Error messages
    const errorMessage = {
        username: "Please enter a valid Discord username (6-20 characters).",
        gamePlayed: "Please enter the game you're playing (minimum 2 characters).",
        playerId: "Please enter a valid player ID (8-14 digits).",
        birthdate: "Please select a valid birth date.",
        phone: "Please enter a valid phone number (10 digits).",
        playerType: "Please select a player type.",
        email: "Please enter a valid email address (4-30 characters).",
        photo: "Please select an image file (PNG, JPG, or JPEG).",
        description: "Please provide a description for your team.",
    };
    clearErrorMessages();
    // Validation logic
    let isValid = true;
    // Username
    if (!username.value.trim() || username.value.length < 6 || username.value.length > 20) {
        displayErrorMessage(username, errorMessage.username);
        isValid = false;
    }
    // Game Played
    if (!gamePlayed.value.trim() || gamePlayed.value.length < 2) {
        displayErrorMessage(gamePlayed, errorMessage.gamePlayed);
        isValid = false;
    }
    // Player ID
    if (isNaN(playerId.value) || playerId.value.length < 8 || playerId.value.length > 14) {
        displayErrorMessage(playerId, errorMessage.playerId);
        isValid = false;
    }
    // Birthdate
    if (!birthdate.value) {
        displayErrorMessage(birthdate, errorMessage.birthdate);
        isValid = false;
    }
    // Phone Number
    if (isNaN(phone.value) || phone.value.length !== 10) {
        displayErrorMessage(phone, errorMessage.phone);
        isValid = false;
    }
    // Player Type
    if (!playerType) {
        displayErrorMessage(playerType, errorMessage.playerType);
        isValid = false;
    }
    // Email
    if (!email.value.trim() || email.value.length < 4 || email.value.length > 30 || !validateEmail(email.value)) {
        displayErrorMessage(email, errorMessage.email);
        isValid = false;
    }
    // Photo
    if (photo.files.length === 0) {
        displayErrorMessage(photo, errorMessage.photo);
        isValid = false;
    } else if (!/\.(png|jpg|jpeg)$/.test(photo.files[0].name)) {
        displayErrorMessage(photo, "Please select an image file (PNG, JPG, or JPEG).");
        isValid = false;
    }
    // Description
    if (!description.value.trim()) {
        displayErrorMessage(description, errorMessage.description);
        isValid = false;
    }
    // Handle form submission
    if (isValid) {
        alert("Form submitted successfully!");
    } else {
        event.preventDefault();
        username.focus();
    }
    return isValid;
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}