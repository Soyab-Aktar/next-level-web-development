// Explore Conditional Type

// type: depend on conditional
type A = null;
type B = undefined;
type C = A extends null ? true : false;
type D = A extends number ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
  car: string;
  ship: string;
  bike: string;
};

type CheckVehicle<T> = T extends "bike"|"car"|"ship" ? true : false;

type HasBike = CheckVehicle<"ship">;
