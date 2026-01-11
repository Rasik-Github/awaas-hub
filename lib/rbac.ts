// export enum Role {
//   ADMIN = "admin",
//   SELLER = "seller",
//   BUYER = "buyer",
//   // future roles
//   // MODERATOR = "moderator",
//   // AGENT = "agent",
// }

// export enum Permission {
//   VIEW_PROPERTIES = "view_properties",
//   MANAGE_PROPERTIES = "manage_properties",
//   VIEW_FAVORITES = "view_favorites",
//   MANAGE_APPOINTMENTS = "manage_appointments",
//   MANAGE_USERS = "manage_users",
//   VIEW_ANALYTICS = "view_analytics",
// }

// export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
//   [Role.ADMIN]: [
//     Permission.VIEW_PROPERTIES,
//     Permission.MANAGE_PROPERTIES,
//     Permission.VIEW_FAVORITES,
//     Permission.MANAGE_APPOINTMENTS,
//     Permission.MANAGE_USERS,
//     Permission.VIEW_ANALYTICS,
//   ],

//   [Role.SELLER]: [
//     Permission.VIEW_PROPERTIES,
//     Permission.MANAGE_PROPERTIES,
//     Permission.MANAGE_APPOINTMENTS,
//   ],

//   [Role.BUYER]: [
//     Permission.VIEW_PROPERTIES,
//     Permission.VIEW_FAVORITES,
//     Permission.MANAGE_APPOINTMENTS,
//   ],
// };

export enum Role {
  ADMIN = "admin",
  SELLER = "seller",
  BUYER = "buyer",
}

export enum Permission {
  VIEW_PROPERTIES = "view_properties",
  MANAGE_PROPERTIES = "manage_properties",
  VIEW_FAVORITES = "view_favorites",
  MANAGE_APPOINTMENTS = "manage_appointments",
  MANAGE_USERS = "manage_users",
  VIEW_ANALYTICS = "view_analytics",

  VIEW_DASHBOARD = "view_dashboard",

  VIEW_PROFILE = "view_profile",
  MANAGE_SETTINGS = "manage_settings",
}

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  [Role.ADMIN]: Object.values(Permission),

  [Role.SELLER]: [
    Permission.VIEW_PROPERTIES,
    Permission.MANAGE_PROPERTIES,
    Permission.MANAGE_APPOINTMENTS,
    Permission.VIEW_PROFILE,
    Permission.MANAGE_SETTINGS,
    Permission.VIEW_DASHBOARD,
  ],

  [Role.BUYER]: [
    Permission.VIEW_PROPERTIES,
    Permission.VIEW_FAVORITES,
    Permission.MANAGE_APPOINTMENTS,
    Permission.VIEW_PROFILE,
    Permission.MANAGE_SETTINGS,
    Permission.VIEW_DASHBOARD,
  ],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}
