function joinGym(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const plan = document.getElementById("plan").value;

  document.getElementById("message").innerText =
    "Thank you " + name + "! You selected " + plan + " plan. We will contact you soon.";

  e.target.reset();
}
