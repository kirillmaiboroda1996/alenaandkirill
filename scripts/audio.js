(function () {
  const audio = document.getElementById('bg-audio');
  const toggle = document.getElementById('audio-toggle');
  if (!audio || !toggle) return;

  const KEY = 'wedding-audio-playing';

  function setPlaying(playing) {
    toggle.classList.toggle('is-playing', playing);
    toggle.setAttribute('aria-pressed', playing ? 'true' : 'false');
  }

  toggle.addEventListener('click', async () => {
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
        localStorage.setItem(KEY, '1');
      } catch (err) {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
      localStorage.setItem(KEY, '0');
    }
  });

  // Попытаться восстановить состояние — но autoplay обычно блокирован
  // до первого жеста пользователя, поэтому запустим после первого клика в любом месте
  if (localStorage.getItem(KEY) === '1') {
    const resume = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (_) { /* ignore */ }
      document.removeEventListener('click', resume);
    };
    document.addEventListener('click', resume, { once: true });
  }

  audio.addEventListener('play', () => setPlaying(true));
  audio.addEventListener('pause', () => setPlaying(false));
})();
