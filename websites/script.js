// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function openModal(modalId) {
    document.querySelector(modalId).style.display = "block";
    document.body.classList.add('blur'); // Add blur class
}

function closeModal(modalId) {
    document.querySelector(modalId).style.display = "none";
    document.body.classList.remove('blur'); // Remove blur class
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id); // Close the modal when clicking outside
        }
    });
}

function openModal(modalId) {
    document.querySelector(modalId).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeModal(modalId) {
    if (modalId) {
        document.querySelector(modalId).style.display = 'none';
    }
    document.getElementById('overlay').style.display = 'none';
}

// Add event listeners to the close buttons
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function() {
        closeModal(`#${this.parentElement.id}`);
    });
});

// Close modal when clicking the overlay
document.getElementById('overlay').addEventListener('click', function() {
    closeModal();
});



document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove 'selected' class from all links
            navLinks.forEach(nav => nav.classList.remove("selected"));
            // Add 'selected' class to the clicked link
            this.classList.add("selected");
        });
    });
});
