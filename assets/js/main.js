// Save as assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // set year
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  
    // nav toggle for small screens
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    if (navToggle && nav) {
      navToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
        nav.style.flexDirection = 'column';
      });
    }
  
    // Auth page tabs
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const formLogin = document.getElementById('login-form');
    const formRegister = document.getElementById('register-form');
    if (tabLogin && tabRegister && formLogin && formRegister) {
      tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        formLogin.classList.remove('hidden');
        formRegister.classList.add('hidden');
      });
      tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        formRegister.classList.remove('hidden');
        formLogin.classList.add('hidden');
      });
  
      // Login form submit (demo only)
      formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = formLogin.querySelector('[name="identifier"]').value.trim();
        const pw = formLogin.querySelector('[name="password"]').value;
        if (!id || !pw) return alert('Please enter email/phone and password.');
        alert('Login simulated — integrate real auth when ready.');
        formLogin.reset();
      });
  
      // Register form validation
      formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        const pw = formRegister.querySelector('[name="password"]').value;
        const confirm = formRegister.querySelector('[name="confirm"]').value;
        if (pw !== confirm) return alert('Passwords do not match.');
        alert('Registration simulated — integrate backend when ready.');
        formRegister.reset();
        tabLogin.click();
      });
    }
  
    // Contact form (demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="email"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();
        if (!name || !email || !message) return alert('Please fill name, email and message.');
        // Simulate sending - you should replace with AJAX to server or form backend
        alert('Thanks, ' + name + '! Your message was received (simulated). I will contact you soon.');
        contactForm.reset();
      });
    }
  });
  
//Register(AJAX)
  fetch("backend/register.php", {
    method: "POST",
    body: new FormData(document.getElementById("register-form"))
  })
  .then(res => res.text())
  .then(data => {
    if (data === "success") alert("Registered successfully");
  });
  
  //Login
  
  fetch("backend/login.php", {
    method: "POST",
    body: new FormData(document.getElementById("login-form"))
  })
  .then(res => res.text())
  .then(data => {
    if (data === "success") {
      window.location.href = "index.html";
    } else {
      alert("Login failed");
    }
  });
  
  







  function sendSMS() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var fullMessage =
        "Full Name: " + name +
        "\nEmail: " + email +
        "\nPhone: " + phone +
        "\nMessage: " + message;

    var smsLink = "sms:+22774304879?body=" + encodeURIComponent(fullMessage);

    window.location.href = smsLink;
}
