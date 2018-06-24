function ContentService() {

  /**
   * Mocked trips
   * */
  const trips = [
    {
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
    },
    {
      id: 2,
      date: "03/07/2018",
      time:"11:30",
      origin:"Embraer SJC",
      destiny:"Senac",
      vehicleType: {
        id: 1,
        name: "Carro comum",
        seats: 4,
      },
      passengers:[
        {
          id:2,
          name: "Leanne Graham",
          phone: "12 3705-7036"
        }
      ]
    },
    {
      id: 3,
      date: "04/07/2018",
      time:"12:30",
      origin:"Embraer SJC",
      destiny:"Senac",
      vehicleType: {
        id: 1,
        name: "Carro comum",
        seats: 4,
      },
      passengers:[
        {
          id:3,
          name: "Ervin Howell",
          phone: "12 6593-9125"
        }
      ]
    },
    {
      id: 4,
      date: "05/07/2018",
      time:"13:30",
      origin:"Embraer SJC",
      destiny:"Senac",
      vehicleType: {
        id: 1,
        name: "Carro comum",
        seats: 4,
      },
      passengers:[
        {
          id:4,
          name: "Clementine Bauch",
          phone: "12 3463-1235"
        }
      ]
    },
    {
      id: 5,
      date: "06/07/2018",
      time:"14:30",
      origin:"Embraer SJC",
      destiny:"Senac",
      vehicleType: {
        id: 1,
        name: "Carro comum",
        seats: 4,
      },
      passengers:[
        {
          id:5,
          name: "Patricia Lebsack",
          phone: "12 3170-9623"
        }
      ]
    }
  ];

  /**
   * Return all trips
   **/
  const getTrips = () => {
    this.trips = trips.map(trip => {
      return new Trip(trip)
    });
    return this.trips;
  };

  const ContentService = {
    getTrips         : getTrips
  };

  return ContentService;
}
angular.module('app').factory('ContentService', ContentService);
