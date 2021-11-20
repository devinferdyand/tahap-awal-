const toggleSidebar = document.querySelector("#toggle-sidebar");
const didebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click",() => {
    Sidebar.classList.toggle("sidebar-open");
});