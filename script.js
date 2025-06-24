// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.onclick = () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

// Load project cards
fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('project-list');
    projects.forEach(project => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      container.appendChild(div);
    });
  });
