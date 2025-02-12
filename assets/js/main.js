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

   

    
    // Contact form submission handling
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

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

        // Append the message after the form if not already present
        let form = document.getElementById("contactForm");
        if (!document.getElementById("successMessage")) {
            form.appendChild(successMessage);
        }

        // Remove the message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);

        // Reset form fields
        this.reset();
    });
});





let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}
