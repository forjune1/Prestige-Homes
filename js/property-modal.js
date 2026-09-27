function showPropertyDetails(property) {

    const modal = document.getElementById("property-modal");
    const modalDetails = document.getElementById("modal-details");

    if (!modal || !modalDetails) {
        return;
    }

    modalDetails.innerHTML = `

        <!-- Property Image -->

        <div class="modal-property-image">

            <img
                src="${property.images[0]}"
                alt="${property.name}"
            >

        </div>


        <!-- Property Information -->

        <div class="modal-property-info">

            <h2>${property.name}</h2>


            <p>
                <i class="fas fa-location-dot"></i>
                ${property.location}
            </p>


            <h3>
                ₦${property.price.toLocaleString()}
            </h3>


            <p>
                <strong>Property Type:</strong>
                ${property.type}
            </p>


            <p>
                <strong>Bedrooms:</strong>
                ${property.bedrooms}
            </p>


            <p>
                <strong>Bathrooms:</strong>
                ${property.bathrooms}
            </p>


            <p>
                <strong>Address:</strong>
                ${property.street}
            </p>


            <!-- Features -->

            <h4>Features</h4>

            <ul>

                ${property.features.map(feature => `
                    <li>${feature}</li>
                `).join("")}

            </ul>


            <!-- Agent -->

            <div class="modal-agent">

                <img
                    src="${property.agentImage}"
                    alt="${property.agent}"
                    class="modal-agent-image"
                >


                <div class="modal-agent-info">

                    <h4>Property Agent</h4>


                    <p>
                        <strong>Name:</strong>
                        ${property.agent}
                    </p>


                    <p>
                        <strong>Phone:</strong>

                        <a href="tel:${property.phone}">
                            ${property.phone}
                        </a>

                    </p>


                    <p>
                        <strong>Email:</strong>

                        <a href="mailto:${property.email}">
                            ${property.email}
                        </a>

                    </p>

                </div>

            </div>


            <!-- Schedule Tour -->

            <div class="schedule-tour">

                <h3>Schedule a Tour</h3>


                <form id="tour-form">


                    <!-- Visitor Name -->

                    <div class="tour-form-group">

                        <label for="tour-name">
                            Your Name
                        </label>

                        <input
                            type="text"
                            id="tour-name"
                            placeholder="Enter your name"
                            required
                        >

                    </div>


                    <!-- Visitor Email -->

                    <div class="tour-form-group">

                        <label for="tour-email">
                            Your Email
                        </label>

                        <input
                            type="email"
                            id="tour-email"
                            placeholder="Enter your email"
                            required
                        >

                    </div>


                    <!-- Date + Time -->

                    <div class="tour-form-row">


                        <div class="tour-form-group">

                            <label for="tour-date">
                                Tour Date
                            </label>

                            <input
                                type="date"
                                id="tour-date"
                                required
                            >

                        </div>


                        <div class="tour-form-group">

                            <label for="tour-time">
                                Preferred Time
                            </label>

                            <input
                                type="time"
                                id="tour-time"
                                required
                            >

                        </div>


                    </div>


                    <!-- Message -->

                    <div class="tour-form-group">

                        <label for="tour-message">
                            Message
                        </label>

                        <textarea
                            id="tour-message"
                            rows="4"
                            placeholder="Optional message..."
                        ></textarea>

                    </div>


                    <!-- Submit -->

                    <button
                        type="submit"
                        class="schedule-tour-btn"
                    >

                        <i class="fas fa-calendar-check"></i>

                        Schedule Tour

                    </button>


                </form>

            </div>

        </div>

    `;


    /* =========================
       SHOW MODAL
    ========================= */
    modal.style.display = "flex";
    document.body.classList.add("modal-open");


    /* =========================
       TOUR FORM
    ========================= */

    const tourForm = document.getElementById("tour-form");


    tourForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("tour-name").value.trim();

        const email =
            document.getElementById("tour-email").value.trim();

        const date =
            document.getElementById("tour-date").value;

        const time =
            document.getElementById("tour-time").value;

        const message =
            document.getElementById("tour-message").value.trim();


        /* =========================
           EMAIL SUBJECT
        ========================= */

        const subject =
            `Tour Request - ${property.name}`;


        /* =========================
           EMAIL MESSAGE
        ========================= */

        const body = `

Hello ${property.agent},

I would like to schedule a tour of the following property.

Property: ${property.name}

Location: ${property.location}

Address: ${property.street}

Tour Date: ${date}

Preferred Time: ${time}


Visitor Information

Name: ${name}

Email: ${email}


Message:

${message || "I would like to schedule a tour of this property."}

Thank you.

        `;


        /* =========================
           SEND TO AGENT
        ========================= */

        const mailtoLink =
            `mailto:${property.email}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;


        window.location.href = mailtoLink;

    });

}


const closeModal =
    document.getElementById("close-modal");

const propertyModal =
    document.getElementById("property-modal");


if (closeModal && propertyModal) {

    closeModal.addEventListener("click", function () {

        propertyModal.style.display = "none";

        document.body.classList.remove("modal-open");

    });


    propertyModal.addEventListener("click", function (event) {

        if (event.target === propertyModal) {

            propertyModal.style.display = "none";

            document.body.classList.remove("modal-open");

        }

    });

}