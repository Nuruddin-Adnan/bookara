
// side nav toggle
let sideNavToggler = true;
const toggleSideNav = () => {
    const sideNav = document.querySelector('.side-nav');

    if (sideNavToggler) {
        sideNav.style.right = 'unset';
        sideNav.style.left = '0px';
        sideNavToggler = false
    } else {
        sideNav.style.right = '100%';
        sideNav.style.left = 'unset';
        sideNavToggler = true
    }
}
