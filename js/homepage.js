const sidebar = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const sideBtn = document.querySelector(".sidbar-slider");


hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("is-active");
});

sideBtn.addEventListener("click", () => {
  sidebar.classList.toggle("is-active");
});



 
  let editor;

  window.onload = function() {
      editor = ace.edit("editor");
      editor.setTheme("ace/theme/cobalt");
      editor.session.setMode("ace/mode/c_cpp");
  }
  
  function changeLanguage() {
  
      let language = $("#languages").val();
  
      if(language == 'c' || language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
      else if(language == 'php')editor.session.setMode("ace/mode/php");
      else if(language == 'python')editor.session.setMode("ace/mode/python");
      else if(language == 'node')editor.session.setMode("ace/mode/javascript");
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