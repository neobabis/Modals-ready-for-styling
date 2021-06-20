// ------------------------------
// Author: Neokazis Charalampos
// Author URI: NeoBabis.gr
// ------------------------------

// Create DOM overlay
let nb_modal_overlay = document.createElement("div");
nb_modal_overlay.id = "nb_modal_overlay";
document.body.appendChild(nb_modal_overlay);

// Get Buttons
const nb_modals_buttons = document.querySelectorAll("[data-nb_modal_target]");
const nb_modals_close_buttons = document.querySelectorAll("[data-nb_modal_close_button]");

if (nb_modal_overlay) {
    if (nb_modals_buttons) {
        nb_modals_buttons.forEach((button) => {
            button.addEventListener("click", () => {
                let nb_modal = document.querySelector(button.dataset.nb_modal_target);
                nb_open_modal(nb_modal);
            });
        });
    }

    nb_modal_overlay.addEventListener("click", () => {
        let nb_modal = document.querySelector(".active[data-nb_modal]");
        nb_close_modal(nb_modal);
    });

    if (nb_modals_close_buttons) {
        nb_modals_close_buttons.forEach((close_button) => {
            close_button.addEventListener("click", () => {
                let nb_modal = close_button.closest("[data-nb_modal]");
                nb_close_modal(nb_modal);
            });
        });
    }
}

// ---------
// FUNCTIONS
// ---------
function nb_open_modal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    nb_modal_overlay.classList.add("active");
    nb_disable_body_scrolling();
}

function nb_close_modal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    nb_modal_overlay.classList.remove("active");
    nb_enable_body_scrolling();
}

// Disable BODY - background scrolling
function nb_disable_body_scrolling() {
    document.body.style.overflow = "hidden";
}

// Enable BODY - background scrolling
function nb_enable_body_scrolling() {
    document.body.style.overflow = "";
}
