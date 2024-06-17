
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search');


const cities = [
    `patna`,`bhopal`
];

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const city = cities.find(city => city.toLowerCase() === query);

    if (city) {
        
        window.location.href = `${city.toLowerCase()}.html`;
        
    } else {
        alert('City not found');
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});
