// Handle navigation clicks
document.addEventListener('DOMContentLoaded', () => {
    // Handle sidebar navigation
    document.addEventListener('click', (event) => {
        const navLink = event.target.closest('.nav-link');
        if (!navLink) return;

        // Skip external links
        if (navLink.classList.contains('external')) return;

        event.preventDefault();
        
        const pageId = navLink.getAttribute('data-page');
        if (pageId && window.pageManager) {
            window.pageManager.loadPage(pageId);
        }
    });

    // Handle TOC clicks (smooth scrolling)
    document.addEventListener('click', (event) => {
        const tocLink = event.target.closest('#toc a');
        if (!tocLink) return;

        event.preventDefault();
        const targetId = tocLink.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});