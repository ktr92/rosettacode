/**
 * 
=== СЕССИЯ ПОДГОТОВКИ: FRONTEND PERFORMANCE & EVENT LOOP ===
Контекст: Кандидат готовится к секции технических вопросов на позицию Middle+/Senior Frontend Developer. Полностью пройден и отработан на коде блок оптимизации производительности UI.

ЧТО МЫ УЖЕ РАЗОБРАЛИ И ЗАКРЕПИЛИ НА ПРАКТИКЕ (100% готовность):
1. Способы борьбы с фризами Main Thread браузера (Web Workers, Time Slicing).
2. Написание кроссбраузерного полифилла для requestIdleCallback с откатом на setTimeout(0) для Safari.
3. Полный разбор Event Loop: жесткие приоритеты очередей Макрозадач, Микрозадач и Render Pipeline (requestAnimationFrame). Успешно решена классическая «задача-капкан» на порядок вывода логов (включая синхронный код конструктора Promise, resolve() без return, async/await).
4. Утечки памяти (Garbage Collection, алгоритм Mark-and-Sweep). Отработаны 5 сценариев утечек: таймеры, глобальные обработчики, отсоединенный DOM, неявные глобальные переменные и замыкания (включая "Эффект Метеора" в V8). Изучен инструмент WeakMap.
5. Финальный хардкорный кейс: написана многопоточная real-time архитектура для Dashboard с частым рендерингом (DocumentFragment + мутации DOM через точечное удаление по условию while) и фоновым анализом тяжелых данных через Web Workers с устранением Race Condition (копирование архива перед отправкой).

СЛЕДУЮЩИЙ ШАГ (Выберите одну из тем для продолжения):
1. Продвинутый Async/Await и Promise (allSettled, any, race, скрытые капканы обработки ошибок в асинхронном JS).
2. Глубокое устройство Прототипов (Prototype) и прототипного наследования в JavaScript.
3. Тонкости контекста вызова: this, методы bind, call, apply и магия стрелочных функций.
=== КОНЕЦ КОНТЕКСТА. ЖДУ КОМАНДЫ ДЛЯ СЛЕДУЮЩЕГО ШАГА ===


Вы разрабатываете фронтенд для мониторинга серверов компании. Каждые 200 миллисекунд по веб-сокету (или через эмуляцию) в приложение прилетает пачка из 300 новых логов (строк текста) со статусами систем.
Бизнес-требования:
1. Приложение должно работать без фризов 24/7 на любых ноутбуках сотрудников (интерфейс должен оставаться отзывчивым, кнопки должны кликаться мгновенно).
2. На экране в специальном блоке div должны отображаться только последние 50 логов в реальном времени (старые логи должны удаляться из DOM, чтобы страница не раздувалась).
3. Раз в 30 секунд приложение должно брать вообще все накопившиеся за это время логи (их будет около 45 000), запускать по ним тяжелую функцию текстового анализа analyzeLogs(allLogs) (которая ищет критические ошибки регулярными выражениями), и выводить массив найденных ошибок в консоль. Сама функция analyzeLogs выполняется в JS около 600 миллисекунд, что гарантированно вешает вкладку, если запустить её «в лоб».



 * 
 */

// Функция имитирует тяжелый анализ массива строк (не менять её внутренности)

// Поток данных (каждые 200мс прилетает 300 строк)
let allLogsArchive = [];
const logContainer = document.getElementById("logs-view");

let interval200ms = setInterval(() => {
  const newLogs = Array.from(
    { length: 300 },
    (_, i) => `Log_Status_OK_${Date.now()}_${i}`,
  );

  const fragment = document.createDocumentFragment();

  const logsToRender = newLogs.slice(-50);
  let logsCount = logContainer.children.length;

  for (const log of logsToRender) {
    const p = document.createElement("p");
    p.textContent = log;

    if (logsCount > 50 && logContainer.firstChild) {
      logContainer.firstChild.remove();
    }
    fragment.appendChild(p);
  }
  logContainer.appendChild(fragment);

  // Копим логи для аналитики
  allLogsArchive.push(...newLogs);
}, 200);

// Аналитика раз в 30 секунд
const worker = new Worker("worker.js");

let interval30s = setInterval(() => {
  // Чтобы не фризить поток клонированием массива из 45000 объектов,
  // мы делаем неглубокую копию (срез) текущего архива.
  const dataCopy = allLogsArchive.slice();

  // Мгновенно очищаем память в основном потоке, не дожидаясь ответа воркера.
  // Это защищает от ситуации, когда за время работы воркера (600мс) набегут новые логи и сотрутся.
  allLogsArchive = [];

  worker.postMessage(dataCopy);
}, 30000);

worker.onmessage = (e) => {
  console.log("Критические ошибки:", e.data);
};

//worker.js

self.onmessage = (e) => {
  const errors = analyzeLogs(e.data);
  self.postMessage(errors);
};

function analyzeLogs(logsArray) {
  const start = performance.now();
  while (performance.now() - start < 600) {
    // Тяжелая математика и парсинг текста, которая вешает поток на 600мс
    Math.sqrt(Math.random());
  }
  return logsArray.filter((log) => log.includes("CRITICAL_ERROR"));
}
