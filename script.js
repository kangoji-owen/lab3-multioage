document.getElementById("themeToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark" : "light"
  );
});

// Persist theme across pages
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  }
});

// Contact form validation
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (!name || !message) {
    alert("Please fill out all fields.");
  } else {
    document.getElementById(
      "response"
    ).innerText = `Thanks, ${name}. We'll get back to you soon!`;
    e.target.reset();
  }
});

// Fetch API users list
document.getElementById("loadUsersBtn")?.addEventListener("click", async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });
  } catch (err) {
    console.error("Failed to load users:", err);
  }
});

// FAQ toggle
document.querySelectorAll(".question")?.forEach((q) => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("visible");
  });
});
