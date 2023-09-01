const sidebar = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const sideBtn = document.querySelector(".sidbar-slider");


hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("is-active");
});

sideBtn.addEventListener("click", () => {
  sidebar.classList.toggle("is-active");
});

//dropdown editing
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].avtive").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('acitve')        
    })
})

const dropdown = document.querySelector(".dropdown");

document.addEventListener("click", (event) => {
  if (event.target !== dropdown && !dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
  }
})


//dropdown editing ends here

 
  let editor;

  window.onload = function() {
      editor = ace.edit("editor");
      editor.setTheme("ace/theme/monokai");
      editor.session.setMode("ace/mode/c_cpp");
  }
  
  function changeLanguage() {
  
      let language = $("#languages").val();
  
      if(language == 'c' || language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
      else if(language == 'php')editor.session.setMode("ace/mode/php");
      else if(language == 'python')editor.session.setMode("ace/mode/python");
      else if(language == 'node')editor.session.setMode("ace/mode/javascript");
      else if(language == 'html')editor.session.setMode("ace/mode/html");
      else if(language == 'css')editor.session.setMode("ace/mode/css");
      else if(language == 'django')editor.session.setMode("ace/mode/django");
      else if(language == 'flutter')editor.session.setMode("ace/mode/flutter");

  }
  
  function executeCode() {
  
      $.ajax({
  
          url: "/ide/app/compiler.php",
  
          method: "POST",
  
          data: {
              language: $("#languages").val(),
              code: editor.getSession().getValue()
          },
  
          success: function(response) {
              $(".output").text(response)
          }
      })
  }