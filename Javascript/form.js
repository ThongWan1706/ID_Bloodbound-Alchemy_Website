document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const comments = document.getElementById("comments").value;

      const selectedReasons = [];
      const checkboxes = document.querySelectorAll('input[name="reason"]:checked');
      checkboxes.forEach((checkbox) => {
        selectedReasons.push(checkbox.value);
      });

      console.log("Submission from:", name);
      console.log("Reasons:", selectedReasons);
      console.log("Comments:", comments);

      alert("Thank you, " + name + "! Your feedback regarding [" + selectedReasons.join(", ") + "] has been received.");

      window.location.href = "index.html";
    });
  }
});