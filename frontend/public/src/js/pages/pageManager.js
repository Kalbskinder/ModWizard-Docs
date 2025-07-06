// Page registry to store all pages
class PageManager {
    constructor() {
        this.pages = new Map();
        this.currentPage = null;
        this.defaultPage = 'introduction';
    }

    // Register a page
    registerPage(id, pageData) {
        this.pages.set(id, {
            id,
            ...pageData
        });
    }

    // Get a page by ID
    getPage(id) {
        return this.pages.get(id);
    }

    // Get all pages
    getAllPages() {
        return Array.from(this.pages.values());
    }

    // Load and display a page
    loadPage(pageId) {
        const page = this.getPage(pageId);
        if (!page) {
            console.error(`Page "${pageId}" not found`);
            return false;
        }

        this.currentPage = page;
        this.renderPage(page);
        this.updateURL(pageId);
        this.updateNavigation(pageId);
        return true;
    }

    // Render page content
    renderPage(page) {
        // Update page title
        document.title = `${page.title} - ModWizard Docs`;
        
        // Update main content
        const contentContainer = document.querySelector('.content');
        contentContainer.innerHTML = page.content;
        
        // Update table of contents
        this.updateTOC(page.toc || []);
        
        // Update contributors
        this.updateContributors(page.contributors || []);
        
        // Re-highlight code blocks
        if (window.Prism) {
            Prism.highlightAll();
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Update table of contents
    updateTOC(toc) {
        const tocContainer = document.getElementById('toc');
        if (!toc.length) {
            tocContainer.innerHTML = '<li>No sections available</li>';
            return;
        }

        tocContainer.innerHTML = toc.map(item => {
            if (item.subsections) {
                return `
                    <li>
                        <a href="${item.link}" class="section">${item.title}</a>
                        <ul>
                            ${item.subsections.map(sub => 
                                `<li><a href="${sub.link}" class="subsection">${sub.title}</a></li>`
                            ).join('')}
                        </ul>
                    </li>
                `;
            }
            return `<li><a href="${item.link}" class="section">${item.title}</a></li>`;
        }).join('');
    }

    // Update contributors
    updateContributors(contributors) {
        const authorsContainer = document.getElementById('authors');
        if (!contributors.length) {
            authorsContainer.innerHTML = '<div class="no-contributors">No contributors listed</div>';
            return;
        }

        authorsContainer.innerHTML = contributors.map(contributor => `
            <div class="author">
                <a href="https://github.com/${contributor}">
                    <img src="./images/docs/contributors/${contributor.toLowerCase()}.jpeg" 
                         alt="${contributor}" 
                         class="avatar"
                         onerror="this.src='./images/docs/contributors/default.png'">
                </a>
            </div>
        `).join('');
    }

    // Update URL without page reload
    updateURL(pageId) {
        const newURL = `${window.location.pathname}#${pageId}`;
        history.pushState({ pageId }, '', newURL);
    }

    // Update navigation active states
    updateNavigation(pageId) {
        // Remove all active classes
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current page
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Initialize the page manager
    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (event) => {
            const pageId = event.state?.pageId || this.getPageIdFromURL();
            this.loadPage(pageId);
        });

        // Load initial page
        const initialPageId = this.getPageIdFromURL() || this.defaultPage;
        this.loadPage(initialPageId);
    }

    // Get page ID from current URL
    getPageIdFromURL() {
        const hash = window.location.hash.substring(1);
        return hash || null;
    }
}

// Create global instance
window.pageManager = new PageManager();