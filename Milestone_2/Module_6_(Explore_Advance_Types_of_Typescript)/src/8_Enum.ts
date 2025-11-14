// Explore Enum

// set of fixed string leteral
// type UserRoles = 'Admin' | 'Editor' | 'Viewer';
enum UserRoles {
  Admin = 'Admin',
  Editor = 'Editor',
  Viewer = 'Viewer'
}
// const canEdit = (role: UserRoles) => {
//   if(role === 'Admin' || role === 'Editor' || role === 'Viewer'){
//     return true;
//   }
//   return false;
// };
const canEdit = (role: UserRoles) => {
  if(role === UserRoles.Admin || role === UserRoles.Editor || role === UserRoles.Viewer){
    return true;
  }
  return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);