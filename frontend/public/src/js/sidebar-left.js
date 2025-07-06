document.addEventListener('DOMContentLoaded', function() {
    const sectionTitles = document.querySelectorAll('.sidebar-left .section-title');
    
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const section = this.parentElement;
            const content = section.querySelector('.section-content');
            
            section.classList.toggle('collapsed');
            
            if (section.classList.contains('collapsed')) {
                content.style.maxHeight = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    // Initialize max-height for non-collapsed sections
    document.querySelectorAll('.sidebar-left .section-content').forEach(content => {
        if (!content.parentElement.classList.contains('collapsed')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});