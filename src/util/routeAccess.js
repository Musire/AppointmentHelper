export const routeAccessRules = [
    { 
        path: "/home", 
        roles: [
            "admin",
            "manager"
        ] 
    },
    { 
        path: "/profile", 
        roles: [
            "admin", 
            "manager", 
            "user"
        ] 
    },
]

export const hasAccess = (path, user) => {
    
    const route = routeAccessRules.find(r => path.startsWith(r.path))

    if (!route) return true

    if (route.roles) {
        return user && route.roles.includes(user.role)
    }

  return false
}