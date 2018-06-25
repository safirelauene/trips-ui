function VehicleTypeService() {

  /**
   * Mocked trips
   * */
  const vehicleTypes = [
    {
      id: 1,
      name: "Carro comum",
      seats: 4
    },
    {
      id: 2,
      name: "Carro luxo",
      seats: 4
    }
  ];

  /**
   * Return all vehicle types
   **/
  const getVehicleTypes = () => {
    this.vehicleTypes = vehicleTypes.map(vehicle => {
      return new VehicleType(vehicle)
    });
    return this.vehicleTypes;
  };

  const VehicleTypeService = {
    getVehicleTypes         : getVehicleTypes
  };

  return VehicleTypeService;
}
angular.module('app').factory('VehicleTypeService', VehicleTypeService);
