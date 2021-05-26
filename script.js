const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    document.querySelector('.active').classList.remove("active");
}

// Night Mode START
let checkBox = document.getElementById("night-toggle");
checkBox.addEventListener('change', event => {
  if(checkBox.checked == true){
    // night mode is on
    // add night class
    document.querySelectorAll(".canEdit").forEach(item => {
      item.classList.remove('disabled');
    });
  }
  else {
    document.querySelectorAll(".canEdit").forEach(item => {
      item.classList.add('disabled');
    });
  }
});
// Night Mode END