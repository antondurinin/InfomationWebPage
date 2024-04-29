document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const data = [
    { title: "Title 1", content: "Content 1", updateInterval: 1 },
    { title: "Title 2", content: "Content 2", updateInterval: 1 },
    { title: "Title 1", content: "Content 3", updateInterval: 1 },
    { title: "Title 2", content: "Content 4", updateInterval: 1 },
    { title: "Title 1", content: "Content 5", updateInterval: 1 },
    { title: "Title 2", content: "Content 6", updateInterval: 1 },
    // Add more objects as needed
  ];

  data.forEach((item, index) => {
    const titleBox = document.createElement("div");
    titleBox.className = "title-box";

    const header = document.createElement("div");
    header.className = "title-header";
    header.innerHTML = `
            <div>
                <h2>${item.title}</h2>
            </div>
            <div>
                <button class="update-button" onclick="updateContent(${index})">Update</button>
                <button class="start-button" onclick="startAutoUpdate(${index})">Start</button>
                <button class="stop-button" onclick="stopAutoUpdate(${index})">Stop</button>
            </div>
        `;

    const contentParagraph = document.createElement("p");
    contentParagraph.textContent = item.content;

    titleBox.appendChild(header);
    titleBox.appendChild(contentParagraph);
    container.appendChild(titleBox);

    let intervalId = null;

    window.startAutoUpdate = function (index) {
      intervalId = setInterval(() => {
        updateContent(index);
      }, item.updateInterval * 1000);
    };

    window.stopAutoUpdate = function (index) {
      clearInterval(intervalId);
    };

    window.updateContent = function (index) {
      const titleBox = container.children[index];
      const p = titleBox.querySelector("p");
      // change content for auto-updating
      let autoApdateContent =
        "Updated content at " + new Date().toLocaleTimeString();
      p.textContent = autoApdateContent;
    };
  });
});
