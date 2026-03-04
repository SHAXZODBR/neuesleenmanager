import { questionsPool } from './questionsPool';

// Standard KPI Sections
const kpiSections = [
    {
        sectionId: 's1',
        weight: 20,
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
        weight: 15,
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
        sectionId: 's5',
        weight: 15,
        questions: [
            {
                id: 'q5_1',
                title: { uz: "Normativ ma'lumotlar va yangi qoidalarni bajarish", ru: "Выполнение нормативных данных и новых правил" },
                options: [
                    { text: { uz: "O'z vaqtida va to'liq amalga oshirildi", ru: "Выполнено своевременно и в полном объеме" }, score: 100 },
                    { text: { uz: "Qisman bajarilgan yoki kechikishlar bilan", ru: "Выполнено частично или с задержками" }, score: 50 },
                    { text: { uz: "Yangi tartiblar umuman amalga oshirilmadi", ru: "Новые процедуры не внедрены вовсе" }, score: 0 }
                ]
            }
        ]
    }
];

// Combine into a single unified config
// We take the KPIs and append a randomized selection of 20 Decision Scenarios
export const evalConfig = [
    ...kpiSections,
    // Add Decision Scenarios as a final "Leadership & Judgment" section
    {
        sectionId: 'decision',
        weight: 50, // Decision making carries heavy weight now
        questions: [...questionsPool]
            .sort(() => 0.5 - Math.random())
            .slice(0, 20)
            .flatMap(q => q.questions) // Flatten the structure from questionsPool
    }
];

export const getRating = (totalScore) => {
    if (totalScore >= 90) return 'outstanding';
    if (totalScore >= 80) return 'veryGood';
    if (totalScore >= 70) return 'satisfactory';
    if (totalScore >= 60) return 'needsImprovement';
    return 'unsatisfactory';
};

// For backward compatibility or internal checks
export const decisionTestConfig = questionsPool;
