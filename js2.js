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