document.addEventListener("DOMContentLoaded", function() {
    var item = getTeamById();
    var save = document.getElementById("save");
    save.onclick = function() {
        console.log("Tombol FAB di klik.");
        item.then(function(team) {
            saveForLater(team);
        });
    }
});