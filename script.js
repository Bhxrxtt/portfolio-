// ===== Smooth Scroll Navigation =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ===== Scroll to Top Button =====
const scrollToTopBtn = document.getElementById("scrollToTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show")
  } else {
    scrollToTopBtn.classList.remove("show")
  }
})

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// ===== Scroll Reveal Animation =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all sections and cards
document.querySelectorAll("section, .project-card, .timeline-item").forEach((el) => {
  observer.observe(el)
})

// ===== Contact Form Handling =====
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const name = contactForm.querySelector('input[type="text"]').value
    const email = contactForm.querySelector('input[type="email"]').value
    const message = contactForm.querySelector("textarea").value

    // Create mailto link
    const mailtoLink = `mailto:princerathore724@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form
    contactForm.reset()

    // Show success message
    alert("Thank you for your message! Opening your email client...")
  })
}

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"
    hamburger.classList.toggle("active")
  })
}

// ===== Navbar Background on Scroll =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.pageYOffset > 50) {
    navbar.style.borderBottomColor = "rgba(59, 130, 246, 0.2)"
  } else {
    navbar.style.borderBottomColor = "var(--border-color)"
  }
})

// ===== Typing Animation =====
const typingText = document.querySelector(".typing-text")
if (typingText) {
  const text = typingText.textContent
  typingText.textContent = ""
  let index = 0

  const typeCharacter = () => {
    if (index < text.length) {
      typingText.textContent += text.charAt(index)
      index++
      setTimeout(typeCharacter, 50)
    }
  }

  // Start typing after page load
  window.addEventListener("load", () => {
    setTimeout(typeCharacter, 500)
  })
}

// ===== Parallax Scroll Effect =====
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")

  if (hero) {
    hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`
  }
})

// ===== Add Fade-in to Elements on Load =====
window.addEventListener("load", () => {
  document.querySelectorAll(".hero-content").forEach((el) => {
    el.classList.add("fade-in")
  })
})

console.log("[v0] Portfolio website loaded successfully")
