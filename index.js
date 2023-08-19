var form = document.getElementById("my-form");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      status.classList.add("recive");
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          status.classList.add("error");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
          status.classList.add("error");
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    status.classList.add("error");
  });
}
form.addEventListener("submit", handleSubmit);
const navLinks = document.querySelectorAll('nav a');  
navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
}
const button=document.querySelectorAll(".Contect_me_button");
button.forEach(btn=> {
    btn.addEventListener("click",()=>{
        const targetArea = document.getElementById("Contact")
        window.scrollTo({
            top: targetArea.offsetTop,
            behavior: "smooth"
    });
})
})