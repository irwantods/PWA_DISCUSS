function showTeam(data) {
    // let teams = "";
    let teamElement = document.getElementById("homeTeams");

    data.teams.forEach((team) => {
        teamElement.innerHTML += `
    <div class="col s12 m6 team-card">
        <div class="card">
        <a href="./pages/detail-team.html?id=${team.id}">
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
}