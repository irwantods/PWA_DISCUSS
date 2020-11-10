const API_KEY = "f22f93fc8c044a9fb6f67dbb29dc7385";
const BASE_URL = "https://api.football-data.org/v2/";

const LEAGUE_ID = 2019;

const ENDPOINT_COMPETITION = `${BASE_URL}competitions/${LEAGUE_ID}/standings`;
const ENDPOINT_TEAM = `${BASE_URL}competitions/${LEAGUE_ID}/teams`;

const fetchAPI = url => {
    return fetch(url, {
            headers: {
                'X-Auth-Token': 'f22f93fc8c044a9fb6f67dbb29dc7385',
            },
        })
        .then(res => {
            if (res.status !== 200) {
                console.log("Error: " + res.status);
                return Promise.reject(new Error(res.statusText))
            } else {
                return Promise.resolve(res)
            }
        })
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
};
// load api standing
function getAllStandings() {
    if ("caches" in window) {
        caches.match(ENDPOINT_COMPETITION).then((response) => {
            if (response) {
                response.json().then(function(data) {
                    console.log("Competition Data: " + data);
                    showStanding(data);
                })
            }
        })
    }

    fetchAPI(ENDPOINT_COMPETITION)
        .then(data => {
            showStanding(data);
        })
        .catch(error => {
            console.log(error)
        })
}

function showStanding(data) {
    let standings = "";
    let standingElement = document.getElementById("homeStandings");

    data.standings[0].table.forEach((standing) => {
        standings += `
                <tr>
                    <td><img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/></td>
                    <td>${standing.team.name}</td>
                    <td>${standing.won}</td>
                    <td>${standing.draw}</td>
                    <td>${standing.lost}</td>
                    <td>${standing.points}</td>
                    <td>${standing.goalsFor}</td>
                    <td>${standing.goalsAgainst}</td>
                    <td>${standing.goalDifference}</td>
                </tr>
        `;
    });

    standingElement.innerHTML = `
                <div style="padding-left: 24px; padding-right: 24px; margin-top: 30px;">

                <table class="striped responsive-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Team Name</th>
                            <th>won</th>
                            <th>draw</th>
                            <th>lost</th>
                            <th>points</th>
                            <th>goals For</th>
                            <th>goals Against</th>
                            <th>goal Difference</th>
                        </tr>
                     </thead>
                    <tbody id="standing">
                        ${standings}
                    </tbody>
                </table>
                
                </div>
    `;
}

// load api team
function getAllTeam() {
    if ("caches" in window) {
        caches.match(ENDPOINT_TEAM).then((response) => {
            if (response) {
                response.json().then(function(data) {
                    console.log("Team Data: " + data);
                    showTeam(data);
                })
            }
        })
    }
    fetchAPI(ENDPOINT_TEAM)
        .then(data => {
            showTeam(data);
        })
        .catch(error => {
            console.log(error)
        })
}

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

// render detail team
function getTeamById() {
    return new Promise(function(resolve, reject) {
        // Ambil nilai query parameter (?id=)
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");

        if ("caches" in window) {
            caches.match(BASE_URL + "teams/" + idParam).then(function(response) {
                if (response) {
                    response.json().then(response => response.json())
                        .then(team => {
                            let squads = '';
                            team.squad.forEach((squad) => {
                                squads += `
            <tr>
              <td>${squad.name}</td>
              <td>${squad.position}</td>
              <td>${squad.dateOfBirth}</td>
              <td>${squad.countryOfBirth}</td>
              <td>${squad.nationality}</td>
              <td>${squad.role}</td>
             </tr>
          `;
                            })
                            const teamHTML =
                                `
                <div class="row">
                <div class="col s12 m3">
                    <div class="row">
                        <div class="col s12 ">
                            <div class="card">
                                <div class="card-image team-img">
                                    <img src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="64" alt="team-logo"/>
                                </div>
                                     <div class="card-content center-align">
                                        <h6 class="black-text">${team.name}</h6>
                                        <p>Active Competitions : ${team.activeCompetitions[0].name}</p>
                                        <p>Club Colors : ${team.clubColors}</p>
                                        <p>address : ${team.address}</p>
                                        <p>Website : <a href="${team.website}">${team.website}</a> </p>
                                        <p>Venue : ${team.venue}</p>
                                        <p>Founded : ${team.founded}</p>
                                        <p>Phone : ${team.phone}</p>
                                        <p>lastUpdated : ${team.lastUpdated}</p>                             
                                    </div>
                            </div>
                        </div>
                    </div> 
                 </div>
                <div class="col s12 m9">
                    <h3 class="black-text">Squad List</h3>
                        <table class="striped responsive-table">
                            <thead>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Date Of Birth</th>
                                <th>Country Of Birth</th>
                                <th>Nationality</th>
                                <th>Role</th>
                            </thead>
                            <tbody id="squad">
                                ${squads}
                            </tbody>    
                    </table>
                </div>

            </div>
                `;
                            // Sisipkan komponen card ke dalam elemen dengan id #content
                            document.getElementById("body-content").innerHTML = articleHTML;
                            // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
                            resolve(data);
                        });
                }
            });
        }


        fetch(`${BASE_URL}teams/${idParam}`, {
            headers: { 'X-Auth-Token': API_KEY }
        })


        .then(response => response.json())
            .then(team => {
                let squads = '';

                team.squad.forEach((squad) => {
                    squads += `
    <tr>
      <td>${squad.name}</td>
      <td>${squad.position}</td>
      <td>${squad.dateOfBirth}</td>
      <td>${squad.countryOfBirth}</td>
      <td>${squad.nationality}</td>
      <td>${squad.role}</td>
     </tr>
  `;
                })
                const teamHTML =
                    `
                <div class="row">
                    <div class="col s12 m3">
                        <div class="row">
                            <div class="col s12 ">
                                <div class="card">
                                    <div class="card-image team-img">
                                        <img src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="64" alt="team-logo"/>
                                    </div>
                                         <div class="card-content center-align">
                                            <h6 class="black-text">${team.name}</h6>
                                            <p>Active Competitions : ${team.activeCompetitions[0].name}</p>
                                            <p>Club Colors : ${team.clubColors}</p>
                                            <p>address : ${team.address}</p>
                                            <p>Website : <a href="${team.website}">${team.website}</a> </p>
                                            <p>Venue : ${team.venue}</p>
                                            <p>Founded : ${team.founded}</p>
                                            <p>Phone : ${team.phone}</p>
                                            <p>lastUpdated : ${team.lastUpdated}</p>                             
                                        </div>
                                </div>
                            </div>
                        </div> 
                     </div>
                    <div class="col s12 m9">
                        <h3 class="black-text">Squad List</h3>
                            <table class="striped responsive-table">
                                <thead>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Date Of Birth</th>
                                    <th>Country Of Birth</th>
                                    <th>Nationality</th>
                                    <th>Role</th>
                                </thead>
                                <tbody id="squad">
                                    ${squads}
                                </tbody>    
                        </table>
                    </div>
  
                </div>`


                document.getElementById("body-content").innerHTML = teamHTML;
                // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
                resolve(data);

            });

    });


}