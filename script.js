const toggleMenu = () => {
    const navList = document.getElementById("navList");
    navList.classList.toggle("active");
};

const closeMenu = () => {
    const navList = document.getElementById("navList");
    navList.classList.remove("active");
}
