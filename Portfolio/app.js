var typed = new Typed('#element', {
    strings: ['Frontend Developer ',' Backend Developer', 'Web Designer'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 50,
  });

let links = document.getElementsByClassName('nav-link');
links[0].style.color = "#dfc8e4";


for(let link of links){
  link.addEventListener("click", () => {
    for(let li of links) {
      li.style.color = "#fff";
    }
    link.style.color = "#dfc8e4";
  })
}