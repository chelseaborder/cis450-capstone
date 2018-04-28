{
  const school = schools[0]

  for(var i = 0; i < school.features.length; i++) {

    let row = `
      <tr>
        <td>${school.features[i].name}</td>
        <td>${school.features[i].value}</td>
        <td>${school.features[i].rank}</td>
      </tr>
    `

    $('#myTable > tbody:last-child').append(row)

  }

}

console.log(schools[0])



// for each school {
//   make card
//   set title to school.name
//   set subtitle to school.location
//   make table
//   for each school.feature
//     add row
//       feature = school.feature.name
//       value = school.feature.value
//       rank = school.feature.rank
