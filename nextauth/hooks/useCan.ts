import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

type UseCanParams = {
    permissions?: string[];
    roles?: string[];

}


export function useCan({permissions, roles} : UseCanParams) {
    const {user, isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated) {
        return false;
    } 

    if (permissions?.length > 0) {
        const hasAllPemissions = permissions.every(permission => {
            return user.permissions.includes(permission)
        });

        if (!hasAllPemissions) {
            return false;
        }
    }

    
    if (roles?.length > 0) {
        const hasAllRoles = roles.every(role => {
            return user.roles.includes(role)
        });

        if (!hasAllRoles) {
            return false;
        }
    }

    return true;
}