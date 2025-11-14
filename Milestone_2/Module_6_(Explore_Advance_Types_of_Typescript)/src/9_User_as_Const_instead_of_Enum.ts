// as const assertion

// enum UserRoles {
//   Admin = 'Admin',
//   Editor = 'Editor',
//   Viewer = 'Viewer'
// }
const UserRoles = {
  Admin : 'Admin',
  Editor: 'Editor',
  Viewer: 'Viewer',
} as const;
const canEdit = (role:(typeof UserRoles)[keyof typeof UserRoles]) => {
  if(role === UserRoles.Admin || role === UserRoles.Editor || role === UserRoles.Viewer){
    return true;
  }
  return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);