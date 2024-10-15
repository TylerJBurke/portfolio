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




document.querySelectorAll('.portfolio-item').forEach(item => {
    const description = item.querySelector('.description');
    const showMoreButton = item.querySelector('.show-more');

    // Check if the description is truncated
    if (description.scrollHeight > description.clientHeight) {
        showMoreButton.style.display = 'block'; // Show the button if text is truncated
    }

    showMoreButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up
        description.classList.toggle('expanded'); // Toggle expanded class
        if (description.classList.contains('expanded')) {
            description.style.display = 'block'; // Show full text
            showMoreButton.textContent = 'Show Less'; // Update button text
        } else {
            description.style.display = '-webkit-box'; // Reapply truncation
            showMoreButton.textContent = 'Show More'; // Update button text
        }
    });
});

