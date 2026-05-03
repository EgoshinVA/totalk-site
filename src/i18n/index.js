import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        features: 'Features',
        how: 'How it works',
        download: 'Download',
      },
      hero: {
        badge: 'Voice-first task manager',
        title: 'Speak your tasks.',
        titleAccent: 'AI does the rest.',
        subtitle: 'Hold the button, say what needs to be done — ToTalk transcribes, structures and schedules your task in seconds.',
        cta: 'Download APK',
        ctaSecondary: 'See how it works',
      },
      features: {
        title: 'Everything you need.',
        subtitle: 'Built for speed. Designed for clarity.',
        items: [
          {
            title: 'Voice to task',
            desc: 'Speak naturally. AI extracts title, time and recurrence automatically.',
          },
          {
            title: 'Smart reminders',
            desc: 'Get notified 5, 15 or 30 minutes before — even when the app is closed.',
          },
          {
            title: 'Instant sync',
            desc: 'Tasks appear in real-time via WebSocket. No refresh needed.',
          },
          {
            title: 'Gesture control',
            desc: 'Swipe left to delete, tap to complete. Fast and intuitive.',
          },
          {
            title: 'Secure auth',
            desc: 'JWT with auto-refresh. Your data stays yours.',
          },
          {
            title: 'Dark by default',
            desc: 'Purple accent. Easy on the eyes at any hour.',
          },
        ],
      },
      how: {
        title: 'Three seconds to a task.',
        steps: [
          { title: 'Hold', desc: 'Press and hold the record button.' },
          { title: 'Speak', desc: 'Say your task naturally — with time, date or recurrence.' },
          { title: 'Done', desc: 'AI structures it. Task appears instantly.' },
        ],
      },
      showcase: {
        title: 'See it in action.',
        items: [
          { title: 'Voice recording', desc: 'Hold to record, release to create' },
          { title: 'Task management', desc: 'Swipe, complete, organize' },
          { title: 'Quick registration', desc: 'Three steps to get started' },
        ],
      },
      download: {
        title: 'Ready to try?',
        subtitle: 'Download the APK and install on your Android device.',
        cta: 'Download APK',
        note: 'Android 8.0+ required. Free and open source.',
        github: 'View on GitHub',
      },
      footer: {
        tagline: 'Voice-first task manager powered by local AI.',
        links: 'Links',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms',
        madeWith: 'Made with',
        by: 'by',
      },
    },
  },
  ru: {
    translation: {
      nav: {
        features: 'Возможности',
        how: 'Как работает',
        download: 'Скачать',
      },
      hero: {
        badge: 'Голосовой таск-менеджер',
        title: 'Говори задачи.',
        titleAccent: 'ИИ сделает остальное.',
        subtitle: 'Удержи кнопку, скажи что нужно сделать — ToTalk расшифрует, структурирует и запланирует задачу за секунды.',
        cta: 'Скачать APK',
        ctaSecondary: 'Посмотреть как работает',
      },
      features: {
        title: 'Всё что нужно.',
        subtitle: 'Создан для скорости. Спроектирован для ясности.',
        items: [
          {
            title: 'Голос в задачу',
            desc: 'Говори естественно. ИИ автоматически извлекает название, время и повторение.',
          },
          {
            title: 'Умные напоминания',
            desc: 'Уведомление за 5, 15 или 30 минут — даже когда приложение закрыто.',
          },
          {
            title: 'Мгновенная синхронизация',
            desc: 'Задачи появляются в реальном времени через WebSocket. Без обновления страницы.',
          },
          {
            title: 'Жесты',
            desc: 'Свайп влево для удаления, тап для выполнения. Быстро и интуитивно.',
          },
          {
            title: 'Безопасная авторизация',
            desc: 'JWT с авто-обновлением. Твои данные — только твои.',
          },
          {
            title: 'Тёмная тема',
            desc: 'Фиолетовый акцент. Комфортно для глаз в любое время.',
          },
        ],
      },
      how: {
        title: 'Три секунды до задачи.',
        steps: [
          { title: 'Удержи', desc: 'Нажми и удержи кнопку записи.' },
          { title: 'Скажи', desc: 'Произнеси задачу — со временем, датой или повторением.' },
          { title: 'Готово', desc: 'ИИ структурирует её. Задача появляется мгновенно.' },
        ],
      },
      showcase: {
        title: 'Смотри как это работает.',
        items: [
          { title: 'Голосовая запись', desc: 'Удержи для записи, отпусти для создания' },
          { title: 'Управление задачами', desc: 'Свайп, выполнение, организация' },
          { title: 'Быстрая регистрация', desc: 'Три шага чтобы начать' },
        ],
      },
      download: {
        title: 'Готов попробовать?',
        subtitle: 'Скачай APK и установи на Android.',
        cta: 'Скачать APK',
        note: 'Требуется Android 8.0+. Бесплатно и открытый исходный код.',
        github: 'Смотреть на GitHub',
      },
      footer: {
        tagline: 'Голосовой таск-менеджер на локальном ИИ.',
        links: 'Ссылки',
        legal: 'Правовое',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия',
        madeWith: 'Сделано с',
        by: 'by',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
