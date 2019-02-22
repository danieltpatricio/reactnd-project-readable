export const authedUser = () =>{
    return 'user_' + (localStorage.token ? localStorage.token : Math.random().toString(36).substr(-8))
}


