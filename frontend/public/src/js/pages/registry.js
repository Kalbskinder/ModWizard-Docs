// Import all page modules
import introduction from './introduction.js';
import contributing from './contributing.js';
import devGuides from './dev-guides.js';
// Add more imports as you create more pages

// Register all pages
function registerAllPages() {
    // Getting Started section
    window.pageManager.registerPage('introduction', introduction);
    window.pageManager.registerPage('contributing', contributing);
    window.pageManager.registerPage('dev-guides', devGuides);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    registerAllPages();
    window.pageManager.init();
});