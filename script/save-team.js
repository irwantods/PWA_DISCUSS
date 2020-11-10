document.addEventListener("DOMContentLoaded", function() {
    getTeamById();
    var save = document.getElementById("save");
    save.onclick = function() {
        console.log("Tombol FAB di klik.");
    }
});