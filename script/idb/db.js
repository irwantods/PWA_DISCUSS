var dbPromised = idb.open("team-fav", 1, function(upgradeDb) {
    var teamsObjectStore = upgradeDb.createObjectStore("teams", {
        keyPath: "ID"
    });
    teamsObjectStore.createIndex("post_name", "post_name", { unique: false });
});

function saveForLater(team) {
    dbPromised
        .then(function(db) {
            var tx = db.transaction("teams", "readwrite");
            var store = tx.objectStore("teams");
            console.log(team);
            store.add(team.result);
            return tx.complete;
        })
        .then(function() {
            console.log("Team berhasil di simpan.");
        });
}