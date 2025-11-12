        // Form submission handlers (demo)
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset();
        });

        document.getElementById('newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing! Check your email for confirmation.');
            e.target.reset();
        });