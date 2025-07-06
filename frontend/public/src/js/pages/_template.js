const content = `
<div class="content-section">
    <h1>Page Title</h1>
    <p>Short description of the page content.</p>
</div>

<hr>

<div class="content-section">
    <h2 id="section-1">Section 1</h2>
    <p>Content for section 1 goes here.</p>
</div>
`;

const page = {
    title: "Page Title",
    toc: [
        { title: "Section 1", link: "#section-1" },
        { title: "<span class='subsection'>Section 2</span>", link: "#section-2" }
    ],
    content: content,
    contributors: ["YourUsername"] // Don't forget to add your GitHub profile image in the contributors folder
};

export default page;