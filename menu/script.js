function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var isVisible = sidebar.style.left === '0px';
    document.getElementById("menu").textContent = '';
    sidebar.style.left = isVisible ? '-250px' : '0px';
}
function toggleSidebar2() {
    var sidebar = document.querySelector('.sidebar');
    var isVisible = sidebar.style.left === '0px';
    sidebar.style.left = isVisible ? '-250px' : '0px';
    document.getElementById("menu").textContent = 'Menu';
}