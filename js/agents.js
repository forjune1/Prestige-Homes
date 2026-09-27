const agents = [

    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Senior Partner",
        sales: "₦500M+ in sales",
        image: "img/sarahreal.avif",

        tags: [
            "Luxury Properties",
            "Maitama"
        ],

        phone: "+2348012345678",
        email: "sarah@prestigehomes.com"
    },


    {
        id: 2,
        name: "Michael Chen",
        role: "Senior Agent",
        sales: "₦250M+ in sales",
        image: "img/michaelreal.avif",

        tags: [
            "Investment Properties",
            "Wuse"
        ],

        phone: "+2348012345679",
        email: "michael@prestigehomes.com"
    },


    {
        id: 3,
        name: "Jennifer Ross",
        role: "Property Consultant",
        sales: "₦150M+ in sales",
        image: "img/jennreal.avif",

        tags: [
            "Luxury Apartments",
            "Lekki"
        ],

        phone: "+2348012345680",
        email: "jennifer@prestigehomes.com"
    }

];



const agentsContainer =
    document.getElementById("agentsContainer");


if (agentsContainer) {

    agents.forEach(function(agent) {

        const agentCard =
            document.createElement("div");

        agentCard.classList.add("agent-card");


        agentCard.innerHTML = `

            <div class="agent-image-container">

                <img
                    src="${agent.image}"
                    alt="${agent.name}"
                    class="agent-image"
                >

            </div>


            <div class="agent-content">

                <h2>
                    ${agent.name}
                </h2>


                <p class="agent-role">
                    ${agent.role}
                </p>


                <p class="agent-sales">
                    ${agent.sales}
                </p>


                <div class="agent-tags">

                    ${agent.tags.map(function(tag) {

                        return `
                            <span>${tag}</span>
                        `;

                    }).join("")}

                </div>


                <div class="agent-actions">

                    <a href="tel:${agent.phone}">
                        <i class="fas fa-phone"></i>
                        Call
                    </a>


                    <a href="mailto:${agent.email}">
                        <i class="fas fa-envelope"></i>
                        Email
                    </a>

                </div>

            </div>

        `;


        agentsContainer.appendChild(agentCard);

    });

}