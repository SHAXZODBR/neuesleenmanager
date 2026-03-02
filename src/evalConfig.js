import { questionsPool } from './questionsPool';

export const evalConfig = [
    {
        sectionId: 's1',
        weight: 30,
        questions: [
            {
                id: 'q1_1',
                title: { uz: 'Dossier topshirish muddati', ru: 'Срок подачи досье' },
                options: [
                    { text: { uz: "Vaqtida va xatosiz", ru: "Вовремя и без ошибок" }, score: 100 },
                    { text: { uz: "Kichik kechikishlar bilan", ru: "С небольшими задержками" }, score: 50 },
                    { text: { uz: "Muntazam kechikishlar", ru: "Регулярные задержки" }, score: 0 }
                ]
            },
            {
                id: 'q1_2',
                title: { uz: "Yangi dori vositalarini ro'yxatdan o'tkazish (soni)", ru: "Регистрация новых ЛС (количество)" },
                options: [
                    { text: { uz: "Reja bajarildi", ru: "План выполнен" }, score: 100 },
                    { text: { uz: "Qisman bajarildi", ru: "Выполнено частично" }, score: 50 },
                    { text: { uz: "Bajarilmadi", ru: "Не выполнено" }, score: 0 }
                ]
            }
        ]
    },
    {
        sectionId: 's2',
        weight: 20,
        questions: [
            {
                id: 'q2_1',
                title: { uz: "Normativ hujjatlardagi o'zgarishlarni kuzatish", ru: "Мониторинг изменений в нормативных актах" },
                options: [
                    { text: { uz: "Doimiy va aniq", ru: "Постоянно и точно" }, score: 100 },
                    { text: { uz: "Vaqti-vaqti bilan", ru: "Время от времени" }, score: 50 },
                    { text: { uz: "E'tiborsiz", ru: "Игнорируется" }, score: 0 }
                ]
            }
        ]
    },
    {
        sectionId: 's3',
        weight: 15,
        questions: [
            {
                id: 'q3_1',
                title: { uz: "Qayta ro'yxatdan o'tkazish jarayonlarini boshqarish", ru: "Управление процессами перерегистрации" },
                options: [
                    { text: { uz: "Effektiv boshqariladi", ru: "Эффективно управляется" }, score: 100 },
                    { text: { uz: "Qiyinchiliklar bilan", ru: "С трудностями" }, score: 50 },
                    { text: { uz: "Boshqaruvsiz", ru: "Без управления" }, score: 0 }
                ]
            }
        ]
    },
    {
        sectionId: 's4',
        weight: 15,
        questions: [
            {
                id: 'q4_1',
                title: { uz: "So'rovlarga javob berish tezligi va sifati", ru: "Скорость и качество ответов на запросы" },
                options: [
                    { text: { uz: "Tezkor va sifatli", ru: "Быстро и качественно" }, score: 100 },
                    { text: { uz: "Qoniqarli", ru: "Удовлетворительно" }, score: 50 },
                    { text: { uz: "Sekin va sifatsiz", ru: "Медленно и некачественно" }, score: 0 }
                ]
            }
        ]
    },
    {
        sectionId: 's5',
        weight: 20,
        questions: [
            {
                id: 'q5_1',
                title: { uz: "Normativ ma'lumotlar va yangi qoidalarni bajarish", ru: "Выполнение нормативных данных и новых правил" },
                options: [
                    { text: { uz: "O'z vaqtida va to'liq amalga oshirildi", ru: "Выполнено своевременно и в полном объеме" }, score: 100 },
                    { text: { uz: "Qisman bajarilgan yoki kechikishlar bilan", ru: "Выполнено частично или с задержками" }, score: 50 },
                    { text: { uz: "Yangi tartiblar umuman amalga oshirilmadi", ru: "Новые процедуры не внедрены вовсе" }, score: 0 }
                ]
            },
            {
                id: 'q5_2',
                title: { uz: "O'zaro ko'mak va hujjatlar sifati", ru: "Взаимная помощь и качество документов" },
                options: [
                    { text: { uz: "Mukammal darajada", ru: "На отличном уровне" }, score: 100 },
                    { text: { uz: "Qoniqarli darajada", ru: "На удовлетворительном уровне" }, score: 50 },
                    { text: { uz: "Qoniqarsiz", ru: "Неудовлетворительно" }, score: 0 }
                ]
            }
        ]
    }
];

export const getRating = (totalScore) => {
    if (totalScore >= 90) return 'outstanding';
    if (totalScore >= 80) return 'veryGood';
    if (totalScore >= 70) return 'satisfactory';
    if (totalScore >= 60) return 'needsImprovement';
    return 'unsatisfactory';
};

export const decisionTestConfig = questionsPool;
