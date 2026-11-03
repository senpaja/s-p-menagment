(() => {
  const screen = document.createElement('div');
  screen.className = 'welcome-screen';
  screen.setAttribute('role', 'status');
  screen.setAttribute('aria-live', 'polite');
  screen.innerHTML = '<div class="welcome-panel"><span class="welcome-logo"><img src="assets/smile-logo-source.png" alt=""></span><h1 class="welcome-title">Welcome to<br><em>S&amp;P Managment</em></h1><p class="welcome-caption">People first · Conversations that count</p></div>';
  document.body.append(screen);

  const dismiss = () => {
    screen.classList.add('is-leaving');
    window.setTimeout(() => screen.remove(), 550);
  };
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) dismiss();
  else window.setTimeout(dismiss, 2450);
})();
