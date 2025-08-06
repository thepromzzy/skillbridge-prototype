// Simple fade-in on scroll effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

// Apply to all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Reveal testimonial cards with animation
const testimonialObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
  testimonialObserver.observe(card);
});

// Dark mode toggle with image icons
const toggle = document.createElement('button');
toggle.id = 'dark-mode-toggle';
toggle.title = 'Toggle Dark Mode';
toggle.style.position = 'fixed';
toggle.style.top = '10px';
toggle.style.right = '10px';
toggle.style.zIndex = '1000';
toggle.style.padding = '8px';
toggle.style.border = 'none';
toggle.style.borderRadius = '50%';
toggle.style.cursor = 'pointer';
toggle.style.background = '#fff';
toggle.style.display = 'flex';
toggle.style.alignItems = 'center';
toggle.style.justifyContent = 'center';
toggle.style.width = '48px';
toggle.style.height = '48px';
document.body.appendChild(toggle);

const iconImg = document.createElement('img');
iconImg.src = 'light-icon.png'; // Replace with your actual image path
iconImg.alt = 'Toggle Mode';
iconImg.style.width = '24px';
iconImg.style.height = '24px';
iconImg.style.objectFit = 'contain';
toggle.appendChild(iconImg);

function updateToggleButton() {
  const isDark = document.body.classList.contains('dark-mode');
  if (isDark) {
    toggle.style.background = '#fff';
    iconImg.src = 'images/dark-icon.png'; // Replace with your dark mode image
    toggle.title = 'Switch to Light Mode';
  } else {
    toggle.style.background = '#d63637';
    iconImg.src = 'images/light-icon.png'; // Replace with your light mode image
    toggle.title = 'Switch to Dark Mode';
  }
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateToggleButton();
});

updateToggleButton();

// Typing animation in hero section
const text = "Learn Tech Skills. Get Remote Jobs. Build Your Future.";
const typedText = document.querySelector(".hero p");
let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

typedText.textContent = "";
type();

// Handle join waitlist form submission
const form = document.querySelector(".cta form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = form.querySelector("input[type='email']").value.trim().toLowerCase();
    const joinedBefore = localStorage.getItem("joinedEmails");
    let joinedList = joinedBefore ? JSON.parse(joinedBefore) : [];

    const confirmation = document.createElement("p");
    confirmation.classList.add("confirmation-message");
    confirmation.style.marginTop = "1rem";
    confirmation.style.fontWeight = "bold";

    const existingMessage = form.querySelector(".confirmation-message");
    if (existingMessage) existingMessage.remove();

    if (joinedList.includes(email)) {
      confirmation.textContent = "⚠️ This email has already joined the SkillBridge waitlist.";
      confirmation.style.color = "blue";
    } else {
      joinedList.push(email);
      localStorage.setItem("joinedEmails", JSON.stringify(joinedList));

      const onboardingMessage = `Welcome to SkillBridge!\n\nThank you for joining our waitlist. You're now part of a vibrant community of learners exploring tech skills and global opportunities.\n\nYour journey starts now 🚀`;

      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=thepromzzy@gmail.com&su=Join%20Waitlist&body=${encodeURIComponent(onboardingMessage + '\n\nUser Email: ' + email)}`, '_blank');

      confirmation.innerHTML = " Thank you! Your email has been processed. Check your inbox.<br><strong>Welcome to SkillBridge!</strong> You're now part of a community learning tech and unlocking global opportunities.";
      confirmation.style.color = "white";
    }

    form.appendChild(confirmation);
  });
  // Scroll animation for .creator section
const creatorSection = document.querySelector('.creator');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      creatorSection.classList.add('show');
    }
  });
}, { threshold: 0.3 });

if (creatorSection) {
  observer.observe(creatorSection);
}

}

