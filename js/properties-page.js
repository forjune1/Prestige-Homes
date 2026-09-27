const propertiesContainer =
    document.getElementById("propertiesContainer");

const resultsCount =
    document.getElementById("resultsCount");

const filterBtn =
    document.getElementById("filterBtn");

const showAllBtn =
    document.getElementById("showAllBtn");

const locationFilter =
    document.getElementById("locationFilter");

const typeFilter =
    document.getElementById("typeFilter");

const priceFilter =
    document.getElementById("priceFilter");

const bedroomFilter =
    document.getElementById("bedroomFilter");


// Debug logs removed


// ========================================
// DISPLAY PROPERTIES
// ========================================

function displayProperties(propertiesToDisplay) {

    propertiesContainer.innerHTML = "";

    if (propertiesToDisplay.length === 0) {

        propertiesContainer.innerHTML = `
            <p class="no-results">
                No properties found matching your filters.
            </p>
        `;

        resultsCount.textContent =
            "0 properties available";

        return;
    }

    resultsCount.textContent =
        `${propertiesToDisplay.length} properties available`;


    propertiesToDisplay.forEach(property => {

        const propertyCard =
            document.createElement("div");

        propertyCard.classList.add("property-card");


        propertyCard.innerHTML = `

            <div class="property-image">

                <img
                    src="${property.images[0]}"
                    alt="${property.name}"
                >

                <span class="property-purpose-badge">
                    ${
                        property.purpose === "buy"
                            ? "For Sale"
                            : "For Rent"
                    }
                </span>

                <span class="property-price-badge">
                    ₦${property.price.toLocaleString()}
                </span>

            </div>


            <div class="property-info">

                <h3>
                    ${property.name}
                </h3>

                <p class="property-location">
                    <i class="fas fa-location-dot"></i>
                    ${property.location}
                </p>

                <div class="property-details">

                    <span>
                        <i class="fas fa-bed"></i>
                        ${property.bedrooms} Beds
                    </span>

                    <span>
                        <i class="fas fa-bath"></i>
                        ${property.bathrooms} Baths
                    </span>

                    <span>
                        <i class="fas fa-house"></i>
                        ${property.type}
                    </span>

                </div>

            </div>
        `;


        propertiesContainer.appendChild(propertyCard);


        propertyCard.addEventListener("click", function () {

            showPropertyDetails(property);

        });

    });
}


// ========================================
// FILTER PROPERTIES
// ========================================

function filterProperties() {

    const activePurposeButton =
        document.querySelector(".property-purpose.active");

    const purpose =
        activePurposeButton
            ? activePurposeButton.dataset.purpose
            : "buy";


    const location =
        locationFilter.value;

    const type =
        typeFilter.value;

    const price =
        priceFilter.value;

    const bedrooms =
        bedroomFilter.value;


    const filteredProperties =
        properties.filter(property => {

            const matchesPurpose =
                property.purpose === purpose;


            const matchesLocation =
                !location ||
                property.location.toLowerCase() ===
                location.toLowerCase();


            const matchesType =
                !type ||
                property.type.toLowerCase() ===
                type.toLowerCase();


            const matchesBedrooms =
                !bedrooms ||
                property.bedrooms >= Number(bedrooms);


            let matchesPrice = true;


            if (price) {

                if (price.endsWith("+")) {

                    const min =
                        Number(price.replace("+", ""));

                    matchesPrice =
                        property.price >= min;

                } else {

                    const [min, max] =
                        price.split("-").map(Number);

                    matchesPrice =
                        property.price >= min &&
                        property.price <= max;

                }

            }


            return (
                matchesPurpose &&
                matchesLocation &&
                matchesType &&
                matchesBedrooms &&
                matchesPrice
            );

        });


    displayProperties(filteredProperties);
}


// ========================================
// BUY / RENT BUTTONS
// ========================================

const purposeButtons =
    document.querySelectorAll(".property-purpose");


purposeButtons.forEach(button => {

    button.addEventListener("click", function () {

        purposeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterProperties();

    });

});


// ========================================
// APPLY FILTER BUTTON
// ========================================

if (filterBtn) {

    filterBtn.addEventListener("click", function () {

        filterProperties();

    });

}


// ========================================
// SHOW ALL PROPERTIES
// ========================================

if (showAllBtn) {

    showAllBtn.addEventListener("click", function () {

        locationFilter.value = "";
        typeFilter.value = "";
        priceFilter.value = "";
        bedroomFilter.value = "";

        // Ignore Buy/Rent here
        // and display everything
        displayProperties(properties);

    });

}


// ========================================
// READ FILTERS FROM URL
// ========================================

const params =
    new URLSearchParams(window.location.search);


const urlPurpose =
    params.get("purpose");

const urlLocation =
    params.get("location");

const urlType =
    params.get("type");

const urlPrice =
    params.get("price");

const showAll =
    params.get("showAll");


// ========================================
// APPLY URL FILTERS
// ========================================

if (urlPurpose) {

    purposeButtons.forEach(button => {

        button.classList.remove("active");

        if (
            button.dataset.purpose ===
            urlPurpose
        ) {

            button.classList.add("active");

        }

    });

}


if (urlLocation) {
    locationFilter.value = urlLocation;
}


if (urlType) {
    typeFilter.value = urlType;
}


if (urlPrice) {
    priceFilter.value = urlPrice;
}


// ========================================
// SHOW ALL FROM HOMEPAGE
// ========================================

if (showAll === "true") {

    locationFilter.value = "";
    typeFilter.value = "";
    priceFilter.value = "";
    bedroomFilter.value = "";

    displayProperties(properties);

} else {

    // Normal properties page
    filterProperties();

}


// ========================================
// REMOVE URL PARAMETERS
// ========================================

if (
    urlPurpose ||
    urlLocation ||
    urlType ||
    urlPrice ||
    showAll
) {

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );

}