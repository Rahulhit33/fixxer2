document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll("nav a.nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

   

    
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        sendMail(); // Call the sendMail function
    
        // Create success message element
        let successMessage = document.createElement("div");
        successMessage.textContent = "Message sent successfully!";
        successMessage.style.color = "#fff";
        successMessage.style.backgroundColor = "#28a745";
        successMessage.style.padding = "10px";
        successMessage.style.marginTop = "10px";
        successMessage.style.textAlign = "center";
        successMessage.style.borderRadius = "5px";
        successMessage.id = "successMessage";
    
        let form = document.getElementById("contactForm");
        if (!document.getElementById("successMessage")) {
            form.appendChild(successMessage);
        }
    
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
    
    function sendMail() {
        var params = {
            user_name: document.getElementById("name").value,
            user_email: document.getElementById("email").value,
            user_message: document.getElementById("message").value,
        };
    
        const serviceID = "service_bh44mxy";
        const templateID = "template_2meun9p";
    
        emailjs.send(serviceID, templateID, params)
            .then(res => {
                console.log(res);
                // alert("Your message was sent successfully!");
                document.getElementById("contactForm").reset();
            })
            .catch(err => console.log("Email sending failed:", err));
    }
    
    

});

// ---------------brands--------------------
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


let popup = document.getElementById("popup");



//-------------------- Database ------------------


const firebaseConfig = {
    apiKey: "AIzaSyA7LWw7waC8HMtFOi4bZNBsn1__ti6Alsw",
    authDomain: "fixxer2.firebaseapp.com",
    databaseURL: "https://fixxer2-default-rtdb.firebaseio.com",
    projectId: "fixxer2",
    storageBucket: "fixxer2.firebasestorage.app",
    messagingSenderId: "604968278767",
    appId: "1:604968278767:web:76d63b77d7f1cd592bd91a"
};
firebase.initializeApp(firebaseConfig);

// Reference your database
var appointmentFormDB = firebase.database().ref('appointmentForm');
document.getElementById('repairForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var applianceType = getElementVal('applianceType');
    var issueDescription = getElementVal('issueDescription');
    var appointmentDate = getElementVal('appointmentDate');
    var preferredTime = getElementVal('preferredTime');
    var name = getElementVal('name');
    var email = getElementVal('email');
    var phone = getElementVal('phone');

    // Validation: Check if all fields are filled
    if (!applianceType || !issueDescription || !appointmentDate || !preferredTime || !name || !email || !phone) {
        alert('Please fill in all the fields before submitting.');
        return;
    }

    // Save data to Firebase
    saveData(applianceType, issueDescription, appointmentDate, preferredTime, name, email, phone);

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Reset the form
    document.getElementById('repairForm').reset();

    // Hide the success message after 3 seconds
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
}

const saveData = (applianceType, issueDescription, appointmentDate, preferredTime, name, email, phone) => {
    var newAppointmentForm = appointmentFormDB.push();
    newAppointmentForm.set({
        applianceType: applianceType,
        issueDescription: issueDescription,
        appointmentDate: appointmentDate,
        preferredTime: preferredTime,
        name: name,
        email: email,
        phone: phone
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
