function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    
    const sidebarToggleWrapper = document.querySelector('.sidebar-toggle-wrapper');
  sidebarToggleWrapper.classList.toggle('collapsed');
}