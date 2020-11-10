function getArticleById() {
    // Ambil nilai query parameter (?id=)
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");

    if ("caches" in window) {
        caches.match(base_url + "article/" + idParam).then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var articleHTML = `
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="${data.result.cover}" />
                </div>
                <div class="card-content">
                  <span class="card-title">${data.result.post_title}</span>
                  ${snarkdown(data.result.post_content)}
                </div>
              </div>
            `;
                    // Sisipkan komponen card ke dalam elemen dengan id #content
                    document.getElementById("body-content").innerHTML = articleHTML;
                });
            }
        });
    }

    fetch(base_url + "article/" + idParam)
        .then(status)
        .then(json)
        .then(function(data) {
            // Objek JavaScript dari response.json() masuk lewat variabel data.
            console.log(data);
            // Menyusun komponen card artikel secara dinamis
            var articleHTML = `
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="${data.result.cover}" />
              </div>
              <div class="card-content">
                <span class="card-title">${data.result.post_title}</span>
                ${snarkdown(data.result.post_content)}
              </div>
            </div>
          `;
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("body-content").innerHTML = articleHTML;
        });
}