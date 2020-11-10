(function () {
    function Country(name, cities) {
        this["name"] = name;
        this["cities"] = cities;
    }

    function City(name, population) {
        this["name"] = name;
        this["population"] = population;
    }

    var countries = [
        new Country("Russia",
            [
                new City("Moscow", 12615279),
                new City("St. Petersburg", 5383890),
                new City("Novosibirsk", 1618039),
                new City("Yekaterinburg", 1483119)
            ]),
        new Country("Germany",
            [
                new City("Berlin", 3520031),
                new City("Hamburg", 1787408),
                new City("Munich", 1450381)
            ]),
        new Country("France",
            [
                new City("Paris", 2229621),
                new City("Marseilles", 855393),
                new City("Lyon", 500715),
                new City("Toulouse", 458298)
            ]),
    ];

    function findCountriesMaxCitiesCount(arrayCountries) {
        var maxCitiesCount = arrayCountries[0].cities.length;

        for (var i = 1; i < arrayCountries.length; i++) {
            if (arrayCountries[i].cities.length > maxCitiesCount) {
                maxCitiesCount = arrayCountries[i].cities.length;
            }
        }

        return arrayCountries.filter(function (country) {
            return country.cities.length === maxCitiesCount;
        });
    }

    function findCountriesPopulations(arrayCountries) {
        var countriesPopulations = new Map();

        for (var i = 0; i < arrayCountries.length; i++) {
            countriesPopulations.set(
                arrayCountries[i].name,
                arrayCountries[i].cities.reduce(function (accumulator, currentValue) {
                    return accumulator + currentValue.population;
                }, 0));
        }

        return countriesPopulations;
    }

    console.log(countries);

    console.log(findCountriesMaxCitiesCount(countries));

    console.log(findCountriesPopulations(countries));
})();