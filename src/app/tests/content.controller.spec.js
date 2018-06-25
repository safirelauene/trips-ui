/**
*
* Teste from content Controller
*
**/
describe('Content Controller Test', function () {
  var control,
      contentService,
      trip;

  // Runs before each test
  beforeEach(function () {
    angular.mock.module('app');
  });

  // Runs before each test
  beforeEach(inject(function ($controller, ContentService) {
    contentService       = ContentService;

    trip = {
      id: 1,
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

    control              = $controller('ContentController');

    control.tripForm = {
      $setUntouched: function() {},
      $setPristine: function() {}
    };
  }));

  it('Should add trip', function () {
    control.trip = trip;
    control.addTrip();
    expect(control.trips.length).toEqual(6);
  });

  it('Should reset passenger', function () {
    control.addPassenger({});
    expect(control.trip.passengers.length).toEqual(1);
  });

  it('Should reset passenger', function () {
    control.resetPassenger();
    expect(control.passenger).toEqual(new Passenger());
  });

  it('Should reset trip', function () {
    control.resetTrip();
    expect(control.trip).toEqual(new Trip());
  });

  it('Should define trip', function () {
    expect(control.trip instanceof Trip).toBeTruthy();
  });

  it('Should get vehicle types', function () {
    expect(control.vehicleTypes.length).toEqual(2);
  });

  it('Should get trips', function () {
    expect(control.trips.length).toEqual(5);
  });

  it('Should define controller', function () {
    expect(control).toBeDefined();
  });


});
