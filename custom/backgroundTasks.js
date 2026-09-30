/**
 * Вы разрабатываете фронтенд для мониторинга серверов компании. Каждые 200 миллисекунд по веб-сокету (или через эмуляцию) в приложение прилетает пачка из 300 новых логов (строк текста) со статусами систем.
Бизнес-требования:
1. Приложение должно работать без фризов 24/7 на любых ноутбуках сотрудников (интерфейс должен оставаться отзывчивым, кнопки должны кликаться мгновенно).
2. На экране в специальном блоке div должны отображаться только последние 50 логов в реальном времени (старые логи должны удаляться из DOM, чтобы страница не раздувалась).
3. Раз в 30 секунд приложение должно брать вообще все накопившиеся за это время логи (их будет около 45 000), запускать по ним тяжелую функцию текстового анализа analyzeLogs(allLogs) (которая ищет критические ошибки регулярными выражениями), и выводить массив найденных ошибок в консоль. Сама функция analyzeLogs выполняется в JS около 600 миллисекунд, что гарантированно вешает вкладку, если запустить её «в лоб».
 * 
 */


// Функция имитирует тяжелый анализ массива строк (не менять её внутренности)
function analyzeLogs(logsArray) {
  const start = performance.now();
  while (performance.now() - start < 600) {
    // Тяжелая математика и парсинг текста, которая вешает поток на 600мс
    Math.sqrt(Math.random());
  }
  return logsArray.filter(log => log.includes("CRITICAL_ERROR"));
}

// Поток данных (каждые 200мс прилетает 300 строк)
let allLogsArchive = [];
const logContainer = document.getElementById('logs-view');

setInterval(() => {
  const newLogs = Array.from({ length: 300 }, (_, i) => `Log_Status_OK_${Date.now()}_${i}`);
  
  // 💥 ПРОБЛЕМА 1: Этот код обновления UI вызывает дикие лаги
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('p');
    p.textContent = newLogs[i];
    fragment.appendChild(p);
  }
  logContainer.innerHTML = "";
  logContainer.appendChild(fragment)
  
  // Копим логи для аналитики
  allLogsArchive.push(...newLogs);
}, 200);

// Аналитика раз в 30 секунд
setInterval(() => {
  // 💥 ПРОБЛЕМА 2: Этот вызов намертво фризит UI на 600 миллисекунд
  const errors = analyzeLogs(allLogsArchive);
  console.log("Критические ошибки:", errors);
  
  allLogsArchive = []; // Сброс
}, 30000);
