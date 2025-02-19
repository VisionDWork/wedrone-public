document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("../content/docs/documents.json");
        const documents = await response.json();

        const documentsGrid = document.getElementById("documents-grid");

        documents.forEach((doc) => {
            const link = document.createElement("a");
            link.className = "document-item";

            const icon = document.createElement("img");
            icon.src = "../content/images/pdf-icon-black.png";
            icon.style.filter = "invert(1)";
            icon.alt = doc.type;
            
            const name = document.createElement("p");
            name.textContent = doc.name;
            
            link.onmouseover = () => {
                icon.src = "../content/images/pdf-icon.png";
                icon.style.filter = "invert(0)";
            }
            link.onmouseleave = () => {
                icon.src = "../content/images/pdf-icon-black.png"
                icon.style.filter = "invert(1)";
            };
            link.href = `/content/docs/${doc.fileName}`;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.appendChild(icon);
            link.appendChild(name);
            link.style.textDecoration = "none";

            documentsGrid.appendChild(link);
        });
    } catch (error) {
        console.error("Error loading documents:", error);
    }
});

