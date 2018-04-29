{

  let schoolsListHTML = ''

  for(let i=0; i<schools.length; i++){
    const school = schools[i]

    let title = `<h1>${school.name}</h1>`

    let rows = ''
    for(const feature of school.features) {

      let row = `
        <tr>
          <td>${feature.name}</td>
          <td>${feature.value}</td>
          <td>${feature.rank}</td>
        </tr>
      `

      rows += row + '\n'
    }

    const titleStr = school.rank + ". " + school.name

    const locationStr = school.location.city + ", " + school.location.state + " " + school.location.zipcode
    let className = "content"
    if(i === 0){
      className += " active"
    }

    const singleSchoolHTML = `
      <div class="${className}">
        <h1>${titleStr}</h1>
        <h2>${locationStr}</h2>
        <table style="width:100%" id="myTable">
          <tr>
            <th>Feature</th>
            <th>Value</th>
            <th>Ranking</th>
          </tr>
          ${rows}
        </table>
          <h4><a class="button btn btn-primary" href="#">Next School &rarr;</a></h4>
      </div>
    `

    schoolsListHTML += singleSchoolHTML + '\n'

  }

  schoolsListHTML += `
    <div class="progress-container">
        <div class="step"></div>
    </div>
  `

  document.getElementById('cardList').innerHTML = schoolsListHTML


}
