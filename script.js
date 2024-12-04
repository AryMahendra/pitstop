// Pilih semua input radio untuk tema
const themeRadios = document.querySelectorAll('input[name="theme"]');

// Tambahkan event listener ke setiap radio button
themeRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});
