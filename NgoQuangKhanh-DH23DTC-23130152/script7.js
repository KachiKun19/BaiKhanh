let isLoggedIn = false;

// Show login section by default
showSection('loginSection');

// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate login process
    isLoggedIn = true;
    alert('You are now logged in.');
    showSection('home');
});

// Register button functionality (simulate registration)
document.getElementById('registerBtn').addEventListener('click', function() {
    alert('Registration functionality is not implemented yet.');
});

// Log Out functionality
document.getElementById('logOutBtn').addEventListener('click', function() {
    isLoggedIn = false;
    alert('You have been logged out.');
    showSection('loginSection');
});

// Form submission handling
document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const role = document.getElementById('role').value;
    const education = document.getElementById('education').value;
    const careerGoals = document.getElementById('careerGoals').value;
    const skills = document.getElementById('skills').value;
    const interests = document.getElementById('interests').value;
    const experience = document.getElementById('experience').value;
    const profilePicture = document.getElementById('preview').src;

    let previewContent = `
        <img src="${profilePicture}" alt="Profile Picture" style="max-width: 100px;"/>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Career Goals:</strong> ${careerGoals}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Interests:</strong> ${interests}</p>
        <p><strong>Work Experience:</strong> ${experience}</p>
    `;

    document.getElementById('previewContent').innerHTML = previewContent;
    showSection('cvPreview');

    document.getElementById('editBtn').style.display = 'inline-block';
    document.getElementById('deleteBtn').style.display = 'inline-block';
});

// Show section helper function
function showSection(sectionId) {
    const sections = ['loginSection', 'home', 'cvPreview', 'about', 'labs'];
    sections.forEach(section => {
        document.getElementById(section).style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Navigation links
document.getElementById('homeLink').addEventListener('click', function() {
    if (isLoggedIn) {
        showSection('home');
    } else {
        alert('Please log in first.');
    }
});
document.getElementById('aboutLink').addEventListener('click', function() {
    showSection('about');
});
document.getElementById('labsLink').addEventListener('click', function() {
    showSection('labs');
});

// Image preview functionality
document.getElementById('profilePicture').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgPreview = document.getElementById('preview');
            imgPreview.src = e.target.result;
            imgPreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Cancel button functionality
document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('cvForm').reset();
    document.getElementById('preview').style.display = 'none';
    document.getElementById('preview').src = '';

    showSection('home');
});
