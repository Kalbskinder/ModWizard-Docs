const content = `
<div class="content-section">
    <h1>Developer Guides</h1>
    <p>This page provides guides for developers who want to contribute to the ModWizard documentation.<p>
</div>

<hr>

<div class="content-section">
    <h2 id="page-components">Page Components</h2>
    <p>There are several components that you can use to create your documentation pages:</p>
    <ul>
        <li>Info Banner</li>
        <li>Highlight</li>
        <li>Code Block</li>
    </ul>
</div>

<hr>

<div class="content-section">
    <h2 id="info-banner">Info Banner</h2>
    <p>The Info Banner is a component that displays important information at the top of the page.</p>
    <h3>Example:</h3>
    <div class="info-banner">
        <div class="info-banner-title">INFO</div>
        <div class="info-banner-content">
            This is an info banner.
        </div>
    </div>

    <h3>Usage:</h3>
<pre class="language-html"><code>&lt;div class="info-banner"&gt;
    &lt;div class="info-banner-title"&gt;INFO&lt;/div&gt;
    &lt;div class="info-banner-content"&gt;
        This is an info banner.
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

<hr>

<div class="content-section">
    <h2 id="highlight">Highlight</h2>
    <p>The Highlight component is used to draw attention to specific content within the page.</p>
    <h3>Example:</h3>
    <p>This is a <span class="highlight">highlighted text</span> that stands out.</p>
    <h3>Usage:</h3>
<pre class="language-html"><code>This is a &lt;span class="highlight"&gt;highlighted text&lt;/span&gt; that stands out.</code></pre>
</div>

<hr>

<div class="content-section">
    <h2 id="code-block">Code Block</h2>
    <p>The Code Block component is used to display code snippets in a formatted manner.</p>
    <h3>Example:</h3>
    <pre class="language-html"><code>&lt;pre class="language-js"&gt;
    &lt;code&gt;
        const message = "Hello, World!";
        console.log(message);
    &lt;/code&gt;
&lt;/pre&gt;</code></pre>

    <h3>Usage:</h3>
<pre class="language-html"><code>&lt;pre class="language-js"&gt;
    &lt;code&gt;
        const message = "Hello, World!";
        console.log(message);
    &lt;/code&gt;
&lt;/pre&gt;</code></pre>

    <p>The class <span class="highlight">language-js</span> is used to specify the language of the code block for syntax highlighting. You can replace <span class="highlight">language-js</span> with the appropriate language class for your code snippets.</p>

</div>

<hr>

<div class="content-section">
    <h2 id="toc-guide">TOC - Table of Contents</h2>
    <p>The Table of Contents (TOC) is automatically generated based on the provided array of objects in your page content.</p>
    <p>Each object in the array should have a <span class="highlight">title</span> and a <span class="highlight">link</span> property. The <span class="highlight">link</span> should be the ID of the section it refers to, prefixed with a hash (#).</p>

    <h3>Subheadings</h3>
    <p>Subheadings can be created by using the <span class="highlight">&lt;span class="subsection"&gt;</span></span> tag within the title. This will style the subheading differently in the TOC.</p>

</div>

<hr>

<div class="content-section">
    <h2 id="page-sections-guide">Page Sections</h2>
    <p>Each section of the page should have a unique ID that matches the link in the TOC. This allows users to navigate directly to that section when they click on the TOC link.</p>
    <p>You can create a section by using this structure:</p>
<pre class="language-html"><code>&lt;div class="content-section"&gt;
    &lt;h2 id="section-id"&gt;Section Title&lt;/h2&gt;
    &lt;p&gt;Section content goes here.&lt;/p&gt;
&lt;/div&gt;</code></pre>
    <p>Make sure to replace <span class="highlight">section-id</span> with a unique identifier for that section.</p>
</div>

<hr>

<div class="content-section">
    <h2 id="page-authors-guide">Page Authors</h2>
    <p>Each page should have a <span class="highlight">contributors</span> array that lists the usernames of the contributors who worked on the page. This helps acknowledge their contributions.</p>
    <p>The name should be the GitHub username of the contributor, and it will be displayed at the bottom of the page.</p>

    <h3>Profile Image</h3>
    <p>Each contributor's image is saved in the <span class="highlight">frontend/public/src/img/contributors/</span> folder. The image file should be named after the GitHub username of the contributor.</p>
    <p>You should use your GitHub profile image as your contributor image.</p>
</div>
`;

const page = {
    title: "Developer Guides",
    toc: [
        { title: "Page Components", link: "#page-components" },
        { title: "<span class='subsection'>Info Banner</span>", link: "#info-banner" },
        { title: "<span class='subsection'>Highlight</span>", link: "#highlight" },
        { title: "<span class='subsection'>Code Block</span>", link: "#code-block" },
        { title: "Creating sections", link: "#page-sections-guide" },
        { title: "TOC - Table of Contents", link: "#toc-guide" }
    ],
    content: content,
    contributors: ["Kalbskinder"]
};

export default page;