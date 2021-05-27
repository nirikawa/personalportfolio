if(screen.width > 768){
  const panels = document.querySelectorAll('.panel');

  panels.forEach((panel) => {
      panel.addEventListener('click', () => {
          removeActiveClasses();
          panel.classList.add('active');
      })
  })
}

function removeActiveClasses() {
    document.querySelector('.active').classList.remove("active");
}

// Night Mode START
let checkBox = document.getElementById("night-toggle");
checkBox.addEventListener('change', event => {
  console.log("TOGGLE");
  if(checkBox.checked == true){
    // night mode is on
    // add night class
    document.querySelector("body").classList.add('night');
  }
  else {
    document.querySelector("body").classList.remove('night');
  }
});
// Night Mode END