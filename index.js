document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dd-button]")

    // If the clicked element is not a dropdown button, 
    // AND it doesn't have a dropdown-wrapper as a parent
    //
    // The e.target.closest check makes it so users can click outside of dropdown menus to
    // close them. currentDropdown will be undefined and all dropdowns will get 'active' removed
    if (!isDropdownButton && e.target.closest("[data-dd-wrapper]") !== null) { return }

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dd-wrapper]")
        currentDropdown.classList.toggle("active")
    }

    // Close all other dropdowns besides the one we just clicked on
    document.querySelectorAll("[data-dd-wrapper].active").forEach(dropdown => {
        if (dropdown === currentDropdown) { return }
        dropdown.classList.remove("active")
    })
})