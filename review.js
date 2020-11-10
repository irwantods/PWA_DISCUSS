<
div class = "row" >
    <
    div class = "col s12 m3" >
    <
    div class = "row" >
    <
    div class = "col s12 team-card" >
    <
    div class = "card" >
    <
    div class = "card-image team-img" >
    <
    img src = "${crestUrl}"
class = "responsive-img"
width = "64"
alt = "team-logo" / >
    <
    div class = "divider" > < /div> <
    a id = "favorite-${result.id}"
class = "btn-floating halfway-fab waves-effect waves-light red" > < i class = "material-icons" > favorite < /i></a >
    <
    /div> <
    div class = "card-content center-align" >
    <
    h6 class = "black-text" > $ { result.name } - $ { result.shortName } < /h6> <
    p > $ { result.address } < /p> <
    a href = "${result.website}" > $ { result.website } < /a> <
    p > $ { result.venue } < /p> <
    p > $ { result.founded } < /p> <
    p > $ { result.phone } < /p> <
    p > $ { result.email } < /p> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div>


<
div class = "col s12 m9" >

    <
    h3 class = "center-align black-text" > Kompetisi Aktif < /h3> <
    table >
    <
    thead >
    <
    th > Area < /th> <
    th > Kompetisi < /th> <
    /thead> <
    tbody id = "comp" > < /tbody>   <
    /table>

<
div class = "divider" > < /div> <
    h3 class = "center black-text" > Squad Tim < /h3> <
    table >
    <
    thead >
    <
    th > Nama < /th> <
    th > Posisi < /th> <
    th > Tanggal Lahir < /th> <
    th > Negara Asal < /th> <
    th > Role < /th> <
    /thead> <
    tbody id = "squad" > < /tbody>     <
    /table>


<
/div>

<
/div>