const BreweryList = document.getElementById('Brewery List');
const searchBar = document.getElementById('searchBar');
let Breweryname = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredBrewery = Breweryname.filter((Brewery) => {
        return (
            Brewery.name.toLowerCase().includes(searchString)
        );
    });
    displayBrewery(filteredBrewery);
});

const loadBrewery = async () => {
    try {
        const res = await fetch('https://api.openbrewerydb.org/breweries');
        Breweryname = await res.json();
        displayBrewery(Breweryname);
    } catch (err) {
        console.error(err);
    }
};

const displayBrewery = (Brewery) => {
    const htmlString = Brewery
        .map((Brewery) => {
            return `
            <ul class="character">
                <h2>${Brewery.name}</h2>
                <h4>Type: ${Brewery.brewery_type}</h4>
               <li>Address-2: ${Brewery.address_2}</li>
               <li>Website: ${Brewery.website_url}</li>
               <li>Address-3: ${Brewery.address_3}</li>
               <li>Phone No: ${Brewery.phone}</li>
               
            </ul>
        `;
        })
        .join('');
    BreweryList.innerHTML = htmlString;
};

loadBrewery();
