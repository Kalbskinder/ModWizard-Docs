const content = `
<div class="content-section">
    <h1>Contributing to ModWizard Documentation</h1>
    <p>This page provides guidelines for contributing to the ModWizard documentation. Whether you're a seasoned contributor or new to the project, your help is appreciated!</p>
</div>

<hr>

<div class="content-section">
    <h2 id="guide">Contribution Guide</h2>
    <p>To contribute to the ModWizard documentation, please follow these steps:</p>
    <ol>
        <li>Fork <a href="https://github.com/Kalbskinder/ModWizard-Docs" target="_blank" class="link">the ModWizard documentation repository</a>.</li>
        <li>Clone your fork to your local machine.</li>
        <li>Create a new branch for your changes.</li>
        <li>Make your changes and commit them.</li>
        <li>Push your changes to your fork.</li>
        <li>Submit a pull request to the main repository.</li>
    </ol>
    <p>A moderator will review your pull request and provide feedback. Once approved, your changes will be merged into the main documentation.</p>
</div>

<hr>

<div class="content-section">
    <h2 id="page-structure">Page Structure</h2>
    <p>Each documentation page should follow a consistent structure:</p>
    <ul>
        <li>Page title</li>
        <li>Table of Contents</li>
        <li>Page content</li>
        <li>Contributors</li>
    </ul>
</div>

<hr>

<div class="content-section">
    <h2 id="new-pages">Adding New Pages</h2>
    <p>If you want to add a new page to the documentation, create a new file in the folder <span class="highlight">frontend/public/src/js/pages/</span> with the following structure:</p>
<pre class="language-js"><code>const content = \`
&lt;!-- Your page content here --&gt;
\`;

const page = {
    title: "Your Page Title",
    toc: [
        { title: "Section 1", link: "#section-1" },
        { title: "Section 2", link: "#section-2" }
    ],
    content: content,
    contributors: ["YourUsername"]
};
</pre></code>

    <p>After you're done creating the page, you have to register it in the <span class="highlight">frontend/public/src/js/registry.js</span> file and also update the <span class="highlight">frontend/index.ejs</span> file.</p>

    <h3>registry.js Example</h3>
<pre class="language-js"><code>import yourPage from './your-page.js';
window.pageManager.registerPage('your-page', yourPage);
</pre></code>
    <h3>index.ejs Example</h3>
<pre class="language-html"><code>&lt;a href="your-page" class="nav-link" data-page="your-page"&gt;Your Page Title&lt;/a&gt;
</pre></code>
</div>

<hr>

<div class="content-section">
    <h2 id="help">Need Help?</h2>
    <p>If you have any questions or need assistance, feel free to reach out to us on our <a href="https://discord.gg/8xQXBbCa8R" target="_blank" class="link">Discord server</a> or open an issue on the <a href="https://github.com/Kalbskinder/ModWizard-Docs/issues" target="_blank" class="link">GitHub repository</a>.</p>
`;

const page = {
    title: "Contributing to ModWizard Documentation",
    toc: [
        { title: "Contribution Guide", link: "#guide" },
        { title: "Page Structure", link: "#page-structure" },
        { title: "Adding New Pages", link: "#new-pages" },
        { title: "Need Help?", link: "#help" }
    ],
    content: content,
    contributors: ["Kalbskinder"]
};

export default page;