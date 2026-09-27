const themeToggle = document.getElementById("theme-toggle");
const themeToggleReverse = document.getElementById("theme-toggle-reverse");


// ========================================
// THEME TOGGLE VISIBILITY
// ========================================



function updateToggleVisibility() {

    if (document.body.classList.contains("dark-theme")) {

        if (themeToggle) {
            themeToggle.style.display = "none";
        }

        if (themeToggleReverse) {
            themeToggleReverse.style.display = "block";
        }

    } else {

        if (themeToggle) {
            themeToggle.style.display = "block";
        }

        if (themeToggleReverse) {
            themeToggleReverse.style.display = "none";
        }

    }
}


// ========================================
// LOAD SAVED THEME
// ========================================

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}


// ========================================
// DARK MODE
// ========================================

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.add("dark-theme");

        localStorage.setItem("theme", "dark");

        updateToggleVisibility();

    });

}


// ========================================
// LIGHT MODE
// ========================================

if (themeToggleReverse) {

    themeToggleReverse.addEventListener("click", function () {

        document.body.classList.remove("dark-theme");

        localStorage.setItem("theme", "light");

        updateToggleVisibility();

    });

}


updateToggleVisibility();


// ========================================
// HAMBURGER / MOBILE NAV TOGGLE
// ========================================

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

if (hamburger && nav) {

    hamburger.addEventListener("click", function () {

        const isOpen = nav.classList.toggle("open");

        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");

    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && nav.classList.contains("open")) {
            nav.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });

}


// ========================================
// HOMEPAGE BUY / RENT BUTTONS
// ========================================


let selectedPurpose = "buy";

const homePurposeButtons =
    document.querySelectorAll(".purpose-btn");


homePurposeButtons.forEach(button => {

    button.addEventListener("click", function () {

        homePurposeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedPurpose =
            button.dataset.purpose;

    });

});


// ========================================
// HOMEPAGE PROPERTY FILTER
// ========================================

const homeFilterBtn =
    document.getElementById("home-filter-btn");


if (homeFilterBtn) {

    homeFilterBtn.addEventListener("click", function () {

        const location =
            document.getElementById("homeLocation").value;

        const type =
            document.getElementById("homeType").value;

        const price =
            document.getElementById("homePrice").value;


        const params =
            new URLSearchParams();


        params.set(
            "purpose",
            selectedPurpose
        );


        if (location) {

            params.set(
                "location",
                location
            );

        }


        if (type) {

            params.set(
                "type",
                type
            );

        }


        if (price) {

            params.set(
                "price",
                price
            );

        }


        window.location.href =
            `properties.html?${params.toString()}`;

    });

}

