import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class Cities {
 cities = [
    {
        "name": "Айтос",
        "region": "Бургас",
        "population": 22500
    },
    {
        "name": "Аксаково",
        "region": "Варна",
        "population": 8206
    },
    {
        "name": "Алфатар",
        "region": "Силистра",
        "population": 1608
    },
    {
        "name": "Антоново",
        "region": "Търговище",
        "population": 1437
    },
    {
        "name": "Априлци",
        "region": "Ловеч",
        "population": 2867
    },
    {
        "name": "Ардино",
        "region": "Кърджали",
        "population": 3973
    },
    {
        "name": "Асеновград",
        "region": "Пловдив",
        "population": 52896
    },
    {
        "name": "Ахелой",
        "region": "Бургас",
        "population": 2109
    },
    {
        "name": "Ахтопол",
        "region": "Бургас",
        "population": 1436
    },
    {
        "name": "Балчик",
        "region": "Добрич",
        "population": 12726
    },
    {
        "name": "Банкя",
        "region": "София град",
        "population": 11662
    },
    {
        "name": "Банско",
        "region": "Благоевград",
        "population": 8170
    },
    {
        "name": "Баня",
        "region": "Пловдив",
        "population": 3329
    },
    {
        "name": "Батак",
        "region": "Пазарджик",
        "population": 3266
    },
    {
        "name": "Батановци",
        "region": "Перник",
        "population": 2230
    },
    {
        "name": "Белене",
        "region": "Плевен",
        "population": 8318
    },
    {
        "name": "Белица",
        "region": "Благоевград",
        "population": 3184
    },
    {
        "name": "Белово",
        "region": "Пазарджик",
        "population": 3876
    },
    {
        "name": "Белоградчик",
        "region": "Видин",
        "population": 5452
    },
    {
        "name": "Белослав",
        "region": "Варна",
        "population": 8129
    },
    {
        "name": "Берковица",
        "region": "Монтана",
        "population": 13708
    },
    {
        "name": "Благоевград",
        "region": "Благоевград",
        "population": 75397
    },
    {
        "name": "Бобов дол",
        "region": "Кюстендил",
        "population": 6040
    },
    {
        "name": "Бобошево",
        "region": "Кюстендил",
        "population": 1330
    },
    {
        "name": "Божурище",
        "region": "Софийска",
        "population": 5420
    },
    {
        "name": "Бойчиновци",
        "region": "Монтана",
        "population": 1487
    },
    {
        "name": "Болярово",
        "region": "Ямбол",
        "population": 1245
    },
    {
        "name": "Борово",
        "region": "Русе",
        "population": 2252
    },
    {
        "name": "Ботевград",
        "region": "Софийска",
        "population": 21407
    },
    {
        "name": "Брацигово",
        "region": "Пазарджик",
        "population": 4262
    },
    {
        "name": "Брегово",
        "region": "Видин",
        "population": 2572
    },
    {
        "name": "Брезник",
        "region": "Перник",
        "population": 4092
    },
    {
        "name": "Брезово",
        "region": "Пловдив",
        "population": 1894
    },
    {
        "name": "Брусарци",
        "region": "Монтана",
        "population": 1188
    },
    {
        "name": "Бургас",
        "region": "Бургас",
        "population": 206722
    },
    {
        "name": "Бухово",
        "region": "София град",
        "population": 2913
    },
    {
        "name": "Българово",
        "region": "Бургас",
        "population": 2001
    },
    {
        "name": "Бяла",
        "region": "Варна",
        "population": 2263
    },
    {
        "name": "Бяла",
        "region": "Русе",
        "population": 8921
    },
    {
        "name": "Бяла Слатина",
        "region": "Враца",
        "population": 12627
    },
    {
        "name": "Бяла Черква",
        "region": "Велико Търново",
        "population": 2606
    },
    {
        "name": "Варна",
        "region": "Варна",
        "population": 348136
    },
    {
        "name": "Велики Преслав",
        "region": "Шумен",
        "population": 8937
    },
    {
        "name": "Велико Търново",
        "region": "Велико Търново",
        "population": 71156
    },
    {
        "name": "Велинград",
        "region": "Пазарджик",
        "population": 24800
    },
    {
        "name": "Ветово",
        "region": "Русе",
        "population": 4831
    },
    {
        "name": "Ветрен",
        "region": "Пазарджик",
        "population": 3152
    },
    {
        "name": "Видин",
        "region": "Видин",
        "population": 51699
    },
    {
        "name": "Враца",
        "region": "Враца",
        "population": 62000
    },
    {
        "name": "Вълчедръм",
        "region": "Монтана",
        "population": 3568
    },
    {
        "name": "Вълчи дол",
        "region": "Варна",
        "population": 3425
    },
    {
        "name": "Върбица",
        "region": "Шумен",
        "population": 3595
    },
    {
        "name": "Вършец",
        "region": "Монтана",
        "population": 6251
    },
    {
        "name": "Габрово",
        "region": "Габрово",
        "population": 60364
    },
    {
        "name": "Генерал Тошево",
        "region": "Добрич",
        "population": 6963
    },
    {
        "name": "Главиница",
        "region": "Силистра",
        "population": 1881
    },
    {
        "name": "Глоджево",
        "region": "Русе",
        "population": 3506
    },
    {
        "name": "Годеч",
        "region": "Софийска",
        "population": 4332
    },
    {
        "name": "Горна Оряховица",
        "region": "Велико Търново",
        "population": 33156
    },
    {
        "name": "Гоце Делчев",
        "region": "Благоевград",
        "population": 20358
    },
    {
        "name": "Грамада",
        "region": "Видин",
        "population": 1481
    },
    {
        "name": "Гулянци",
        "region": "Плевен",
        "population": 3424
    },
    {
        "name": "Гурково",
        "region": "Стара Загора",
        "population": 2996
    },
    {
        "name": "Гълъбово",
        "region": "Стара Загора",
        "population": 8675
    },
    {
        "name": "Две могили",
        "region": "Русе",
        "population": 4252
    },
    {
        "name": "Дебелец",
        "region": "Велико Търново",
        "population": 3919
    },
    {
        "name": "Девин",
        "region": "Смолян",
        "population": 6587
    },
    {
        "name": "Девня",
        "region": "Варна",
        "population": 9259
    },
    {
        "name": "Джебел",
        "region": "Кърджали",
        "population": 3200
    },
    {
        "name": "Димитровград",
        "region": "Хасково",
        "population": 39934
    },
    {
        "name": "Димово",
        "region": "Видин",
        "population": 1193
    },
    {
        "name": "Добринище",
        "region": "Благоевград",
        "population": 2668
    },
    {
        "name": "Добрич",
        "region": "Добрич",
        "population": 96881
    },
    {
        "name": "Долна баня",
        "region": "Софийска",
        "population": 4793
    },
    {
        "name": "Долна Митрополия",
        "region": "Плевен",
        "population": 3417
    },
    {
        "name": "Долна Оряховица",
        "region": "Велико Търново",
        "population": 2884
    },
    {
        "name": "Долни Дъбник",
        "region": "Плевен",
        "population": 4520
    },
    {
        "name": "Долни чифлик",
        "region": "Варна",
        "population": 7056
    },
    {
        "name": "Доспат",
        "region": "Смолян",
        "population": 2343
    },
    {
        "name": "Драгоман",
        "region": "Софийска",
        "population": 3300
    },
    {
        "name": "Дряново",
        "region": "Габрово",
        "population": 8028
    },
    {
        "name": "Дулово",
        "region": "Силистра",
        "population": 7063
    },
    {
        "name": "Дунавци",
        "region": "Видин",
        "population": 2597
    },
    {
        "name": "Дупница",
        "region": "Кюстендил",
        "population": 37416
    },
    {
        "name": "Дългопол",
        "region": "Варна",
        "population": 4847
    },
    {
        "name": "Елена",
        "region": "Велико Търново",
        "population": 5693
    },
    {
        "name": "Елин Пелин",
        "region": "Софийска",
        "population": 7278
    },
    {
        "name": "Елхово",
        "region": "Ямбол",
        "population": 10492
    },
    {
        "name": "Етрополе",
        "region": "Софийска",
        "population": 10951
    },
    {
        "name": "Завет",
        "region": "Разград",
        "population": 3250
    },
    {
        "name": "Земен",
        "region": "Перник",
        "population": 1749
    },
    {
        "name": "Златарица",
        "region": "Велико Търново",
        "population": 2723
    },
    {
        "name": "Златица",
        "region": "Софийска",
        "population": 5018
    },
    {
        "name": "Златоград",
        "region": "Смолян",
        "population": 7220
    },
    {
        "name": "Ивайловград",
        "region": "Хасково",
        "population": 3685
    },
    {
        "name": "Игнатиево",
        "region": "Варна",
        "population": 4288
    },
    {
        "name": "Искър",
        "region": "Плевен",
        "population": 3462
    },
    {
        "name": "Исперих",
        "region": "Разград",
        "population": 9080
    },
    {
        "name": "Ихтиман",
        "region": "Софийска",
        "population": 13591
    },
    {
        "name": "Каблешково",
        "region": "Бургас",
        "population": 2898
    },
    {
        "name": "Каварна",
        "region": "Добрич",
        "population": 11832
    },
    {
        "name": "Казанлък",
        "region": "Стара Загора",
        "population": 50850
    },
    {
        "name": "Калофер",
        "region": "Пловдив",
        "population": 2921
    },
    {
        "name": "Камено",
        "region": "Бургас",
        "population": 5334
    },
    {
        "name": "Каолиново",
        "region": "Шумен",
        "population": 1790
    },
    {
        "name": "Карлово",
        "region": "Пловдив",
        "population": 24288
    },
    {
        "name": "Карнобат",
        "region": "Бургас",
        "population": 18301
    },
    {
        "name": "Каспичан",
        "region": "Шумен",
        "population": 3186
    },
    {
        "name": "Кермен",
        "region": "Сливен",
        "population": 1738
    },
    {
        "name": "Килифарево",
        "region": "Велико Търново",
        "population": 2365
    },
    {
        "name": "Китен",
        "region": "Бургас",
        "population": 1131
    },
    {
        "name": "Клисура",
        "region": "Пловдив",
        "population": 1093
    },
    {
        "name": "Кнежа",
        "region": "Плевен",
        "population": 11060
    },
    {
        "name": "Козлодуй",
        "region": "Враца",
        "population": 13677
    },
    {
        "name": "Койнаре",
        "region": "Плевен",
        "population": 4541
    },
    {
        "name": "Копривщица",
        "region": "Софийска",
        "population": 2348
    },
    {
        "name": "Костандово",
        "region": "Пазарджик",
        "population": 4299
    },
    {
        "name": "Костенец",
        "region": "Софийска",
        "population": 6633
    },
    {
        "name": "Костинброд",
        "region": "Софийска",
        "population": 11849
    },
    {
        "name": "Котел",
        "region": "Сливен",
        "population": 5880
    },
    {
        "name": "Кочериново",
        "region": "Кюстендил",
        "population": 2288
    },
    {
        "name": "Кресна",
        "region": "Благоевград",
        "population": 3656
    },
    {
        "name": "Криводол",
        "region": "Враца",
        "population": 3259
    },
    {
        "name": "Кричим",
        "region": "Пловдив",
        "population": 8605
    },
    {
        "name": "Крумовград",
        "region": "Кърджали",
        "population": 4943
    },
    {
        "name": "Крън",
        "region": "Стара Загора",
        "population": 3382
    },
    {
        "name": "Кубрат",
        "region": "Разград",
        "population": 7750
    },
    {
        "name": "Куклен",
        "region": "Пловдив",
        "population": 5999
    },
    {
        "name": "Кула",
        "region": "Видин",
        "population": 3222
    },
    {
        "name": "Кърджали",
        "region": "Кърджали",
        "population": 49326
    },
    {
        "name": "Кюстендил",
        "region": "Кюстендил",
        "population": 48135
    },
    {
        "name": "Левски",
        "region": "Плевен",
        "population": 10922
    },
    {
        "name": "Летница",
        "region": "Ловеч",
        "population": 3483
    },
    {
        "name": "Ловеч",
        "region": "Ловеч",
        "population": 37568
    },
    {
        "name": "Лозница",
        "region": "Разград",
        "population": 2297
    },
    {
        "name": "Лом",
        "region": "Монтана",
        "population": 24522
    },
    {
        "name": "Луковит",
        "region": "Ловеч",
        "population": 9583
    },
    {
        "name": "Лъки",
        "region": "Пловдив",
        "population": 2402
    },
    {
        "name": "Любимец",
        "region": "Хасково",
        "population": 7681
    },
    {
        "name": "Лясковец",
        "region": "Велико Търново",
        "population": 8629
    },
    {
        "name": "Мадан",
        "region": "Смолян",
        "population": 6578
    },
    {
        "name": "Маджарово",
        "region": "Хасково",
        "population": 724
    },
    {
        "name": "Малко Търново",
        "region": "Бургас",
        "population": 2397
    },
    {
        "name": "Мартен",
        "region": "Русе",
        "population": 3704
    },
    {
        "name": "Мездра",
        "region": "Враца",
        "population": 10927
    },
    {
        "name": "Мелник",
        "region": "Благоевград",
        "population": 334
    },
    {
        "name": "Меричлери",
        "region": "Хасково",
        "population": 1812
    },
    {
        "name": "Мизия",
        "region": "Враца",
        "population": 3282
    },
    {
        "name": "Момин проход",
        "region": "Софийска",
        "population": 1611
    },
    {
        "name": "Момчилград",
        "region": "Кърджали",
        "population": 8317
    },
    {
        "name": "Монтана",
        "region": "Монтана",
        "population": 45191
    },
    {
        "name": "Мъглиж",
        "region": "Стара Загора",
        "population": 3479
    },
    {
        "name": "Неделино",
        "region": "Смолян",
        "population": 4273
    },
    {
        "name": "Несебър",
        "region": "Бургас",
        "population": 13710
    },
    {
        "name": "Николаево",
        "region": "Стара Загора",
        "population": 3147
    },
    {
        "name": "Никопол",
        "region": "Плевен",
        "population": 3907
    },
    {
        "name": "Нова Загора",
        "region": "Сливен",
        "population": 24074
    },
    {
        "name": "Нови Искър",
        "region": "София град",
        "population": 14005
    },
    {
        "name": "Нови пазар",
        "region": "Шумен",
        "population": 13652
    },
    {
        "name": "Обзор",
        "region": "Бургас",
        "population": 2480
    },
    {
        "name": "Омуртаг",
        "region": "Търговище",
        "population": 9195
    },
    {
        "name": "Опака",
        "region": "Търговище",
        "population": 2776
    },
    {
        "name": "Оряхово",
        "region": "Враца",
        "population": 5562
    },
    {
        "name": "Павел баня",
        "region": "Стара Загора",
        "population": 2843
    },
    {
        "name": "Павликени",
        "region": "Велико Търново",
        "population": 10952
    },
    {
        "name": "Пазарджик",
        "region": "Пазарджик",
        "population": 77103
    },
    {
        "name": "Панагюрище",
        "region": "Пазарджик",
        "population": 17929
    },
    {
        "name": "Перник",
        "region": "Перник",
        "population": 79044
    },
    {
        "name": "Перущица",
        "region": "Пловдив",
        "population": 5139
    },
    {
        "name": "Петрич",
        "region": "Благоевград",
        "population": 31141
    },
    {
        "name": "Пещера",
        "region": "Пазарджик",
        "population": 20467
    },
    {
        "name": "Пирдоп",
        "region": "Софийска",
        "population": 7536
    },
    {
        "name": "Плачковци",
        "region": "Габрово",
        "population": 1811
    },
    {
        "name": "Плевен",
        "region": "Плевен",
        "population": 112840
    },
    {
        "name": "Плиска",
        "region": "Шумен",
        "population": 1014
    },
    {
        "name": "Пловдив",
        "region": "Пловдив",
        "population": 368853
    },
    {
        "name": "Полски Тръмбеш",
        "region": "Велико Търново",
        "population": 4586
    },
    {
        "name": "Поморие",
        "region": "Бургас",
        "population": 14003
    },
    {
        "name": "Попово",
        "region": "Търговище",
        "population": 16047
    },
    {
        "name": "Пордим",
        "region": "Плевен",
        "population": 2111
    },
    {
        "name": "Правец",
        "region": "Софийска",
        "population": 4321
    },
    {
        "name": "Приморско",
        "region": "Бургас",
        "population": 3546
    },
    {
        "name": "Провадия",
        "region": "Варна",
        "population": 13145
    },
    {
        "name": "Първомай",
        "region": "Пловдив",
        "population": 14091
    },
    {
        "name": "Раднево",
        "region": "Стара Загора",
        "population": 13329
    },
    {
        "name": "Радомир",
        "region": "Перник",
        "population": 14342
    },
    {
        "name": "Разград",
        "region": "Разград",
        "population": 35177
    },
    {
        "name": "Разлог",
        "region": "Благоевград",
        "population": 12820
    },
    {
        "name": "Ракитово",
        "region": "Пазарджик",
        "population": 8648
    },
    {
        "name": "Раковски",
        "region": "Пловдив",
        "population": 15586
    },
    {
        "name": "Рила",
        "region": "Кюстендил",
        "population": 2783
    },
    {
        "name": "Роман",
        "region": "Враца",
        "population": 3013
    },
    {
        "name": "Рудозем",
        "region": "Смолян",
        "population": 3625
    },
    {
        "name": "Русе",
        "region": "Русе",
        "population": 160511
    },
    {
        "name": "Садово",
        "region": "Пловдив",
        "population": 2407
    },
    {
        "name": "Самоков",
        "region": "Софийска",
        "population": 27348
    },
    {
        "name": "Сандански",
        "region": "Благоевград",
        "population": 28342
    },
    {
        "name": "Сапарева баня",
        "region": "Кюстендил",
        "population": 4128
    },
    {
        "name": "Свети Влас",
        "region": "Бургас",
        "population": 4092
    },
    {
        "name": "Свиленград",
        "region": "Хасково",
        "population": 18802
    },
    {
        "name": "Свищов",
        "region": "Велико Търново",
        "population": 32132
    },
    {
        "name": "Своге",
        "region": "Софийска",
        "population": 8084
    },
    {
        "name": "Севлиево",
        "region": "Габрово",
        "population": 24558
    },
    {
        "name": "Сеново",
        "region": "Русе",
        "population": 1449
    },
    {
        "name": "Септември",
        "region": "Пазарджик",
        "population": 8504
    },
    {
        "name": "Силистра",
        "region": "Силистра",
        "population": 38364
    },
    {
        "name": "Симеоновград",
        "region": "Хасково",
        "population": 6988
    },
    {
        "name": "Симитли",
        "region": "Благоевград",
        "population": 7199
    },
    {
        "name": "Славяново",
        "region": "Плевен",
        "population": 4351
    },
    {
        "name": "Сливен",
        "region": "Сливен",
        "population": 96598
    },
    {
        "name": "Сливница",
        "region": "Софийска",
        "population": 7268
    },
    {
        "name": "Сливо поле",
        "region": "Русе",
        "population": 3322
    },
    {
        "name": "Смолян",
        "region": "Смолян",
        "population": 30785
    },
    {
        "name": "Смядово",
        "region": "Шумен",
        "population": 4049
    },
    {
        "name": "Созопол",
        "region": "Бургас",
        "population": 5236
    },
    {
        "name": "Сопот",
        "region": "Пловдив",
        "population": 9125
    },
    {
        "name": "София",
        "region": "София град",
        "population": 1281148
    },
    {
        "name": "Средец",
        "region": "Бургас",
        "population": 9161
    },
    {
        "name": "Стамболийски",
        "region": "Пловдив",
        "population": 11662
    },
    {
        "name": "Стара Загора",
        "region": "Стара Загора",
        "population": 149439
    },
    {
        "name": "Стражица",
        "region": "Велико Търново",
        "population": 5323
    },
    {
        "name": "Стралджа",
        "region": "Ямбол",
        "population": 6349
    },
    {
        "name": "Стрелча",
        "region": "Пазарджик",
        "population": 4226
    },
    {
        "name": "Суворово",
        "region": "Варна",
        "population": 5054
    },
    {
        "name": "Сунгурларе",
        "region": "Бургас",
        "population": 3292
    },
    {
        "name": "Сухиндол",
        "region": "Велико Търново",
        "population": 1996
    },
    {
        "name": "Съединение",
        "region": "Пловдив",
        "population": 5788
    },
    {
        "name": "Сърница",
        "region": "Пазарджик",
        "population": 3590
    },
    {
        "name": "Твърдица",
        "region": "Сливен",
        "population": 6082
    },
    {
        "name": "Тервел",
        "region": "Добрич",
        "population": 6764
    },
    {
        "name": "Тетевен",
        "region": "Ловеч",
        "population": 10185
    },
    {
        "name": "Тополовград",
        "region": "Хасково",
        "population": 5474
    },
    {
        "name": "Троян",
        "region": "Ловеч",
        "population": 22179
    },
    {
        "name": "Трън",
        "region": "Перник",
        "population": 2552
    },
    {
        "name": "Тръстеник",
        "region": "Плевен",
        "population": 4536
    },
    {
        "name": "Трявна",
        "region": "Габрово",
        "population": 9621
    },
    {
        "name": "Тутракан",
        "region": "Силистра",
        "population": 9567
    },
    {
        "name": "Търговище",
        "region": "Търговище",
        "population": 39836
    },
    {
        "name": "Угърчин",
        "region": "Ловеч",
        "population": 2731
    },
    {
        "name": "Хаджидимово",
        "region": "Благоевград",
        "population": 2702
    },
    {
        "name": "Харманли",
        "region": "Хасково",
        "population": 19617
    },
    {
        "name": "Хасково",
        "region": "Хасково",
        "population": 77365
    },
    {
        "name": "Хисаря",
        "region": "Пловдив",
        "population": 7264
    },
    {
        "name": "Цар Калоян",
        "region": "Разград",
        "population": 3742
    },
    {
        "name": "Царево",
        "region": "Бургас",
        "population": 6268
    },
    {
        "name": "Чепеларе",
        "region": "Смолян",
        "population": 5332
    },
    {
        "name": "Червен бряг",
        "region": "Плевен",
        "population": 13958
    },
    {
        "name": "Черноморец",
        "region": "Бургас",
        "population": 2186
    },
    {
        "name": "Чипровци",
        "region": "Монтана",
        "population": 1835
    },
    {
        "name": "Чирпан",
        "region": "Стара Загора",
        "population": 16517
    },
    {
        "name": "Шабла",
        "region": "Добрич",
        "population": 3488
    },
    {
        "name": "Шивачево",
        "region": "Сливен",
        "population": 3833
    },
    {
        "name": "Шипка",
        "region": "Стара Загора",
        "population": 1355
    },
    {
        "name": "Шумен",
        "region": "Шумен",
        "population": 89365
    },
    {
        "name": "Ябланица",
        "region": "Ловеч",
        "population": 2799
    },
    {
        "name": "Якоруда",
        "region": "Благоевград",
        "population": 5512
    },
    {
        "name": "Ямбол",
        "region": "Ямбол",
        "population": 77150
    }
]
}