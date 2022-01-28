function addUser() { Player1_name = document.getElementById("Player1_name").value;
 Player2_name = document.getElementById("Player2_name").value;
 localStorage.setItem("Player1_name", Player1_name);
  localStorage.setItem("Player2_name", Player2_name);
 window.location = "game_page.html"; }
 