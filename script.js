function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function joinGym(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const plan = document.getElementById("plan").value;

  if (!name || !phone || !plan) {
    document.getElementById("message").innerText = "Please fill all details.";
    return;
  }

  const whatsappMessage =
    "New Gym Enquiry%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "Selected Plan: " + encodeURIComponent(plan) + "%0A" +
    "Gym: Master Gym";

  const whatsappUrl = "https://wa.me/919491347496?text=" + whatsappMessage;

  document.getElementById("message").innerText =
    "Opening WhatsApp with your enquiry...";

  window.open(whatsappUrl, "_blank");

  event.target.reset();
}
