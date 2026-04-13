function openModal() {
    document.getElementById("eventsModal").style.display = "block";
}

function closeModal() {
    document.getElementById("eventsModal").style.display = "none";
}

function goToEvents() {
    window.location.href="OurEvents.html";
}

window.onclick = function(event) {
    let modal = document.getElementById("eventsModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
window.addEventListener("load", function() {
    if (!sessionStorage.getItem("modalShown")) {
        setTimeout(() => {
            openModal();
            sessionStorage.setItem("modalShown", "true");
        }, 1000);
    }
});

function openSignup() {
    document.getElementById("signupModal").style.display = "block";
}

function closeSignup() {
    document.getElementById("signupModal").style.display = "none";
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields");
        return false;
    }

    document.getElementById("successMessage").innerText =
        "Thank you for signing up!";

    return false; 
}


