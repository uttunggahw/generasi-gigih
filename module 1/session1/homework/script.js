const form = document.getElementById("form-create");
const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
  console.log(formData);
  alert("Nice");
};
form.addEventListener("submit", handleSubmit);