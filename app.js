const getFeatureBtn = document.querySelector('.feature-btn');
const getCompanyBtn = document.querySelector('.company-btn');
const getHamburgerBtn = document.querySelector('.hamburger-btn');

function toggleFeatures() {

    const getFeatureItems = document.querySelector('.feature-items');

    if (getFeatureItems.style.display === 'none') {
        getFeatureItems.style.display = 'block';
    } else {
        getFeatureItems.style.display = 'none';
    }

}

function toggleComapny() {

    const getCompanyItems = document.querySelector('.company-items');

    if (getCompanyItems.style.display === 'none') {
        getCompanyItems.style.display = 'block';
    } else {
        getCompanyItems.style.display = 'none';
    }
        
}

function toggleHamburger() {

    const getDropdownFeatures = document.querySelector('.dropdown-features');
    const getDropdownCompany = document.querySelector('.dropdown-company');
    const getCareersNav = document.querySelector('.careers-nav');
    const getAboutNav = document.querySelector('.about-nav');
    const getAccessNav = document.querySelector('.access-nav');


    if (getDropdownFeatures.style.display === 'none') {
        getDropdownFeatures.style.display = 'block';
        getDropdownCompany.style.display = 'block'
        getCareersNav.style.display = 'block';
        getAboutNav.style.display = 'block';
        getAccessNav.style.display = ' ';
    } else {
        getDropdownFeatures.style.display = 'none';
        getDropdownCompany.style.display = 'none'
        getCareersNav.style.display = 'none';
        getAboutNav.style.display = 'none';
        getAccessNav.style.display = 'none';
    }


}


getFeatureBtn.onclick = toggleFeatures;
getCompanyBtn.onclick = toggleComapny;
getHamburgerBtn.onclick = toggleHamburger;