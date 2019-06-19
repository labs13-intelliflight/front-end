
const getFromLocalStorage = () => {
    return localStorage.getItem('expires_at') ? localStorage.getItem('expires_at') : null;
}

export default getFromLocalStorage;