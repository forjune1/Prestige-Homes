const featuredContainer =
    document.getElementById("featuredPropertiesContainer");


if (featuredContainer) {

    const featuredProperties = properties.slice(0, 3);


    featuredProperties.forEach(property => {

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


        featuredContainer.appendChild(propertyCard);


        /*
         * Open property modal
         */

        propertyCard.addEventListener(
            "click",
            function () {

                showPropertyDetails(property);

            }
        );

    });

}