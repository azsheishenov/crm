import LSkey from "./common/LSkey.js";

document.body.classList.add('dark');

export const checkUserAuth = () => {
    const token = localStorage.getItem(LSkey.token); 
    if(token) return;
    else {
        window.location.replace('../pages/login.html');
    }
}
