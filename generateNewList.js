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
    feature: [
      {
        name: 'Undergrad Enrollment',
        value: oldSchool.totalug,
        rank: oldSchool.ugscore
      },
      {
        name: 'Off-Campus (%)',
        value: oldSchool.offcampus,
        rank: oldSchool.offcampusscore
      },
      {
        name: 'Parking Cost ($/year)',
        value: oldSchool.parkingcost,
        rank: oldSchool.pcrank
      },
      {
        name: 'Churches (< 1 mi.)',
        value: oldSchool.church,
        rank: oldSchool.churchscore
      },
      {
        name: 'Neighborhood (< 1 mi.)',
        value: oldSchool.neighborhood,
        rank: oldSchool.neighborhoodscore
      },
      {
        name: 'Median Income ($)',
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
      }
    ]
  }

  newSchoolsList.push(newSchool)
}

const schoolsAsString = JSON.stringify(newSchoolsList,null,2)

const outputFileContent = 'var data = ' + schoolsAsString

fs.writeFile('data.js',outputFileContent,'utf-8',()=>{
  console.log('Done!')
})
//console.log(schoolsAsString)
