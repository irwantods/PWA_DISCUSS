function getArticles() {
    if ('caches' in window) {
        caches.match(base_url + "articles").then(function(response) {
            if (response) {
                response.json().then(function(data) {
                    var articlesHTML = "";
                    data.result.forEach(function(article) {
                        articlesHTML += `
                    <div class="card">
                      <a href="./article.html?id=${article.id}">
                        <div class="card-image waves-effect waves-block waves-light">
                          <img src="${article.thumbnail}" />
                        </div>
                      </a>
                      <div class="card-content">
                        <span class="card-title truncate">${article.title}</span>
                        <p>${article.description}</p>
                      </div>
                    </div>
                  `;
                    });
                    // Sisipkan komponen card ke dalam elemen dengan id #content
                    document.getElementById("articles").innerHTML = articlesHTML;
                })
            }
        })
    }
    fetch(base_url + "articles")
        .then(status)
        .then(json)
        .then(function(data) {
                // Isi disembunyikan agar lebih ringkas
            }
        }