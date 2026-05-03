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

  document.getElementById("message").innerText =
    "Thank you " + name + "! Your enquiry for the " + plan + " plan has been received. We will contact you soon.";

  event.target.reset();
}
