// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Close mobile menu if open
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

function updateHeaderBackground() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', updateHeaderBackground);
updateHeaderBackground(); // Initialize on load

// Toast notification function
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.add('visible');
    
    // Hide toast after 5 seconds
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 5000);
  }
};

// Get the contact form element
const contactForm = document.getElementById('contact-form');

// Add an event listener to the form submission
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get the form data
  const formData = new FormData(contactForm);
  console.log(formData);
  
  // Send the form data to the server
  fetch(contactForm.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Show a toast notification
    showToast('Message sent successfully!');
    
    // Show an alert message
    alert('Your message has been sent successfully!');
    
    // Reset the form fields
    contactForm.reset();
  })
  .catch(error => {
    console.error(error);
    showToast('Error sending message!');
    alert('Error sending message!');
  });
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();