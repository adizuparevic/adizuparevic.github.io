document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      Swal.fire({
        title: "Success! The form has been submitted.",
        icon: "success",
        draggable: true
      });
    }
    else {

      Swal.fire({
        title: "Please check all fields",
        icon: "error",
        draggable: true
      });
    }


  });
});
