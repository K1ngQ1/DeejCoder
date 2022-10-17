import { useAuthContext } from "./useAuthContext"
import { useCodeContext } from "./useCodeContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const {dispatch: codeDispatch} = useCodeContext()

    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user')

        // dispatch logout function
        dispatch({type: 'LOGOUT'})
        codeDispatch({type: 'SET_CODE', payload: null})
    }

    return {logout}
}