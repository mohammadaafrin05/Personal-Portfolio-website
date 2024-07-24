document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    console.log("Contact Form Submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
});

document.getElementById('projectInquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const projectType = document.getElementById('project-type').value;
    const budget = document.getElementById('budget').value;
    const timeline = document.getElementById('timeline').value;
    const goals = document.getElementById('goals').value;

    console.log("Project Inquiry Form Submitted");
    console.log("Project Type:", projectType);
    console.log("Budget:", budget);
    console.log("Timeline:", timeline);
    console.log("Goals:", goals);
});

document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    console.log("Resume download initiated.");
});
