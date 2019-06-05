const MOCK = "MOCK";


const isLogged = () => {
    return false;
}

const isMocked = () => {
    const aux = window.localStorage.getItem(MOCK);  
    if(aux==null || aux=="false")
        return false;
    return true;
}

window.mock = (flag) => {
    window.localStorage.setItem(MOCK, flag)
}

export {isMocked, isLogged}