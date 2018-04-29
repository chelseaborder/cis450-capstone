const fs = require('fs')

const oldSchoolsList = require('./oldData.js')

let newSchoolsList = []

for(const oldSchool of oldSchoolsList){
  let newSchool = {
    name: oldSchool.university,
    location: {
      city: oldSchool.city,
      state: oldSchool.state,
      zipcode: oldSchool.zipcode
    },
    score: oldSchool.totalscore,
    rank: oldSchool.totalrank,
    features: [
      {
        name: 'Undergrad Enrollment',
        value: oldSchool.totalug,
        rank: oldSchool.ugscore
      },
      {
        name: 'Off-Campus Students(%)',
        value: oldSchool.offcampus,
        rank: oldSchool.offcampusscore
      },
      {
        name: 'Parking Cost per Year ($)',
        value: oldSchool.parkingcost,
        rank: oldSchool.pcrank
      },
      {
        name: 'Churches (< 1 mi.)',
        value: oldSchool.church,
        rank: oldSchool.churchscore
      },
      {
        name: 'Nearest Neighborhood Distance (mi.)',
        value: oldSchool.neighborhood,
        rank: oldSchool.neighborhoodscore
      },
      {
        name: 'Neighborhood Median Income ($)',
        value: oldSchool.medianincome,
        rank: oldSchool.medianincomerank
      },
      {
        name: 'Supply',
        value: oldSchool.supplyscore,
        rank: oldSchool.supplyrank
      },
      {
        name: 'Demand',
        value: oldSchool.demandscore,
        rank: oldSchool.demandrank
      },
      {
        name: 'Total',
        value: oldSchool.totalscore,
        rank: oldSchool.totalrank
      }
    ]
  }

  newSchoolsList.push(newSchool)
}

const schoolsAsString = JSON.stringify(newSchoolsList,null,2)

const outputFileContent = 'var schools = ' + schoolsAsString

fs.writeFile('data.js',outputFileContent,'utf-8',()=>{
  console.log('Done!')
})
//console.log(schoolsAsString)
