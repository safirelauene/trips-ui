/**
*
* Teste from content service
*
**/
describe('Content Service Test', function () {
  var contentService, trip;

  // Runs before each test
  beforeEach(function () {
    angular.mock.module('app');
  });

  // Runs before each test
  beforeEach(inject(function (ContentService) {
    trip = {
      id: 9,
      date: "02/07/2018",
      time:"10:30",
      origin:"Embraer SJC",
      destiny:"Senac",
      vehicleType: {
        id: 1,
        name: "Carro comum",
        seats: 4,
      },
      passengers:[
        {
          id:1,
          name: "Safire Lauene",
          phone: "12 98118-8323"
        }
      ]
    };
    contentService       = ContentService;

  }));

  it('Should return trips', function () {
    var result = contentService.getTrips();
    expect(result.length).toEqual(5);
  });

  it('Should addTrip trip', function () {
    contentService.addTrip(trip)
    var result = contentService.getTrips();
    expect(result.length).toEqual(6);
  });

});
