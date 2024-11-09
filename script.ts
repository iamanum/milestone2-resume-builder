document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name-input") as HTMLInputElement;
    const nameDisplay = document.getElementById("name");

    const emailInput = document.getElementById("email-input") as HTMLInputElement;
    const emailDisplay = document.getElementById("email");

    if (nameInput && nameDisplay) {
        nameInput.addEventListener("input", () => {
            nameDisplay.textContent = nameInput.value;
        });
    }

    if (emailInput && emailDisplay) {
        emailInput.addEventListener("input", () => {
            emailDisplay.textContent = emailInput.value;
        });
    }

    // Repeat this pattern for other fields like phone, location, LinkedIn, etc.
});
