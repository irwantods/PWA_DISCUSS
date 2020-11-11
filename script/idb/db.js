var dbPromised = idb.open("teamfav", 1, function(upgradeDb) {
    var teamsObjectStore = upgradeDb.createObjectStore("teams", {
        keyPath: "id"
    });
    teamsObjectStore.createIndex("team_name", "team_name", { unique: false });
});

function saveForLater(team) {
    dbPromised
        .then(function(db) {
            var tx = db.transaction("teams", "readwrite");
            tx.objectStore("teams").put(team);
            console.log(team);
            return tx.complete;
        })
        .then(function() {
            console.log("Team berhasil di simpan.");
        });
}

function getAll() {
    return new Promise(function(resolve, reject) {
        dbPromised
            .then(function(db) {
                var tx = db.transaction("teams", "readonly");
                var store = tx.objectStore("teams");
                return store.getAll();
            })
            .then(function(teams) {
                resolve(teams);
            });
    });
}