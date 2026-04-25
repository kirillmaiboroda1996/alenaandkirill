(function () {
  const TARGET = new Date('2026-06-13T16:00:00+03:00').getTime();

  const nodes = {
    days: document.querySelector('[data-unit="days"]'),
    hours: document.querySelector('[data-unit="hours"]'),
    minutes: document.querySelector('[data-unit="minutes"]'),
    seconds: document.querySelector('[data-unit="seconds"]'),
  };

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function tick() {
    const diff = TARGET - Date.now();

    if (diff <= 0) {
      nodes.days.textContent = '0';
      nodes.hours.textContent = '00';
      nodes.minutes.textContent = '00';
      nodes.seconds.textContent = '00';
      return false;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    nodes.days.textContent = days;
    nodes.hours.textContent = pad(hours);
    nodes.minutes.textContent = pad(minutes);
    nodes.seconds.textContent = pad(seconds);
    return true;
  }

  tick();
  const id = setInterval(() => {
    if (!tick()) clearInterval(id);
  }, 1000);
})();
