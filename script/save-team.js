document.addEventListener("DOMContentLoaded", () => {
    var urlParams = new URLSearchParams(window.location.search);
    var isFromSaved = urlParams.get("saved");

    var btnSave = document.getElementById("save");
    var btnDelete = document.getElementById("delete");

    if (isFromSaved) {
        // Hide fab jika dimuat dari indexed db
        btnSave.style.display = 'none';
        btnDelete.style.display = 'block';
        // ambil artikel lalu tampilkan
        getSavedTeamById();
    } else {
        btnSave.style.display = 'block';
        btnDelete.style.display = 'none';
        var item = getTeamById();
    }
    save.onclick = () => {
        console.log("Tombol FAB di klik.");
        item.then((team) => {
            saveForLater(team);
        });
    };
});


const idTeam = new URLSearchParams(window.location.search).get("id");
delete.onclick = () => {
    console.log("Tombol hapus di klik");
    deleteTeam(parseInt(idTeam));
};


var elems = document.querySelectorAll('.fixed-action-btn');
M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
});