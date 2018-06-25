/**
*
* Teste from vehicle type service
*
**/
describe('Vehicle Type Service Test', function () {
  var vehicleTypeService;

  // Runs before each test
  beforeEach(function () {
    angular.mock.module('app');
  });

  // Runs before each test
  beforeEach(inject(function (VehicleTypeService) {
    vehicleTypeService       = VehicleTypeService;

  }));

  it('Should return vehicleTypes', function () {
    var result = vehicleTypeService.getVehicleTypes();
    expect(result.length).toEqual(2);
  });

});
