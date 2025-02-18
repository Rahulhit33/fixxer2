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

