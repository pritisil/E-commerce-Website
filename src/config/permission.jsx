export const Roles = {
  ADMIN: 'admin',
  USER: 'user',
};

export const RolePermissions = {
  [Roles.ADMIN]: ['manage_users', 'view_dashboard'],
  [Roles.USER]: ['view_dashboard'],
};
