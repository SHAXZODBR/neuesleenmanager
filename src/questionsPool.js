export const questionsPool = [
    {
        "id": "sp1",
        "sectionId": "decision",
        "title": {
            "uz": "Data Integrity & Audit (Ssenariy 1)",
            "ru": "Data Integrity & Audit (Сценарий 1)"
        },
        "questions": [
            {
                "id": "q_sp1",
                "title": {
                    "uz": "Tahlika: Ichki auditda QP (Qualified Person) tomonidan mahsulot chiqarishdan oldin laboratoriya testlari natijalari o'zgartirilgani (Data Manipulation) aniqlandi. Mahsulot bozorga chiqib ketgan. (Case #1)",
                    "ru": "Кризис: В ходе аудита выяснилось, что QP (Qualified Person) манипулировал результатами лабораторных тестов перед выпуском. Товар уже на рынке. (Кейс #1)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Darhol bozor (Market Recall) jarayonini boshlash, QP vakolatini to'xtatish va nazorat organlariga (MoH) xabar berish",
                            "ru": "Немедленный отзыв с рынка (Recall), приостановка полномочий QP и уведомление регулятора (Минздрав)"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat kelajakdagi partiyalar uchun nazoratni kuchaytirish, mahsulotni bozorda qoldirish",
                            "ru": "Усилить контроль только для будущих партий, оставить товар на рынке"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Ichki tekshiruv tugaguncha ma'lumotni yashirish",
                            "ru": "Скрывать информацию до окончания внутреннего расследования"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp2",
        "sectionId": "decision",
        "title": {
            "uz": "Strategic Procurement (Ssenariy 2)",
            "ru": "Strategic Procurement (Сценарий 2)"
        },
        "questions": [
            {
                "id": "q_sp2",
                "title": {
                    "uz": "Strategiya: Global ta'minotchi kutilmaganda narxni 40% ga oshirdi. Sizda bor zaxira 3 oyga yetadi. Mintaqadagi yagona rasmiy diler sizsiz. (Case #2)",
                    "ru": "Стратегия: Глобальный поставщик неожиданно поднял цены на 40%. Запаса хватит на 3 месяца. Вы единственный дилер в регионе. (Кейс #2)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Mijozlar bilan narxlarni bosqichma-bosqich oshirish bo'yicha muzokaralar boshlash va muqobil yetkazib beruvchilarni qidirish",
                            "ru": "Начать переговоры с клиентами о поэтапном повышении цен и искать альтернативных поставщиков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Zaxiralarni sotishni to'xtatib, narxlar ko'tarilganini e'lon qilish",
                            "ru": "Приостановить продажи и объявить о резком повышении цен"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Eski narxda sotishda davom etib, zarar ko'rish",
                            "ru": "Продолжать продажи по старой цене в убыток"
                        },
                        "score": 2
                    }
                ]
            }
        ]
    },
    {
        "id": "sp3",
        "sectionId": "decision",
        "title": {
            "uz": "Ethics & High-Level Negotiation (Ssenariy 3)",
            "ru": "Ethics & High-Level Negotiation (Сценарий 3)"
        },
        "questions": [
            {
                "id": "q_sp3",
                "title": {
                    "uz": "Etika: Strategik mijoz (hukumat amaldori) shubhali tender shartlarini kiritmoqda va sizdan loyihani 'qo'llab-quvvatlash'ni so'rayapti. (Case #3)",
                    "ru": "Этика: Стратегический клиент (госчиновник) вводит сомнительные условия тендера и просит 'поддержать' проект. (Кейс #3)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Loyiha komplians qoidalariga zid ekanligini bildirish va qonuniy hamkorlik doirasida qolishni talab qilish",
                            "ru": "Заявить о несоответствии проекта правилам комплаенса и требовать законных рамок сотрудничества"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Qisman rozilik berish, keyinchalik xavfni baholash",
                            "ru": "Частично согласиться, оценив риски позже"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Soliqdan qochish yo'llarini izlab, shartlarni bajarish",
                            "ru": "Выполнить условия, ища пути минимизации налогов"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp4",
        "sectionId": "decision",
        "title": {
            "uz": "Pharmacovigilance Crisis (Ssenariy 4)",
            "ru": "Pharmacovigilance Crisis (Сценарий 4)"
        },
        "questions": [
            {
                "id": "q_sp4",
                "title": {
                    "uz": "Farmakonazorat: Sizning eng ko'p sotiladigan doringizdan so'ng 3 ta o'lim holati qayd etildi. Sabab-oqibat aloqasi isbotlanmagan. (Case #4)",
                    "ru": "Фармаконадзор: Зафиксировано 3 летальных случая после приема вашего самого продаваемого препарата. Связь не доказана. (Кейс #4)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Zudlik bilan savdoni to'xtatib turish, tergov boshlash va farmakologik nazorat organiga xabar berish",
                            "ru": "Приостановить продажи, начать расследование и уведомить орган фармаконадзора"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Isbot topilmaguncha savdoni davom ettirish va shifokorlarga 'ehtiyot bo'lish'ni aytish",
                            "ru": "Продолжать продажи до доказательства связи, сказав врачам быть осторожными"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni yashirish va matbuotda inkor qilish",
                            "ru": "Скрыть информацию и отрицать факты в прессе"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp5",
        "sectionId": "decision",
        "title": {
            "uz": "Logistics & Sanctions (Ssenariy 5)",
            "ru": "Logistics & Sanctions (Сценарий 5)"
        },
        "questions": [
            {
                "id": "q_sp5",
                "title": {
                    "uz": "Logistika: Banklararo blokovka tufayli chet eldagi zavodga to'lov o'tmadi. Yuk portda turibdi va sifatini yo'qotish xavfi bor. (Case #5)",
                    "ru": "Логистика: Из-за блокировки межбанковских переводов оплата заводу за рубеж не прошла. Груз в порту, есть риск потери качества. (Кейс #5)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Muqobil bank kanallarini qidirish va yukni vaqtinchalik termal omborga ko'chirishni moliyalashtirish",
                            "ru": "Искать альтернативные банковские каналы и профинансировать перемещение груза на термосклад"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Bank muammosi hal bo'lishini kutish, yukka tegmaslik",
                            "ru": "Ждать решения проблемы с банком, не трогая груз"
                        },
                        "score": 0
                    },
                    {
                        "text": {
                            "uz": "Zavoddan yukni bepul berib yuborishni iltimos qilish",
                            "ru": "Просить завод отдать груз бесплатно на доверии"
                        },
                        "score": 5
                    }
                ]
            }
        ]
    },
    {
        "id": "sp6",
        "sectionId": "decision",
        "title": {
            "uz": "HR & Internal Security (Ssenariy 6)",
            "ru": "HR & Internal Security (Сценарий 6)"
        },
        "questions": [
            {
                "id": "q_sp6",
                "title": {
                    "uz": "Xavfsizlik: Bosh texnolog patentlangan formulani raqibga sotayotgani va unga o'tishga tayyorlanayotgani haqida shubha bor. (Case #6)",
                    "ru": "Безопасность: Есть подозрение, что главный технолог продает формулу конкуренту и готовится к переходу. (Кейс #6)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "IT-audit o'tkazish, loyihalarga kirish huquqini cheklash va xavfsizlik xizmati bilan tergov o'tkazish",
                            "ru": "Провести IT-аудит, ограничить доступ к проектам и провести расследование со службой безопасности"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Uni darhol hayfsan bilan jazolash",
                            "ru": "Сразу наказать выговором"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Inkor qilib, unga ishonishda davom etish",
                            "ru": "Игнорировать подозрения, продолжая доверять"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp7",
        "sectionId": "decision",
        "title": {
            "uz": "Market Access & Pricing (Ssenariy 7)",
            "ru": "Market Access & Pricing (Сценарий 7)"
        },
        "questions": [
            {
                "id": "q_sp7",
                "title": {
                    "uz": "Narx siyosati: Davlat hayotiy muhim dorilar narxini 20% ga tushirdi. Sizning marjangiz endi nolga teng. (Case #7)",
                    "ru": "Ценовая политика: Государство снизило цены на ЖНВЛП на 20%. Ваша маржа теперь равна нулю. (Кейс #7)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Ishlab chiqaruvchi bilan narxni pasaytirish bo'yicha muzokaralar olib borish va operatsion xarajatlarni optimallashtirish",
                            "ru": "Переговоры с производителем о снижении цен и оптимизация операционных издержек"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Mahsulotni bozordan butunlay olib chiqib ketish",
                            "ru": "Полностью вывести продукт с рынка"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Noqonuniy qo'shimcha narxlar qo'shib sotish",
                            "ru": "Продавать с незаконными наценками сверху"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp8",
        "sectionId": "decision",
        "title": {
            "uz": "Compliance & GDP Maintenance (Ssenariy 8)",
            "ru": "Compliance & GDP Maintenance (Сценарий 8)"
        },
        "questions": [
            {
                "id": "q_sp8",
                "title": {
                    "uz": " GDP: Ombor mudiri sovuqxonada harorat og'ishini (Deviation) yashirib, hujjatlarni qo'lda to'g'rilab qo'ygani aniqlandi. (Case #8)",
                    "ru": "GDP: Заведующий складом скрыл отклонение температуры в холодной камере и вручную исправил документы. (Кейс #8)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimni qat'iy intizomiy jazolash (bo'shatishgacha), barcha partiyalarni karantinga olish va qayta testlar o'tkazish",
                            "ru": "Строгое дисциплинарное взыскание (вплоть до увольнения), карантин всех партий и повторные тесты"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat xodimga og'zaki tanbeh berish",
                            "ru": "Только устный выговор сотруднику"
                        },
                        "score": 2
                    },
                    {
                        "text": {
                            "uz": "Tekshiruvga qadar hujjatlarni shunday qoldirish",
                            "ru": "Оставить документы как есть до проверки"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp9",
        "sectionId": "decision",
        "title": {
            "uz": "Corporate Strategy (Ssenariy 9)",
            "ru": "Corporate Strategy (Сценарий 9)"
        },
        "questions": [
            {
                "id": "q_sp9",
                "title": {
                    "uz": "Korporativ: Kompaniya raqobatchi bilan birlashishni (Merger) rejalashtirmoqda. Xodimlar orasida vahima boshlandi va ish unumdorligi tushdi. (Case #9)",
                    "ru": "Корпоратив: Компания планирует слияние с конкурентом. Среди сотрудников началась паника, продуктивность упала. (Кейс #9)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimlar bilan ochiq muloqot o'tkazish, yangi istiqbollarni tushuntirish va kafolatlar berish",
                            "ru": "Провести открытую встречу, объяснить перспективы и дать гарантии"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni 'maxfiy' deb tasdiqlash va savollarga javob bermaslik",
                            "ru": "Подтвердить секретность и не отвечать на вопросы"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Eshma-gap tarqatganlarni darhol bo'shatish",
                            "ru": "Уволить тех, кто распространяет слухи"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp10",
        "sectionId": "decision",
        "title": {
            "uz": "Financial Risk Management (Ssenariy 10)",
            "ru": "Financial Risk Management (Сценарий 10)"
        },
        "questions": [
            {
                "id": "q_sp10",
                "title": {
                    "uz": "Moliya: Kurs o'zgarishi tufayli valyuta bilan to'lanadigan qarzlar 50% ga oshdi. Kompaniya defolt holatiga kelib qolishi mumkin. (Case #10)",
                    "ru": "Финансы: Из-за девальвации валютные долги выросли на 50%. Компании грозит дефолт. (Кейс #10)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Kreditorlar bilan to'lov muddatlarini uzaytirishni muzokara qilish, xarajatlarni qisqartirish va valyuta risklarini xedjlash",
                            "ru": "Переговоры о реструктуризации долга, сокращение расходов и хеджирование валютных рисков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Kredit olib, eski qarzni yopish",
                            "ru": "Взять новый кредит, чтобы закрыть старый"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Hech narsa qilmasdan, inqirozni o'tib ketishini kutish",
                            "ru": "Ничего не делать, ждать пока кризис пройдет"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp11",
        "sectionId": "decision",
        "title": {
            "uz": "Data Integrity & Audit (Ssenariy 11)",
            "ru": "Data Integrity & Audit (Сценарий 11)"
        },
        "questions": [
            {
                "id": "q_sp11",
                "title": {
                    "uz": "Tahlika: Ichki auditda QP (Qualified Person) tomonidan mahsulot chiqarishdan oldin laboratoriya testlari natijalari o'zgartirilgani (Data Manipulation) aniqlandi. Mahsulot bozorga chiqib ketgan. (Case #11)",
                    "ru": "Кризис: В ходе аудита выяснилось, что QP (Qualified Person) манипулировал результатами лабораторных тестов перед выпуском. Товар уже на рынке. (Кейс #11)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Darhol bozor (Market Recall) jarayonini boshlash, QP vakolatini to'xtatish va nazorat organlariga (MoH) xabar berish",
                            "ru": "Немедленный отзыв с рынка (Recall), приостановка полномочий QP и уведомление регулятора (Минздрав)"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat kelajakdagi partiyalar uchun nazoratni kuchaytirish, mahsulotni bozorda qoldirish",
                            "ru": "Усилить контроль только для будущих партий, оставить товар на рынке"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Ichki tekshiruv tugaguncha ma'lumotni yashirish",
                            "ru": "Скрывать информацию до окончания внутреннего расследования"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp12",
        "sectionId": "decision",
        "title": {
            "uz": "Strategic Procurement (Ssenariy 12)",
            "ru": "Strategic Procurement (Сценарий 12)"
        },
        "questions": [
            {
                "id": "q_sp12",
                "title": {
                    "uz": "Strategiya: Global ta'minotchi kutilmaganda narxni 40% ga oshirdi. Sizda bor zaxira 3 oyga yetadi. Mintaqadagi yagona rasmiy diler sizsiz. (Case #12)",
                    "ru": "Стратегия: Глобальный поставщик неожиданно поднял цены на 40%. Запаса хватит на 3 месяца. Вы единственный дилер в регионе. (Кейс #12)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Mijozlar bilan narxlarni bosqichma-bosqich oshirish bo'yicha muzokaralar boshlash va muqobil yetkazib beruvchilarni qidirish",
                            "ru": "Начать переговоры с клиентами о поэтапном повышении цен и искать альтернативных поставщиков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Zaxiralarni sotishni to'xtatib, narxlar ko'tarilganini e'lon qilish",
                            "ru": "Приостановить продажи и объявить о резком повышении цен"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Eski narxda sotishda davom etib, zarar ko'rish",
                            "ru": "Продолжать продажи по старой цене в убыток"
                        },
                        "score": 2
                    }
                ]
            }
        ]
    },
    {
        "id": "sp13",
        "sectionId": "decision",
        "title": {
            "uz": "Ethics & High-Level Negotiation (Ssenariy 13)",
            "ru": "Ethics & High-Level Negotiation (Сценарий 13)"
        },
        "questions": [
            {
                "id": "q_sp13",
                "title": {
                    "uz": "Etika: Strategik mijoz (hukumat amaldori) shubhali tender shartlarini kiritmoqda va sizdan loyihani 'qo'llab-quvvatlash'ni so'rayapti. (Case #13)",
                    "ru": "Этика: Стратегический клиент (госчиновник) вводит сомнительные условия тендера и просит 'поддержать' проект. (Кейс #13)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Loyiha komplians qoidalariga zid ekanligini bildirish va qonuniy hamkorlik doirasida qolishni talab qilish",
                            "ru": "Заявить о несоответствии проекта правилам комплаенса и требовать законных рамок сотрудничества"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Qisman rozilik berish, keyinchalik xavfni baholash",
                            "ru": "Частично согласиться, оценив риски позже"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Soliqdan qochish yo'llarini izlab, shartlarni bajarish",
                            "ru": "Выполнить условия, ища пути минимизации налогов"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp14",
        "sectionId": "decision",
        "title": {
            "uz": "Pharmacovigilance Crisis (Ssenariy 14)",
            "ru": "Pharmacovigilance Crisis (Сценарий 14)"
        },
        "questions": [
            {
                "id": "q_sp14",
                "title": {
                    "uz": "Farmakonazorat: Sizning eng ko'p sotiladigan doringizdan so'ng 3 ta o'lim holati qayd etildi. Sabab-oqibat aloqasi isbotlanmagan. (Case #14)",
                    "ru": "Фармаконадзор: Зафиксировано 3 летальных случая после приема вашего самого продаваемого препарата. Связь не доказана. (Кейс #14)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Zudlik bilan savdoni to'xtatib turish, tergov boshlash va farmakologik nazorat organiga xabar berish",
                            "ru": "Приостановить продажи, начать расследование и уведомить орган фармаконадзора"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Isbot topilmaguncha savdoni davom ettirish va shifokorlarga 'ehtiyot bo'lish'ni aytish",
                            "ru": "Продолжать продажи до доказательства связи, сказав врачам быть осторожными"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni yashirish va matbuotda inkor qilish",
                            "ru": "Скрыть информацию и отрицать факты в прессе"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp15",
        "sectionId": "decision",
        "title": {
            "uz": "Logistics & Sanctions (Ssenariy 15)",
            "ru": "Logistics & Sanctions (Сценарий 15)"
        },
        "questions": [
            {
                "id": "q_sp15",
                "title": {
                    "uz": "Logistika: Banklararo blokovka tufayli chet eldagi zavodga to'lov o'tmadi. Yuk portda turibdi va sifatini yo'qotish xavfi bor. (Case #15)",
                    "ru": "Логистика: Из-за блокировки межбанковских переводов оплата заводу за рубеж не прошла. Груз в порту, есть риск потери качества. (Кейс #15)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Muqobil bank kanallarini qidirish va yukni vaqtinchalik termal omborga ko'chirishni moliyalashtirish",
                            "ru": "Искать альтернативные банковские каналы и профинансировать перемещение груза на термосклад"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Bank muammosi hal bo'lishini kutish, yukka tegmaslik",
                            "ru": "Ждать решения проблемы с банком, не трогая груз"
                        },
                        "score": 0
                    },
                    {
                        "text": {
                            "uz": "Zavoddan yukni bepul berib yuborishni iltimos qilish",
                            "ru": "Просить завод отдать груз бесплатно на доверии"
                        },
                        "score": 5
                    }
                ]
            }
        ]
    },
    {
        "id": "sp16",
        "sectionId": "decision",
        "title": {
            "uz": "HR & Internal Security (Ssenariy 16)",
            "ru": "HR & Internal Security (Сценарий 16)"
        },
        "questions": [
            {
                "id": "q_sp16",
                "title": {
                    "uz": "Xavfsizlik: Bosh texnolog patentlangan formulani raqibga sotayotgani va unga o'tishga tayyorlanayotgani haqida shubha bor. (Case #16)",
                    "ru": "Безопасность: Есть подозрение, что главный технолог продает формулу конкуренту и готовится к переходу. (Кейс #16)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "IT-audit o'tkazish, loyihalarga kirish huquqini cheklash va xavfsizlik xizmati bilan tergov o'tkazish",
                            "ru": "Провести IT-аудит, ограничить доступ к проектам и провести расследование со службой безопасности"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Uni darhol hayfsan bilan jazolash",
                            "ru": "Сразу наказать выговором"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Inkor qilib, unga ishonishda davom etish",
                            "ru": "Игнорировать подозрения, продолжая доверять"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp17",
        "sectionId": "decision",
        "title": {
            "uz": "Market Access & Pricing (Ssenariy 17)",
            "ru": "Market Access & Pricing (Сценарий 17)"
        },
        "questions": [
            {
                "id": "q_sp17",
                "title": {
                    "uz": "Narx siyosati: Davlat hayotiy muhim dorilar narxini 20% ga tushirdi. Sizning marjangiz endi nolga teng. (Case #17)",
                    "ru": "Ценовая политика: Государство снизило цены на ЖНВЛП на 20%. Ваша маржа теперь равна нулю. (Кейс #17)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Ishlab chiqaruvchi bilan narxni pasaytirish bo'yicha muzokaralar olib borish va operatsion xarajatlarni optimallashtirish",
                            "ru": "Переговоры с производителем о снижении цен и оптимизация операционных издержек"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Mahsulotni bozordan butunlay olib chiqib ketish",
                            "ru": "Полностью вывести продукт с рынка"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Noqonuniy qo'shimcha narxlar qo'shib sotish",
                            "ru": "Продавать с незаконными наценками сверху"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp18",
        "sectionId": "decision",
        "title": {
            "uz": "Compliance & GDP Maintenance (Ssenariy 18)",
            "ru": "Compliance & GDP Maintenance (Сценарий 18)"
        },
        "questions": [
            {
                "id": "q_sp18",
                "title": {
                    "uz": " GDP: Ombor mudiri sovuqxonada harorat og'ishini (Deviation) yashirib, hujjatlarni qo'lda to'g'rilab qo'ygani aniqlandi. (Case #18)",
                    "ru": "GDP: Заведующий складом скрыл отклонение температуры в холодной камере и вручную исправил документы. (Кейс #18)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimni qat'iy intizomiy jazolash (bo'shatishgacha), barcha partiyalarni karantinga olish va qayta testlar o'tkazish",
                            "ru": "Строгое дисциплинарное взыскание (вплоть до увольнения), карантин всех партий и повторные тесты"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat xodimga og'zaki tanbeh berish",
                            "ru": "Только устный выговор сотруднику"
                        },
                        "score": 2
                    },
                    {
                        "text": {
                            "uz": "Tekshiruvga qadar hujjatlarni shunday qoldirish",
                            "ru": "Оставить документы как есть до проверки"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp19",
        "sectionId": "decision",
        "title": {
            "uz": "Corporate Strategy (Ssenariy 19)",
            "ru": "Corporate Strategy (Сценарий 19)"
        },
        "questions": [
            {
                "id": "q_sp19",
                "title": {
                    "uz": "Korporativ: Kompaniya raqobatchi bilan birlashishni (Merger) rejalashtirmoqda. Xodimlar orasida vahima boshlandi va ish unumdorligi tushdi. (Case #19)",
                    "ru": "Корпоратив: Компания планирует слияние с конкурентом. Среди сотрудников началась паника, продуктивность упала. (Кейс #19)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimlar bilan ochiq muloqot o'tkazish, yangi istiqbollarni tushuntirish va kafolatlar berish",
                            "ru": "Провести открытую встречу, объяснить перспективы и дать гарантии"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni 'maxfiy' deb tasdiqlash va savollarga javob bermaslik",
                            "ru": "Подтвердить секретность и не отвечать на вопросы"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Eshma-gap tarqatganlarni darhol bo'shatish",
                            "ru": "Уволить тех, кто распространяет слухи"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp20",
        "sectionId": "decision",
        "title": {
            "uz": "Financial Risk Management (Ssenariy 20)",
            "ru": "Financial Risk Management (Сценарий 20)"
        },
        "questions": [
            {
                "id": "q_sp20",
                "title": {
                    "uz": "Moliya: Kurs o'zgarishi tufayli valyuta bilan to'lanadigan qarzlar 50% ga oshdi. Kompaniya defolt holatiga kelib qolishi mumkin. (Case #20)",
                    "ru": "Финансы: Из-за девальвации валютные долги выросли на 50%. Компании грозит дефолт. (Кейс #20)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Kreditorlar bilan to'lov muddatlarini uzaytirishni muzokara qilish, xarajatlarni qisqartirish va valyuta risklarini xedjlash",
                            "ru": "Переговоры о реструктуризации долга, сокращение расходов и хеджирование валютных рисков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Kredit olib, eski qarzni yopish",
                            "ru": "Взять новый кредит, чтобы закрыть старый"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Hech narsa qilmasdan, inqirozni o'tib ketishini kutish",
                            "ru": "Ничего не делать, ждать пока кризис пройдет"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp21",
        "sectionId": "decision",
        "title": {
            "uz": "Data Integrity & Audit (Ssenariy 21)",
            "ru": "Data Integrity & Audit (Сценарий 21)"
        },
        "questions": [
            {
                "id": "q_sp21",
                "title": {
                    "uz": "Tahlika: Ichki auditda QP (Qualified Person) tomonidan mahsulot chiqarishdan oldin laboratoriya testlari natijalari o'zgartirilgani (Data Manipulation) aniqlandi. Mahsulot bozorga chiqib ketgan. (Case #21)",
                    "ru": "Кризис: В ходе аудита выяснилось, что QP (Qualified Person) манипулировал результатами лабораторных тестов перед выпуском. Товар уже на рынке. (Кейс #21)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Darhol bozor (Market Recall) jarayonini boshlash, QP vakolatini to'xtatish va nazorat organlariga (MoH) xabar berish",
                            "ru": "Немедленный отзыв с рынка (Recall), приостановка полномочий QP и уведомление регулятора (Минздрав)"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat kelajakdagi partiyalar uchun nazoratni kuchaytirish, mahsulotni bozorda qoldirish",
                            "ru": "Усилить контроль только для будущих партий, оставить товар на рынке"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Ichki tekshiruv tugaguncha ma'lumotni yashirish",
                            "ru": "Скрывать информацию до окончания внутреннего расследования"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp22",
        "sectionId": "decision",
        "title": {
            "uz": "Strategic Procurement (Ssenariy 22)",
            "ru": "Strategic Procurement (Сценарий 22)"
        },
        "questions": [
            {
                "id": "q_sp22",
                "title": {
                    "uz": "Strategiya: Global ta'minotchi kutilmaganda narxni 40% ga oshirdi. Sizda bor zaxira 3 oyga yetadi. Mintaqadagi yagona rasmiy diler sizsiz. (Case #22)",
                    "ru": "Стратегия: Глобальный поставщик неожиданно поднял цены на 40%. Запаса хватит на 3 месяца. Вы единственный дилер в регионе. (Кейс #22)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Mijozlar bilan narxlarni bosqichma-bosqich oshirish bo'yicha muzokaralar boshlash va muqobil yetkazib beruvchilarni qidirish",
                            "ru": "Начать переговоры с клиентами о поэтапном повышении цен и искать альтернативных поставщиков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Zaxiralarni sotishni to'xtatib, narxlar ko'tarilganini e'lon qilish",
                            "ru": "Приостановить продажи и объявить о резком повышении цен"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Eski narxda sotishda davom etib, zarar ko'rish",
                            "ru": "Продолжать продажи по старой цене в убыток"
                        },
                        "score": 2
                    }
                ]
            }
        ]
    },
    {
        "id": "sp23",
        "sectionId": "decision",
        "title": {
            "uz": "Ethics & High-Level Negotiation (Ssenariy 23)",
            "ru": "Ethics & High-Level Negotiation (Сценарий 23)"
        },
        "questions": [
            {
                "id": "q_sp23",
                "title": {
                    "uz": "Etika: Strategik mijoz (hukumat amaldori) shubhali tender shartlarini kiritmoqda va sizdan loyihani 'qo'llab-quvvatlash'ni so'rayapti. (Case #23)",
                    "ru": "Этика: Стратегический клиент (госчиновник) вводит сомнительные условия тендера и просит 'поддержать' проект. (Кейс #23)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Loyiha komplians qoidalariga zid ekanligini bildirish va qonuniy hamkorlik doirasida qolishni talab qilish",
                            "ru": "Заявить о несоответствии проекта правилам комплаенса и требовать законных рамок сотрудничества"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Qisman rozilik berish, keyinchalik xavfni baholash",
                            "ru": "Частично согласиться, оценив риски позже"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Soliqdan qochish yo'llarini izlab, shartlarni bajarish",
                            "ru": "Выполнить условия, ища пути минимизации налогов"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp24",
        "sectionId": "decision",
        "title": {
            "uz": "Pharmacovigilance Crisis (Ssenariy 24)",
            "ru": "Pharmacovigilance Crisis (Сценарий 24)"
        },
        "questions": [
            {
                "id": "q_sp24",
                "title": {
                    "uz": "Farmakonazorat: Sizning eng ko'p sotiladigan doringizdan so'ng 3 ta o'lim holati qayd etildi. Sabab-oqibat aloqasi isbotlanmagan. (Case #24)",
                    "ru": "Фармаконадзор: Зафиксировано 3 летальных случая после приема вашего самого продаваемого препарата. Связь не доказана. (Кейс #24)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Zudlik bilan savdoni to'xtatib turish, tergov boshlash va farmakologik nazorat organiga xabar berish",
                            "ru": "Приостановить продажи, начать расследование и уведомить орган фармаконадзора"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Isbot topilmaguncha savdoni davom ettirish va shifokorlarga 'ehtiyot bo'lish'ni aytish",
                            "ru": "Продолжать продажи до доказательства связи, сказав врачам быть осторожными"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni yashirish va matbuotda inkor qilish",
                            "ru": "Скрыть информацию и отрицать факты в прессе"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp25",
        "sectionId": "decision",
        "title": {
            "uz": "Logistics & Sanctions (Ssenariy 25)",
            "ru": "Logistics & Sanctions (Сценарий 25)"
        },
        "questions": [
            {
                "id": "q_sp25",
                "title": {
                    "uz": "Logistika: Banklararo blokovka tufayli chet eldagi zavodga to'lov o'tmadi. Yuk portda turibdi va sifatini yo'qotish xavfi bor. (Case #25)",
                    "ru": "Логистика: Из-за блокировки межбанковских переводов оплата заводу за рубеж не прошла. Груз в порту, есть риск потери качества. (Кейс #25)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Muqobil bank kanallarini qidirish va yukni vaqtinchalik termal omborga ko'chirishni moliyalashtirish",
                            "ru": "Искать альтернативные банковские каналы и профинансировать перемещение груза на термосклад"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Bank muammosi hal bo'lishini kutish, yukka tegmaslik",
                            "ru": "Ждать решения проблемы с банком, не трогая груз"
                        },
                        "score": 0
                    },
                    {
                        "text": {
                            "uz": "Zavoddan yukni bepul berib yuborishni iltimos qilish",
                            "ru": "Просить завод отдать груз бесплатно на доверии"
                        },
                        "score": 5
                    }
                ]
            }
        ]
    },
    {
        "id": "sp26",
        "sectionId": "decision",
        "title": {
            "uz": "HR & Internal Security (Ssenariy 26)",
            "ru": "HR & Internal Security (Сценарий 26)"
        },
        "questions": [
            {
                "id": "q_sp26",
                "title": {
                    "uz": "Xavfsizlik: Bosh texnolog patentlangan formulani raqibga sotayotgani va unga o'tishga tayyorlanayotgani haqida shubha bor. (Case #26)",
                    "ru": "Безопасность: Есть подозрение, что главный технолог продает формулу конкуренту и готовится к переходу. (Кейс #26)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "IT-audit o'tkazish, loyihalarga kirish huquqini cheklash va xavfsizlik xizmati bilan tergov o'tkazish",
                            "ru": "Провести IT-аудит, ограничить доступ к проектам и провести расследование со службой безопасности"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Uni darhol hayfsan bilan jazolash",
                            "ru": "Сразу наказать выговором"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Inkor qilib, unga ishonishda davom etish",
                            "ru": "Игнорировать подозрения, продолжая доверять"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp27",
        "sectionId": "decision",
        "title": {
            "uz": "Market Access & Pricing (Ssenariy 27)",
            "ru": "Market Access & Pricing (Сценарий 27)"
        },
        "questions": [
            {
                "id": "q_sp27",
                "title": {
                    "uz": "Narx siyosati: Davlat hayotiy muhim dorilar narxini 20% ga tushirdi. Sizning marjangiz endi nolga teng. (Case #27)",
                    "ru": "Ценовая политика: Государство снизило цены на ЖНВЛП на 20%. Ваша маржа теперь равна нулю. (Кейс #27)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Ishlab chiqaruvchi bilan narxni pasaytirish bo'yicha muzokaralar olib borish va operatsion xarajatlarni optimallashtirish",
                            "ru": "Переговоры с производителем о снижении цен и оптимизация операционных издержек"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Mahsulotni bozordan butunlay olib chiqib ketish",
                            "ru": "Полностью вывести продукт с рынка"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Noqonuniy qo'shimcha narxlar qo'shib sotish",
                            "ru": "Продавать с незаконными наценками сверху"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp28",
        "sectionId": "decision",
        "title": {
            "uz": "Compliance & GDP Maintenance (Ssenariy 28)",
            "ru": "Compliance & GDP Maintenance (Сценарий 28)"
        },
        "questions": [
            {
                "id": "q_sp28",
                "title": {
                    "uz": " GDP: Ombor mudiri sovuqxonada harorat og'ishini (Deviation) yashirib, hujjatlarni qo'lda to'g'rilab qo'ygani aniqlandi. (Case #28)",
                    "ru": "GDP: Заведующий складом скрыл отклонение температуры в холодной камере и вручную исправил документы. (Кейс #28)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimni qat'iy intizomiy jazolash (bo'shatishgacha), barcha partiyalarni karantinga olish va qayta testlar o'tkazish",
                            "ru": "Строгое дисциплинарное взыскание (вплоть до увольнения), карантин всех партий и повторные тесты"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat xodimga og'zaki tanbeh berish",
                            "ru": "Только устный выговор сотруднику"
                        },
                        "score": 2
                    },
                    {
                        "text": {
                            "uz": "Tekshiruvga qadar hujjatlarni shunday qoldirish",
                            "ru": "Оставить документы как есть до проверки"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp29",
        "sectionId": "decision",
        "title": {
            "uz": "Corporate Strategy (Ssenariy 29)",
            "ru": "Corporate Strategy (Сценарий 29)"
        },
        "questions": [
            {
                "id": "q_sp29",
                "title": {
                    "uz": "Korporativ: Kompaniya raqobatchi bilan birlashishni (Merger) rejalashtirmoqda. Xodimlar orasida vahima boshlandi va ish unumdorligi tushdi. (Case #29)",
                    "ru": "Корпоратив: Компания планирует слияние с конкурентом. Среди сотрудников началась паника, продуктивность упала. (Кейс #29)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimlar bilan ochiq muloqot o'tkazish, yangi istiqbollarni tushuntirish va kafolatlar berish",
                            "ru": "Провести открытую встречу, объяснить перспективы и дать гарантии"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni 'maxfiy' deb tasdiqlash va savollarga javob bermaslik",
                            "ru": "Подтвердить секретность и не отвечать на вопросы"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Eshma-gap tarqatganlarni darhol bo'shatish",
                            "ru": "Уволить тех, кто распространяет слухи"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp30",
        "sectionId": "decision",
        "title": {
            "uz": "Financial Risk Management (Ssenariy 30)",
            "ru": "Financial Risk Management (Сценарий 30)"
        },
        "questions": [
            {
                "id": "q_sp30",
                "title": {
                    "uz": "Moliya: Kurs o'zgarishi tufayli valyuta bilan to'lanadigan qarzlar 50% ga oshdi. Kompaniya defolt holatiga kelib qolishi mumkin. (Case #30)",
                    "ru": "Финансы: Из-за девальвации валютные долги выросли на 50%. Компании грозит дефолт. (Кейс #30)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Kreditorlar bilan to'lov muddatlarini uzaytirishni muzokara qilish, xarajatlarni qisqartirish va valyuta risklarini xedjlash",
                            "ru": "Переговоры о реструктуризации долга, сокращение расходов и хеджирование валютных рисков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Kredit olib, eski qarzni yopish",
                            "ru": "Взять новый кредит, чтобы закрыть старый"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Hech narsa qilmasdan, inqirozni o'tib ketishini kutish",
                            "ru": "Ничего не делать, ждать пока кризис пройдет"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp31",
        "sectionId": "decision",
        "title": {
            "uz": "Data Integrity & Audit (Ssenariy 31)",
            "ru": "Data Integrity & Audit (Сценарий 31)"
        },
        "questions": [
            {
                "id": "q_sp31",
                "title": {
                    "uz": "Tahlika: Ichki auditda QP (Qualified Person) tomonidan mahsulot chiqarishdan oldin laboratoriya testlari natijalari o'zgartirilgani (Data Manipulation) aniqlandi. Mahsulot bozorga chiqib ketgan. (Case #31)",
                    "ru": "Кризис: В ходе аудита выяснилось, что QP (Qualified Person) манипулировал результатами лабораторных тестов перед выпуском. Товар уже на рынке. (Кейс #31)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Darhol bozor (Market Recall) jarayonini boshlash, QP vakolatini to'xtatish va nazorat organlariga (MoH) xabar berish",
                            "ru": "Немедленный отзыв с рынка (Recall), приостановка полномочий QP и уведомление регулятора (Минздрав)"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat kelajakdagi partiyalar uchun nazoratni kuchaytirish, mahsulotni bozorda qoldirish",
                            "ru": "Усилить контроль только для будущих партий, оставить товар на рынке"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Ichki tekshiruv tugaguncha ma'lumotni yashirish",
                            "ru": "Скрывать информацию до окончания внутреннего расследования"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp32",
        "sectionId": "decision",
        "title": {
            "uz": "Strategic Procurement (Ssenariy 32)",
            "ru": "Strategic Procurement (Сценарий 32)"
        },
        "questions": [
            {
                "id": "q_sp32",
                "title": {
                    "uz": "Strategiya: Global ta'minotchi kutilmaganda narxni 40% ga oshirdi. Sizda bor zaxira 3 oyga yetadi. Mintaqadagi yagona rasmiy diler sizsiz. (Case #32)",
                    "ru": "Стратегия: Глобальный поставщик неожиданно поднял цены на 40%. Запаса хватит на 3 месяца. Вы единственный дилер в регионе. (Кейс #32)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Mijozlar bilan narxlarni bosqichma-bosqich oshirish bo'yicha muzokaralar boshlash va muqobil yetkazib beruvchilarni qidirish",
                            "ru": "Начать переговоры с клиентами о поэтапном повышении цен и искать альтернативных поставщиков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Zaxiralarni sotishni to'xtatib, narxlar ko'tarilganini e'lon qilish",
                            "ru": "Приостановить продажи и объявить о резком повышении цен"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Eski narxda sotishda davom etib, zarar ko'rish",
                            "ru": "Продолжать продажи по старой цене в убыток"
                        },
                        "score": 2
                    }
                ]
            }
        ]
    },
    {
        "id": "sp33",
        "sectionId": "decision",
        "title": {
            "uz": "Ethics & High-Level Negotiation (Ssenariy 33)",
            "ru": "Ethics & High-Level Negotiation (Сценарий 33)"
        },
        "questions": [
            {
                "id": "q_sp33",
                "title": {
                    "uz": "Etika: Strategik mijoz (hukumat amaldori) shubhali tender shartlarini kiritmoqda va sizdan loyihani 'qo'llab-quvvatlash'ni so'rayapti. (Case #33)",
                    "ru": "Этика: Стратегический клиент (госчиновник) вводит сомнительные условия тендера и просит 'поддержать' проект. (Кейс #33)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Loyiha komplians qoidalariga zid ekanligini bildirish va qonuniy hamkorlik doirasida qolishni talab qilish",
                            "ru": "Заявить о несоответствии проекта правилам комплаенса и требовать законных рамок сотрудничества"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Qisman rozilik berish, keyinchalik xavfni baholash",
                            "ru": "Частично согласиться, оценив риски позже"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Soliqdan qochish yo'llarini izlab, shartlarni bajarish",
                            "ru": "Выполнить условия, ища пути минимизации налогов"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp34",
        "sectionId": "decision",
        "title": {
            "uz": "Pharmacovigilance Crisis (Ssenariy 34)",
            "ru": "Pharmacovigilance Crisis (Сценарий 34)"
        },
        "questions": [
            {
                "id": "q_sp34",
                "title": {
                    "uz": "Farmakonazorat: Sizning eng ko'p sotiladigan doringizdan so'ng 3 ta o'lim holati qayd etildi. Sabab-oqibat aloqasi isbotlanmagan. (Case #34)",
                    "ru": "Фармаконадзор: Зафиксировано 3 летальных случая после приема вашего самого продаваемого препарата. Связь не доказана. (Кейс #34)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Zudlik bilan savdoni to'xtatib turish, tergov boshlash va farmakologik nazorat organiga xabar berish",
                            "ru": "Приостановить продажи, начать расследование и уведомить орган фармаконадзора"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Isbot topilmaguncha savdoni davom ettirish va shifokorlarga 'ehtiyot bo'lish'ni aytish",
                            "ru": "Продолжать продажи до доказательства связи, сказав врачам быть осторожными"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni yashirish va matbuotda inkor qilish",
                            "ru": "Скрыть информацию и отрицать факты в прессе"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp35",
        "sectionId": "decision",
        "title": {
            "uz": "Logistics & Sanctions (Ssenariy 35)",
            "ru": "Logistics & Sanctions (Сценарий 35)"
        },
        "questions": [
            {
                "id": "q_sp35",
                "title": {
                    "uz": "Logistika: Banklararo blokovka tufayli chet eldagi zavodga to'lov o'tmadi. Yuk portda turibdi va sifatini yo'qotish xavfi bor. (Case #35)",
                    "ru": "Логистика: Из-за блокировки межбанковских переводов оплата заводу за рубеж не прошла. Груз в порту, есть риск потери качества. (Кейс #35)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Muqobil bank kanallarini qidirish va yukni vaqtinchalik termal omborga ko'chirishni moliyalashtirish",
                            "ru": "Искать альтернативные банковские каналы и профинансировать перемещение груза на термосклад"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Bank muammosi hal bo'lishini kutish, yukka tegmaslik",
                            "ru": "Ждать решения проблемы с банком, не трогая груз"
                        },
                        "score": 0
                    },
                    {
                        "text": {
                            "uz": "Zavoddan yukni bepul berib yuborishni iltimos qilish",
                            "ru": "Просить завод отдать груз бесплатно на доверии"
                        },
                        "score": 5
                    }
                ]
            }
        ]
    },
    {
        "id": "sp36",
        "sectionId": "decision",
        "title": {
            "uz": "HR & Internal Security (Ssenariy 36)",
            "ru": "HR & Internal Security (Сценарий 36)"
        },
        "questions": [
            {
                "id": "q_sp36",
                "title": {
                    "uz": "Xavfsizlik: Bosh texnolog patentlangan formulani raqibga sotayotgani va unga o'tishga tayyorlanayotgani haqida shubha bor. (Case #36)",
                    "ru": "Безопасность: Есть подозрение, что главный технолог продает формулу конкуренту и готовится к переходу. (Кейс #36)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "IT-audit o'tkazish, loyihalarga kirish huquqini cheklash va xavfsizlik xizmati bilan tergov o'tkazish",
                            "ru": "Провести IT-аудит, ограничить доступ к проектам и провести расследование со службой безопасности"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Uni darhol hayfsan bilan jazolash",
                            "ru": "Сразу наказать выговором"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Inkor qilib, unga ishonishda davom etish",
                            "ru": "Игнорировать подозрения, продолжая доверять"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp37",
        "sectionId": "decision",
        "title": {
            "uz": "Market Access & Pricing (Ssenariy 37)",
            "ru": "Market Access & Pricing (Сценарий 37)"
        },
        "questions": [
            {
                "id": "q_sp37",
                "title": {
                    "uz": "Narx siyosati: Davlat hayotiy muhim dorilar narxini 20% ga tushirdi. Sizning marjangiz endi nolga teng. (Case #37)",
                    "ru": "Ценовая политика: Государство снизило цены на ЖНВЛП на 20%. Ваша маржа теперь равна нулю. (Кейс #37)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Ishlab chiqaruvchi bilan narxni pasaytirish bo'yicha muzokaralar olib borish va operatsion xarajatlarni optimallashtirish",
                            "ru": "Переговоры с производителем о снижении цен и оптимизация операционных издержек"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Mahsulotni bozordan butunlay olib chiqib ketish",
                            "ru": "Полностью вывести продукт с рынка"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Noqonuniy qo'shimcha narxlar qo'shib sotish",
                            "ru": "Продавать с незаконными наценками сверху"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp38",
        "sectionId": "decision",
        "title": {
            "uz": "Compliance & GDP Maintenance (Ssenariy 38)",
            "ru": "Compliance & GDP Maintenance (Сценарий 38)"
        },
        "questions": [
            {
                "id": "q_sp38",
                "title": {
                    "uz": " GDP: Ombor mudiri sovuqxonada harorat og'ishini (Deviation) yashirib, hujjatlarni qo'lda to'g'rilab qo'ygani aniqlandi. (Case #38)",
                    "ru": "GDP: Заведующий складом скрыл отклонение температуры в холодной камере и вручную исправил документы. (Кейс #38)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimni qat'iy intizomiy jazolash (bo'shatishgacha), barcha partiyalarni karantinga olish va qayta testlar o'tkazish",
                            "ru": "Строгое дисциплинарное взыскание (вплоть до увольнения), карантин всех партий и повторные тесты"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat xodimga og'zaki tanbeh berish",
                            "ru": "Только устный выговор сотруднику"
                        },
                        "score": 2
                    },
                    {
                        "text": {
                            "uz": "Tekshiruvga qadar hujjatlarni shunday qoldirish",
                            "ru": "Оставить документы как есть до проверки"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp39",
        "sectionId": "decision",
        "title": {
            "uz": "Corporate Strategy (Ssenariy 39)",
            "ru": "Corporate Strategy (Сценарий 39)"
        },
        "questions": [
            {
                "id": "q_sp39",
                "title": {
                    "uz": "Korporativ: Kompaniya raqobatchi bilan birlashishni (Merger) rejalashtirmoqda. Xodimlar orasida vahima boshlandi va ish unumdorligi tushdi. (Case #39)",
                    "ru": "Корпоратив: Компания планирует слияние с конкурентом. Среди сотрудников началась паника, продуктивность упала. (Кейс #39)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimlar bilan ochiq muloqot o'tkazish, yangi istiqbollarni tushuntirish va kafolatlar berish",
                            "ru": "Провести открытую встречу, объяснить перспективы и дать гарантии"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni 'maxfiy' deb tasdiqlash va savollarga javob bermaslik",
                            "ru": "Подтвердить секретность и не отвечать на вопросы"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Eshma-gap tarqatganlarni darhol bo'shatish",
                            "ru": "Уволить тех, кто распространяет слухи"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp40",
        "sectionId": "decision",
        "title": {
            "uz": "Financial Risk Management (Ssenariy 40)",
            "ru": "Financial Risk Management (Сценарий 40)"
        },
        "questions": [
            {
                "id": "q_sp40",
                "title": {
                    "uz": "Moliya: Kurs o'zgarishi tufayli valyuta bilan to'lanadigan qarzlar 50% ga oshdi. Kompaniya defolt holatiga kelib qolishi mumkin. (Case #40)",
                    "ru": "Финансы: Из-за девальвации валютные долги выросли на 50%. Компании грозит дефолт. (Кейс #40)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Kreditorlar bilan to'lov muddatlarini uzaytirishni muzokara qilish, xarajatlarni qisqartirish va valyuta risklarini xedjlash",
                            "ru": "Переговоры о реструктуризации долга, сокращение расходов и хеджирование валютных рисков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Kredit olib, eski qarzni yopish",
                            "ru": "Взять новый кредит, чтобы закрыть старый"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Hech narsa qilmasdan, inqirozni o'tib ketishini kutish",
                            "ru": "Ничего не делать, ждать пока кризис пройдет"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp41",
        "sectionId": "decision",
        "title": {
            "uz": "Data Integrity & Audit (Ssenariy 41)",
            "ru": "Data Integrity & Audit (Сценарий 41)"
        },
        "questions": [
            {
                "id": "q_sp41",
                "title": {
                    "uz": "Tahlika: Ichki auditda QP (Qualified Person) tomonidan mahsulot chiqarishdan oldin laboratoriya testlari natijalari o'zgartirilgani (Data Manipulation) aniqlandi. Mahsulot bozorga chiqib ketgan. (Case #41)",
                    "ru": "Кризис: В ходе аудита выяснилось, что QP (Qualified Person) манипулировал результатами лабораторных тестов перед выпуском. Товар уже на рынке. (Кейс #41)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Darhol bozor (Market Recall) jarayonini boshlash, QP vakolatini to'xtatish va nazorat organlariga (MoH) xabar berish",
                            "ru": "Немедленный отзыв с рынка (Recall), приостановка полномочий QP и уведомление регулятора (Минздрав)"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat kelajakdagi partiyalar uchun nazoratni kuchaytirish, mahsulotni bozorda qoldirish",
                            "ru": "Усилить контроль только для будущих партий, оставить товар на рынке"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Ichki tekshiruv tugaguncha ma'lumotni yashirish",
                            "ru": "Скрывать информацию до окончания внутреннего расследования"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp42",
        "sectionId": "decision",
        "title": {
            "uz": "Strategic Procurement (Ssenariy 42)",
            "ru": "Strategic Procurement (Сценарий 42)"
        },
        "questions": [
            {
                "id": "q_sp42",
                "title": {
                    "uz": "Strategiya: Global ta'minotchi kutilmaganda narxni 40% ga oshirdi. Sizda bor zaxira 3 oyga yetadi. Mintaqadagi yagona rasmiy diler sizsiz. (Case #42)",
                    "ru": "Стратегия: Глобальный поставщик неожиданно поднял цены на 40%. Запаса хватит на 3 месяца. Вы единственный дилер в регионе. (Кейс #42)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Mijozlar bilan narxlarni bosqichma-bosqich oshirish bo'yicha muzokaralar boshlash va muqobil yetkazib beruvchilarni qidirish",
                            "ru": "Начать переговоры с клиентами о поэтапном повышении цен и искать альтернативных поставщиков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Zaxiralarni sotishni to'xtatib, narxlar ko'tarilganini e'lon qilish",
                            "ru": "Приостановить продажи и объявить о резком повышении цен"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Eski narxda sotishda davom etib, zarar ko'rish",
                            "ru": "Продолжать продажи по старой цене в убыток"
                        },
                        "score": 2
                    }
                ]
            }
        ]
    },
    {
        "id": "sp43",
        "sectionId": "decision",
        "title": {
            "uz": "Ethics & High-Level Negotiation (Ssenariy 43)",
            "ru": "Ethics & High-Level Negotiation (Сценарий 43)"
        },
        "questions": [
            {
                "id": "q_sp43",
                "title": {
                    "uz": "Etika: Strategik mijoz (hukumat amaldori) shubhali tender shartlarini kiritmoqda va sizdan loyihani 'qo'llab-quvvatlash'ni so'rayapti. (Case #43)",
                    "ru": "Этика: Стратегический клиент (госчиновник) вводит сомнительные условия тендера и просит 'поддержать' проект. (Кейс #43)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Loyiha komplians qoidalariga zid ekanligini bildirish va qonuniy hamkorlik doirasida qolishni talab qilish",
                            "ru": "Заявить о несоответствии проекта правилам комплаенса и требовать законных рамок сотрудничества"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Qisman rozilik berish, keyinchalik xavfni baholash",
                            "ru": "Частично согласиться, оценив риски позже"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Soliqdan qochish yo'llarini izlab, shartlarni bajarish",
                            "ru": "Выполнить условия, ища пути минимизации налогов"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp44",
        "sectionId": "decision",
        "title": {
            "uz": "Pharmacovigilance Crisis (Ssenariy 44)",
            "ru": "Pharmacovigilance Crisis (Сценарий 44)"
        },
        "questions": [
            {
                "id": "q_sp44",
                "title": {
                    "uz": "Farmakonazorat: Sizning eng ko'p sotiladigan doringizdan so'ng 3 ta o'lim holati qayd etildi. Sabab-oqibat aloqasi isbotlanmagan. (Case #44)",
                    "ru": "Фармаконадзор: Зафиксировано 3 летальных случая после приема вашего самого продаваемого препарата. Связь не доказана. (Кейс #44)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Zudlik bilan savdoni to'xtatib turish, tergov boshlash va farmakologik nazorat organiga xabar berish",
                            "ru": "Приостановить продажи, начать расследование и уведомить орган фармаконадзора"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Isbot topilmaguncha savdoni davom ettirish va shifokorlarga 'ehtiyot bo'lish'ni aytish",
                            "ru": "Продолжать продажи до доказательства связи, сказав врачам быть осторожными"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni yashirish va matbuotda inkor qilish",
                            "ru": "Скрыть информацию и отрицать факты в прессе"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp45",
        "sectionId": "decision",
        "title": {
            "uz": "Logistics & Sanctions (Ssenariy 45)",
            "ru": "Logistics & Sanctions (Сценарий 45)"
        },
        "questions": [
            {
                "id": "q_sp45",
                "title": {
                    "uz": "Logistika: Banklararo blokovka tufayli chet eldagi zavodga to'lov o'tmadi. Yuk portda turibdi va sifatini yo'qotish xavfi bor. (Case #45)",
                    "ru": "Логистика: Из-за блокировки межбанковских переводов оплата заводу за рубеж не прошла. Груз в порту, есть риск потери качества. (Кейс #45)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Muqobil bank kanallarini qidirish va yukni vaqtinchalik termal omborga ko'chirishni moliyalashtirish",
                            "ru": "Искать альтернативные банковские каналы и профинансировать перемещение груза на термосклад"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Bank muammosi hal bo'lishini kutish, yukka tegmaslik",
                            "ru": "Ждать решения проблемы с банком, не трогая груз"
                        },
                        "score": 0
                    },
                    {
                        "text": {
                            "uz": "Zavoddan yukni bepul berib yuborishni iltimos qilish",
                            "ru": "Просить завод отдать груз бесплатно на доверии"
                        },
                        "score": 5
                    }
                ]
            }
        ]
    },
    {
        "id": "sp46",
        "sectionId": "decision",
        "title": {
            "uz": "HR & Internal Security (Ssenariy 46)",
            "ru": "HR & Internal Security (Сценарий 46)"
        },
        "questions": [
            {
                "id": "q_sp46",
                "title": {
                    "uz": "Xavfsizlik: Bosh texnolog patentlangan formulani raqibga sotayotgani va unga o'tishga tayyorlanayotgani haqida shubha bor. (Case #46)",
                    "ru": "Безопасность: Есть подозрение, что главный технолог продает формулу конкуренту и готовится к переходу. (Кейс #46)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "IT-audit o'tkazish, loyihalarga kirish huquqini cheklash va xavfsizlik xizmati bilan tergov o'tkazish",
                            "ru": "Провести IT-аудит, ограничить доступ к проектам и провести расследование со службой безопасности"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Uni darhol hayfsan bilan jazolash",
                            "ru": "Сразу наказать выговором"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Inkor qilib, unga ishonishda davom etish",
                            "ru": "Игнорировать подозрения, продолжая доверять"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp47",
        "sectionId": "decision",
        "title": {
            "uz": "Market Access & Pricing (Ssenariy 47)",
            "ru": "Market Access & Pricing (Сценарий 47)"
        },
        "questions": [
            {
                "id": "q_sp47",
                "title": {
                    "uz": "Narx siyosati: Davlat hayotiy muhim dorilar narxini 20% ga tushirdi. Sizning marjangiz endi nolga teng. (Case #47)",
                    "ru": "Ценовая политика: Государство снизило цены на ЖНВЛП на 20%. Ваша маржа теперь равна нулю. (Кейс #47)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Ishlab chiqaruvchi bilan narxni pasaytirish bo'yicha muzokaralar olib borish va operatsion xarajatlarni optimallashtirish",
                            "ru": "Переговоры с производителем о снижении цен и оптимизация операционных издержек"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Mahsulotni bozordan butunlay olib chiqib ketish",
                            "ru": "Полностью вывести продукт с рынка"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Noqonuniy qo'shimcha narxlar qo'shib sotish",
                            "ru": "Продавать с незаконными наценками сверху"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp48",
        "sectionId": "decision",
        "title": {
            "uz": "Compliance & GDP Maintenance (Ssenariy 48)",
            "ru": "Compliance & GDP Maintenance (Сценарий 48)"
        },
        "questions": [
            {
                "id": "q_sp48",
                "title": {
                    "uz": " GDP: Ombor mudiri sovuqxonada harorat og'ishini (Deviation) yashirib, hujjatlarni qo'lda to'g'rilab qo'ygani aniqlandi. (Case #48)",
                    "ru": "GDP: Заведующий складом скрыл отклонение температуры в холодной камере и вручную исправил документы. (Кейс #48)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimni qat'iy intizomiy jazolash (bo'shatishgacha), barcha partiyalarni karantinga olish va qayta testlar o'tkazish",
                            "ru": "Строгое дисциплинарное взыскание (вплоть до увольнения), карантин всех партий и повторные тесты"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat xodimga og'zaki tanbeh berish",
                            "ru": "Только устный выговор сотруднику"
                        },
                        "score": 2
                    },
                    {
                        "text": {
                            "uz": "Tekshiruvga qadar hujjatlarni shunday qoldirish",
                            "ru": "Оставить документы как есть до проверки"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp49",
        "sectionId": "decision",
        "title": {
            "uz": "Corporate Strategy (Ssenariy 49)",
            "ru": "Corporate Strategy (Сценарий 49)"
        },
        "questions": [
            {
                "id": "q_sp49",
                "title": {
                    "uz": "Korporativ: Kompaniya raqobatchi bilan birlashishni (Merger) rejalashtirmoqda. Xodimlar orasida vahima boshlandi va ish unumdorligi tushdi. (Case #49)",
                    "ru": "Корпоратив: Компания планирует слияние с конкурентом. Среди сотрудников началась паника, продуктивность упала. (Кейс #49)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimlar bilan ochiq muloqot o'tkazish, yangi istiqbollarni tushuntirish va kafolatlar berish",
                            "ru": "Провести открытую встречу, объяснить перспективы и дать гарантии"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni 'maxfiy' deb tasdiqlash va savollarga javob bermaslik",
                            "ru": "Подтвердить секретность и не отвечать на вопросы"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Eshma-gap tarqatganlarni darhol bo'shatish",
                            "ru": "Уволить тех, кто распространяет слухи"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp50",
        "sectionId": "decision",
        "title": {
            "uz": "Financial Risk Management (Ssenariy 50)",
            "ru": "Financial Risk Management (Сценарий 50)"
        },
        "questions": [
            {
                "id": "q_sp50",
                "title": {
                    "uz": "Moliya: Kurs o'zgarishi tufayli valyuta bilan to'lanadigan qarzlar 50% ga oshdi. Kompaniya defolt holatiga kelib qolishi mumkin. (Case #50)",
                    "ru": "Финансы: Из-за девальвации валютные долги выросли на 50%. Компании грозит дефолт. (Кейс #50)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Kreditorlar bilan to'lov muddatlarini uzaytirishni muzokara qilish, xarajatlarni qisqartirish va valyuta risklarini xedjlash",
                            "ru": "Переговоры о реструктуризации долга, сокращение расходов и хеджирование валютных рисков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Kredit olib, eski qarzni yopish",
                            "ru": "Взять новый кредит, чтобы закрыть старый"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Hech narsa qilmasdan, inqirozni o'tib ketishini kutish",
                            "ru": "Ничего не делать, ждать пока кризис пройдет"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp51",
        "sectionId": "decision",
        "title": {
            "uz": "Data Integrity & Audit (Ssenariy 51)",
            "ru": "Data Integrity & Audit (Сценарий 51)"
        },
        "questions": [
            {
                "id": "q_sp51",
                "title": {
                    "uz": "Tahlika: Ichki auditda QP (Qualified Person) tomonidan mahsulot chiqarishdan oldin laboratoriya testlari natijalari o'zgartirilgani (Data Manipulation) aniqlandi. Mahsulot bozorga chiqib ketgan. (Case #51)",
                    "ru": "Кризис: В ходе аудита выяснилось, что QP (Qualified Person) манипулировал результатами лабораторных тестов перед выпуском. Товар уже на рынке. (Кейс #51)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Darhol bozor (Market Recall) jarayonini boshlash, QP vakolatini to'xtatish va nazorat organlariga (MoH) xabar berish",
                            "ru": "Немедленный отзыв с рынка (Recall), приостановка полномочий QP и уведомление регулятора (Минздрав)"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat kelajakdagi partiyalar uchun nazoratni kuchaytirish, mahsulotni bozorda qoldirish",
                            "ru": "Усилить контроль только для будущих партий, оставить товар на рынке"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Ichki tekshiruv tugaguncha ma'lumotni yashirish",
                            "ru": "Скрывать информацию до окончания внутреннего расследования"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp52",
        "sectionId": "decision",
        "title": {
            "uz": "Strategic Procurement (Ssenariy 52)",
            "ru": "Strategic Procurement (Сценарий 52)"
        },
        "questions": [
            {
                "id": "q_sp52",
                "title": {
                    "uz": "Strategiya: Global ta'minotchi kutilmaganda narxni 40% ga oshirdi. Sizda bor zaxira 3 oyga yetadi. Mintaqadagi yagona rasmiy diler sizsiz. (Case #52)",
                    "ru": "Стратегия: Глобальный поставщик неожиданно поднял цены на 40%. Запаса хватит на 3 месяца. Вы единственный дилер в регионе. (Кейс #52)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Mijozlar bilan narxlarni bosqichma-bosqich oshirish bo'yicha muzokaralar boshlash va muqobil yetkazib beruvchilarni qidirish",
                            "ru": "Начать переговоры с клиентами о поэтапном повышении цен и искать альтернативных поставщиков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Zaxiralarni sotishni to'xtatib, narxlar ko'tarilganini e'lon qilish",
                            "ru": "Приостановить продажи и объявить о резком повышении цен"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Eski narxda sotishda davom etib, zarar ko'rish",
                            "ru": "Продолжать продажи по старой цене в убыток"
                        },
                        "score": 2
                    }
                ]
            }
        ]
    },
    {
        "id": "sp53",
        "sectionId": "decision",
        "title": {
            "uz": "Ethics & High-Level Negotiation (Ssenariy 53)",
            "ru": "Ethics & High-Level Negotiation (Сценарий 53)"
        },
        "questions": [
            {
                "id": "q_sp53",
                "title": {
                    "uz": "Etika: Strategik mijoz (hukumat amaldori) shubhali tender shartlarini kiritmoqda va sizdan loyihani 'qo'llab-quvvatlash'ni so'rayapti. (Case #53)",
                    "ru": "Этика: Стратегический клиент (госчиновник) вводит сомнительные условия тендера и просит 'поддержать' проект. (Кейс #53)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Loyiha komplians qoidalariga zid ekanligini bildirish va qonuniy hamkorlik doirasida qolishni talab qilish",
                            "ru": "Заявить о несоответствии проекта правилам комплаенса и требовать законных рамок сотрудничества"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Qisman rozilik berish, keyinchalik xavfni baholash",
                            "ru": "Частично согласиться, оценив риски позже"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Soliqdan qochish yo'llarini izlab, shartlarni bajarish",
                            "ru": "Выполнить условия, ища пути минимизации налогов"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp54",
        "sectionId": "decision",
        "title": {
            "uz": "Pharmacovigilance Crisis (Ssenariy 54)",
            "ru": "Pharmacovigilance Crisis (Сценарий 54)"
        },
        "questions": [
            {
                "id": "q_sp54",
                "title": {
                    "uz": "Farmakonazorat: Sizning eng ko'p sotiladigan doringizdan so'ng 3 ta o'lim holati qayd etildi. Sabab-oqibat aloqasi isbotlanmagan. (Case #54)",
                    "ru": "Фармаконадзор: Зафиксировано 3 летальных случая после приема вашего самого продаваемого препарата. Связь не доказана. (Кейс #54)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Zudlik bilan savdoni to'xtatib turish, tergov boshlash va farmakologik nazorat organiga xabar berish",
                            "ru": "Приостановить продажи, начать расследование и уведомить орган фармаконадзора"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Isbot topilmaguncha savdoni davom ettirish va shifokorlarga 'ehtiyot bo'lish'ni aytish",
                            "ru": "Продолжать продажи до доказательства связи, сказав врачам быть осторожными"
                        },
                        "score": 8
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni yashirish va matbuotda inkor qilish",
                            "ru": "Скрыть информацию и отрицать факты в прессе"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp55",
        "sectionId": "decision",
        "title": {
            "uz": "Logistics & Sanctions (Ssenariy 55)",
            "ru": "Logistics & Sanctions (Сценарий 55)"
        },
        "questions": [
            {
                "id": "q_sp55",
                "title": {
                    "uz": "Logistika: Banklararo blokovka tufayli chet eldagi zavodga to'lov o'tmadi. Yuk portda turibdi va sifatini yo'qotish xavfi bor. (Case #55)",
                    "ru": "Логистика: Из-за блокировки межбанковских переводов оплата заводу за рубеж не прошла. Груз в порту, есть риск потери качества. (Кейс #55)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Muqobil bank kanallarini qidirish va yukni vaqtinchalik termal omborga ko'chirishni moliyalashtirish",
                            "ru": "Искать альтернативные банковские каналы и профинансировать перемещение груза на термосклад"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Bank muammosi hal bo'lishini kutish, yukka tegmaslik",
                            "ru": "Ждать решения проблемы с банком, не трогая груз"
                        },
                        "score": 0
                    },
                    {
                        "text": {
                            "uz": "Zavoddan yukni bepul berib yuborishni iltimos qilish",
                            "ru": "Просить завод отдать груз бесплатно на доверии"
                        },
                        "score": 5
                    }
                ]
            }
        ]
    },
    {
        "id": "sp56",
        "sectionId": "decision",
        "title": {
            "uz": "HR & Internal Security (Ssenariy 56)",
            "ru": "HR & Internal Security (Сценарий 56)"
        },
        "questions": [
            {
                "id": "q_sp56",
                "title": {
                    "uz": "Xavfsizlik: Bosh texnolog patentlangan formulani raqibga sotayotgani va unga o'tishga tayyorlanayotgani haqida shubha bor. (Case #56)",
                    "ru": "Безопасность: Есть подозрение, что главный технолог продает формулу конкуренту и готовится к переходу. (Кейс #56)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "IT-audit o'tkazish, loyihalarga kirish huquqini cheklash va xavfsizlik xizmati bilan tergov o'tkazish",
                            "ru": "Провести IT-аудит, ограничить доступ к проектам и провести расследование со службой безопасности"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Uni darhol hayfsan bilan jazolash",
                            "ru": "Сразу наказать выговором"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Inkor qilib, unga ishonishda davom etish",
                            "ru": "Игнорировать подозрения, продолжая доверять"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp57",
        "sectionId": "decision",
        "title": {
            "uz": "Market Access & Pricing (Ssenariy 57)",
            "ru": "Market Access & Pricing (Сценарий 57)"
        },
        "questions": [
            {
                "id": "q_sp57",
                "title": {
                    "uz": "Narx siyosati: Davlat hayotiy muhim dorilar narxini 20% ga tushirdi. Sizning marjangiz endi nolga teng. (Case #57)",
                    "ru": "Ценовая политика: Государство снизило цены на ЖНВЛП на 20%. Ваша маржа теперь равна нулю. (Кейс #57)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Ishlab chiqaruvchi bilan narxni pasaytirish bo'yicha muzokaralar olib borish va operatsion xarajatlarni optimallashtirish",
                            "ru": "Переговоры с производителем о снижении цен и оптимизация операционных издержек"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Mahsulotni bozordan butunlay olib chiqib ketish",
                            "ru": "Полностью вывести продукт с рынка"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Noqonuniy qo'shimcha narxlar qo'shib sotish",
                            "ru": "Продавать с незаконными наценками сверху"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp58",
        "sectionId": "decision",
        "title": {
            "uz": "Compliance & GDP Maintenance (Ssenariy 58)",
            "ru": "Compliance & GDP Maintenance (Сценарий 58)"
        },
        "questions": [
            {
                "id": "q_sp58",
                "title": {
                    "uz": " GDP: Ombor mudiri sovuqxonada harorat og'ishini (Deviation) yashirib, hujjatlarni qo'lda to'g'rilab qo'ygani aniqlandi. (Case #58)",
                    "ru": "GDP: Заведующий складом скрыл отклонение температуры в холодной камере и вручную исправил документы. (Кейс #58)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimni qat'iy intizomiy jazolash (bo'shatishgacha), barcha partiyalarni karantinga olish va qayta testlar o'tkazish",
                            "ru": "Строгое дисциплинарное взыскание (вплоть до увольнения), карантин всех партий и повторные тесты"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Faqat xodimga og'zaki tanbeh berish",
                            "ru": "Только устный выговор сотруднику"
                        },
                        "score": 2
                    },
                    {
                        "text": {
                            "uz": "Tekshiruvga qadar hujjatlarni shunday qoldirish",
                            "ru": "Оставить документы как есть до проверки"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp59",
        "sectionId": "decision",
        "title": {
            "uz": "Corporate Strategy (Ssenariy 59)",
            "ru": "Corporate Strategy (Сценарий 59)"
        },
        "questions": [
            {
                "id": "q_sp59",
                "title": {
                    "uz": "Korporativ: Kompaniya raqobatchi bilan birlashishni (Merger) rejalashtirmoqda. Xodimlar orasida vahima boshlandi va ish unumdorligi tushdi. (Case #59)",
                    "ru": "Корпоратив: Компания планирует слияние с конкурентом. Среди сотрудников началась паника, продуктивность упала. (Кейс #59)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Xodimlar bilan ochiq muloqot o'tkazish, yangi istiqbollarni tushuntirish va kafolatlar berish",
                            "ru": "Провести открытую встречу, объяснить перспективы и дать гарантии"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Ma'lumotni 'maxfiy' deb tasdiqlash va savollarga javob bermaslik",
                            "ru": "Подтвердить секретность и не отвечать на вопросы"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Eshma-gap tarqatganlarni darhol bo'shatish",
                            "ru": "Уволить тех, кто распространяет слухи"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "sp60",
        "sectionId": "decision",
        "title": {
            "uz": "Financial Risk Management (Ssenariy 60)",
            "ru": "Financial Risk Management (Сценарий 60)"
        },
        "questions": [
            {
                "id": "q_sp60",
                "title": {
                    "uz": "Moliya: Kurs o'zgarishi tufayli valyuta bilan to'lanadigan qarzlar 50% ga oshdi. Kompaniya defolt holatiga kelib qolishi mumkin. (Case #60)",
                    "ru": "Финансы: Из-за девальвации валютные долги выросли на 50%. Компании грозит дефолт. (Кейс #60)"
                },
                "options": [
                    {
                        "text": {
                            "uz": "Kreditorlar bilan to'lov muddatlarini uzaytirishni muzokara qilish, xarajatlarni qisqartirish va valyuta risklarini xedjlash",
                            "ru": "Переговоры о реструктуризации долга, сокращение расходов и хеджирование валютных рисков"
                        },
                        "score": 20
                    },
                    {
                        "text": {
                            "uz": "Kredit olib, eski qarzni yopish",
                            "ru": "Взять новый кредит, чтобы закрыть старый"
                        },
                        "score": 5
                    },
                    {
                        "text": {
                            "uz": "Hech narsa qilmasdan, inqirozni o'tib ketishini kutish",
                            "ru": "Ничего не делать, ждать пока кризис пройдет"
                        },
                        "score": 0
                    }
                ]
            }
        ]
    }
];
