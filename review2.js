function getSavedTeams() {
    getAll().then(function(teams) {
        console.log(teams);
        // Menyusun komponen card artikel secara dinamis
        var teamsHTML = "";
        teams.forEach(function(team) {
            // var description = team.post_content.substring(0, 100);
            teamsHTML. += `
          <div class="col s12 m6 team-card">
              <div class="card">
              <a href="./pages/detail-team.html?id=${team.id}&saved=true">
                  <div class="card-image team-img waves-effect waves-block waves-light">
                      <img src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" class="responsive-img"/>
                  </div> 
                  </a>
                      <div class="card-content center-align">
                          <h6 class="black-text">${team.name}</h6>
                          <p>${team.founded}</p>
                          <p>${team.clubColors}</p>
                          <p>${team.venue}</p>
                          <p>${team.address}</p>
                          <p>${team.phone}</p>
                          <a href="${team.website}">${team.website}</a>
                      </div>
                  </div>
          </div>            
          `;
        });
        // Sisipkan komponen card ke dalam elemen dengan id #body-content
        document.getElementById("body-content").innerHTML = teamsHTML;
    });
}