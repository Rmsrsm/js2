class Vehicle {
  constructor(id, name, manufacturer) {
    this.id = id;
    this.name = name;
    this.manufacturer = manufacturer;
  }
}



class Car extends Vehicle {
  constructor(id, name, company, type) {
    super(id, name, company);
    this.type = type;
  }
}



class Plane extends Vehicle {
  constructor(id, name, company, type) {
    super(id, name, company);
    this.type = type;
  }
}



class Employee {
  constructor(id, name, dob) {
    this.id = id;
    this.name = name;
    this.dob = dob;
  }
}


class Driver extends Employee {
  constructor(id, name, dob, licenseId) {
    super(id, name, dob);
    this.licenseId = licenseId;
  }
}

class Pilot extends Employee {
  constructor(id, name, dob, licenseId) {
    super(id, name, dob);
    this.licenseId = licenseId;
  }
}



class Reservation {
  constructor(reservationId, reservationDate, employeeId, vehicleId) {
    this.reservationId = reservationId;
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
  }
}


const car1 = new Car(1, "Camray", "Toyota", "gas");
const car2 = new Car(2, "z1", "z1", "electric");
const car3 = new Car(3, "i520", "BMW", "electric");


const plane1 = new Plane(4, "b 747", "B", "public");
const plane2 = new Plane(5, "s 172", "S", "private");



const pilot1 = new Pilot(201, "John Doe", "1990-01-01", "P123");
const driver1 = new Driver(101, "Jane Doe", "1985-05-15", "D456");



let vehicles = [car1, car2, car3, plane1, plane2];
let employees = [pilot1, driver1];



let reservations = [];


function createReservation(employeeId, vehicleId) {
  let employee = findEmployeeById(employeeId);
  let vehicle = findVehicleById(vehicleId);

  if (employee instanceof Pilot && vehicle instanceof Car) {
    console.log("طيار لا يمكنه قيادة سيارة");
  } else if (employee instanceof Driver && vehicle instanceof Plane) {
    console.log("سائق لا يمكنه قيادة طائرة");
  } else {
    let reservation = new Reservation(
      reservations.length + 1,
      new Date().toLocaleDateString(),
      employeeId,
      vehicleId
    );
    reservations.push(reservation);
    console.log("تم إنشاء حجز بنجاح");
  }
}


const findEmployeeById = employeeId => employees.find(employee => employee.id === employeeId);
const findVehicleById = vehicleId => vehicles.find(vehicle => vehicle.id === vehicleId);



createReservation(101, 1);
createReservation(201, 4);

console.log("قائمة الحجوزات:");

reservations.map(res =>{
console.log(`
reservationId: ${res.reservationId}
reservationDate: ${res.reservationDate}
employeeId: ${res.employeeId}
vehicleId:  ${res.vehicleId}
`);
})
