
const getExpiresAtLocalStorage = () => {
    return localStorage.getItem('expires_at') ? localStorage.getItem('expires_at') : null;
}

export default getExpiresAtLocalStorage;