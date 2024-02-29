

let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener('click', function() {
    let rating = this.value;
    if (rating <= 1) 
      showValue.innerHTML = "OUCH 🥲";
    else if (rating <= 2)
      showValue.innerHTML = "OKAY 😒";
    else if (rating <= 3)
      showValue.innerHTML = "GOOD 🙂";
    else if (rating <= 4)
      showValue.innerHTML = "GREAT 😁";
    else
      showValue.innerHTML = "THANKYOU 😍";
   
  });
}