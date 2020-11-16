document.addEventListener("DOMContentLoaded", () => {
    var urlParams = new URLSearchParams(window.location.search);
    var isFromSaved = urlParams.get("saved");

    var btnSave = document.getElementById("save");
    var btnDelete = document.getElementById("remove");

    if (isFromSaved) {
        // Hide fab jika dimuat dari indexed db
        btnSave.style.display = 'none';
        btnDelete.style.display = 'block';
        // ambil artikel lalu tampilkan
        getSavedTeamById();
    } else {
        btnSave.style.display = 'block';
        btnDelete.style.display = 'none';
    }
    var item = getTeamById();
    save.onclick = () => {
        console.log("Tombol FAB di klik.");
        item.then((team) => {
            saveForLater(team);
        })
        btnSave.style.display = 'none';
        btnDelete.style.display = 'block';
    };
    var idTeam = urlParams.get("id");
    remove.onclick = () => {
        console.log("Tombol hapus di klik");
        item.then((idTeam) => {
            deleteTeam(idTeam);
        });
        window.location.href = '/index.html#saved'
        getSavedTeams();
    };
});