{
  const school = schools[0]

  let row = `
    <tr>
      <td>${school}</td>
    </tr>
  `

  $('#myTable > tbody:last-child').append(row)
}

console.log(schools[0])
