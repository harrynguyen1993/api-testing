before(function () {
    console.log("B ##########---------- START -----------##########")
  })

after(function () {
    console.log("B##########---------- ENDING -----------##########")
  })
beforeEach(function () {
    console.log("beforeEach  B")
  })
  
  afterEach(function () {
    console.log("afterEach A")
  })