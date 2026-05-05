  // ── Nav scroll ──
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── Hamburger ──
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }
  function closeMenu() {
    document.getElementById('navLinks').classList.remove('open');
  }

  // ── Skills ──
  const skills = [
    { name: 'TypeScript',            pct: 90 },
    { name: 'React',                 pct: 90 },
    { name: 'Diseño Web',            pct: 90 },
    { name: 'APIs REST',             pct: 90 },
    { name: 'Git & GitHub',          pct: 96 },
    { name: 'CSS',                   pct: 85 },
    { name: 'HTML',                  pct: 86 },
    { name: 'Node.js + Express',     pct: 79 },
    { name: 'Docker',                pct: 80 },
    { name: 'JavaScript',            pct: 75 },
    { name: 'Optimización de BD',    pct: 75 },
  ];

  const sg = document.getElementById('skillsGrid');
  skills.forEach(s => {
    sg.innerHTML += `
      <div class="skill-item">
        <div class="skill-top">
          <span class="skill-name">${s.name}</span>
          <span class="skill-pct">${s.pct}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" data-w="${s.pct}%"></div>
        </div>
      </div>`;
  });

  // Animate skill bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.skill-fill').forEach(el => el.style.width = el.dataset.w);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(document.getElementById('habilidades'));

  // ── Projects ──
  const colors = ['#6ee7b7','#a78bfa','#f9a8d4','#fcd34d','#93c5fd','#86efac','#fb923c','#e879f9'];
  const projects = [
    {
      name: 'Tasly', icon: '✅',
      desc: 'App de tareas, metas y frases con mensajes inteligentes y seguimiento de progreso.',
      tags: ['React','Node.js','TypeScript'], cat: ['app','api'],
      url: '#'
    },
    {
      name: 'Connected Social Media', icon: '🔗',
      desc: 'Red social tipo comunidad con perfiles, publicaciones e interacciones en tiempo real.',
      tags: ['React','Supabase','TypeScript'], cat: ['app'],
      url: '#'
    },
    {
      name: 'LuckyDrawHub', icon: '🎯',
      desc: 'Plataforma de rifas en línea con sistema de sorteos y gestión de participantes.',
      tags: ['Node.js','React','PostgreSQL'], cat: ['app','api'],
      url: '#'
    },
    {
      name: 'Manhatam Restaurante', icon: '🍽️',
      desc: 'Sitio web informativo para restaurante con menú, reservas y diseño atractivo.',
      tags: ['HTML','CSS','JavaScript'], cat: ['js'],
      url: '#'
    },
    {
      name: 'Hangman Game', icon: '🎮',
      desc: 'Juego del ahorcado con lógica personalizada y diseño responsivo.',
      tags: ['JavaScript','CSS'], cat: ['js'],
      url: '#'
    },
    {
      name: 'Portal de Noticias', icon: '📰',
      desc: 'Frontend que consume una API de noticias en tiempo real de Colombia.',
      tags: ['React','REST API'], cat: ['app','js'],
      url: '#'
    },
    {
      name: 'Auth System', icon: '🔐',
      desc: 'Sistema de autenticación completo con login y sesiones persistentes front + back.',
      tags: ['Node.js','Express','JWT'], cat: ['api'],
      url: '#'
    },
    {
      name: 'CENU – DANE', icon: '📊',
      desc: 'Sistema de gestión de datos educativos para el DANE.',
      tags: ['TypeScript','Node.js'], cat: ['api'],
      url: '#'
    },
  ];

  const filters = [
    { label: 'Todos', value: 'all' },
    { label: 'Apps',  value: 'app' },
    { label: 'Node.js / API', value: 'api' },
    { label: 'JavaScript', value: 'js' },
  ];

  const fb = document.getElementById('filterBar');
  filters.forEach(f => {
    const b = document.createElement('button');
    b.className = 'filter-btn' + (f.value === 'all' ? ' active' : '');
    b.textContent = f.label;
    b.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      renderProjects(f.value);
    };
    fb.appendChild(b);
  });

  function renderProjects(cat) {
    const pg = document.getElementById('projectsGrid');
    pg.innerHTML = '';
    projects
      .filter(p => cat === 'all' || p.cat.includes(cat))
      .forEach((p, i) => {
        const c = colors[i % colors.length];
        pg.innerHTML += `
          <a class="project-card" href="${p.url}" target="_blank">
            <div class="project-card-top">
              <div class="project-icon" style="background:${c}1a;border:1px solid ${c}30">${p.icon}</div>
              <div class="project-name">${p.name}</div>
              <div class="project-desc">${p.desc}</div>
            </div>
            <div class="project-card-bottom">
              ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
          </a>`;
      });
  }
  renderProjects('all');

  // ── Form submit (conecta con tu backend o Formspree) ──
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.textContent = '¡Enviado! ✓';
    btn.style.background = '#6ee7b7';
    setTimeout(() => {
      btn.textContent = 'Enviar mensaje →';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }