function joinGym(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const plan = document.getElementById("plan").value;

  document.getElementById("message").innerText =
    "Thank you " + name + "! Your enquiry for the " + plan + " plan has been received. We will contact you soon.";

  event.target.reset();
}
