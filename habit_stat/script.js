window.addEventListener("DOMContentLoaded", async () => {
    setupModal();
});

const setupModal = (galleryDiv, authorsDiv) => {
    // https://www.w3schools.com/howto/howto_css_modals.asp
    const modal = document.querySelector("#formModal");

    // #region MODALLISTENERS
    // When the user clicks the button, open the modal
    document.querySelector("#deleteButton").addEventListener("click", openModal);

    // When the user clicks on <span> (x), close the modal
    document.querySelector(".close").addEventListener("click", closeModal);

    // When the user clicks anywhere outside of the modal, close it
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    // #endregion MODALLISTENERS

    // #region MODALFORMLISTENERS
    document.querySelector("#No").addEventListener("click", closeModal);

    // #endregion MODALFORMLISTENERS

    // #region MODALHELPER FUNCS
    function openModal() {
        setStyle(modal, "block");
    }
    function closeModal() {
        hide(modal);
    }
};


const setStyle = (el, style) => (el.style.display = style);
const hide = (el) => setStyle(el, "none");


