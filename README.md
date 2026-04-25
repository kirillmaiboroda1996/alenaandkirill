# Сайт-приглашение · Кирилл & Алена · 13.06.2026

Одностраничный статический сайт. Без сборки, без бэкенда.

## Локальный запуск

```bash
python3 -m http.server 8000
```

Открыть http://localhost:8000

## Что нужно заменить перед публикацией

### 1. Музыка
Положите свой mp3 в `assets/audio/bg.mp3` (перезапишите файл).
Рекомендуемая длина файла — от 2 минут, битрейт 128–192 kbps (меньше размер — быстрее загрузка).

**Где взять royalty-free**: pixabay.com/music, freemusicarchive.org, youtube.com/audiolibrary.
Не используйте коммерческие треки (Spotify/Apple Music) — это нарушение авторских прав.

### 2. RSVP-форма
1. Создайте форму на https://forms.google.com (поля: имя, присутствие, пищевые ограничения, напитки)
2. Нажмите **Отправить** → иконка `< >` (embed)
3. Скопируйте `src` из iframe-тега
4. В [index.html](index.html) найдите `data-rsvp-src` и замените URL
5. Ответы автоматически ложатся в связанную Google Таблицу

### 3. Место, тайминг, контакты
В [index.html](index.html) поищите по `TODO` и замените:
- название и адрес площадки (секция `.venue`)
- время в таймлайне (`.timeline`)
- имя, телефон, ссылки WhatsApp/Telegram свидетельницы (`.contact`)
- запросы в ссылках на карты — вставьте точный адрес вместо `Место%20проведения%20свадьбы`

### 4. Фото (если нужны)
Положите в `assets/images/` и добавьте `<img>` в нужную секцию.

### 5. Палитра дресс-кода
В [index.html](index.html) секция `.palette` — поменяйте hex-цвета в `style="background:#..."`.

## Деплой

### Netlify (проще всего)
1. Открыть https://app.netlify.com/drop
2. Перетащить папку проекта в окно браузера
3. Получить ссылку вида `https://xxx.netlify.app`
4. (Опционально) Site settings → Change site name → придумать свой поддомен

### GitHub Pages
1. Создать репозиторий на GitHub
2. Запушить этот проект: `git init && git add . && git commit -m "init" && git remote add origin ... && git push`
3. Settings → Pages → Source: `main` / `/ (root)` → Save
4. Получить ссылку `https://USERNAME.github.io/REPO/`

## Структура

```
.
├── index.html          # вся разметка
├── styles/main.css     # стили
├── scripts/
│   ├── countdown.js    # таймер до 13.06.2026 16:00
│   └── audio.js        # управление фоновой музыкой
└── assets/
    ├── audio/bg.mp3    # положите сюда музыку
    ├── images/         # сюда фото
    └── icons/          # иконки (сейчас все inline-SVG в html)
```
