document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var isFromSaved = urlParams.get("saved");

    var btnSave = document.getElementById("save");

    if (isFromSaved) {
        // Hide fab jika dimuat dari indexed db
        btnSave.style.display = 'none';
        // ambil artikel lalu tampilkan
        getSavedTeamById();
    } else {
        var item = getTeamById();
    }
    save.onclick = function() {
        console.log("Tombol FAB di klik.");
        item.then(function(team) {
            saveForLater(team);
        });
    };
});