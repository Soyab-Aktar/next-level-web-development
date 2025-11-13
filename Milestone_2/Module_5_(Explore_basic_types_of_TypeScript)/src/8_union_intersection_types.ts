// Union & Intersection Types

// Union
type userRole = 'Admin' | 'User';
const getDashboard = (role: userRole) => {
  if(role === 'Admin'){
    return "Admin Dashboard";
  }
  else if(role === 'User'){
    return "User Dashboard";
  }
  else{
    return "Guest Dashboard";
  }
};
console.log(getDashboard('User'));

// Intersection
type Employee = {
  id: number;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
}

type EmployeeManager = Employee & Manager;

const devid: EmployeeManager = {
  id: 32,
  name: 'David Stanley',
  phoneNo: '4w947474903',
  designation: 'Production Holder',
  teamSize: 21,
}; 
console.log(devid);