﻿let value;
let prev = document.getElementById("prev")
let curr = document.getElementById("curr")
let next = document.getElementById("next")
let book_id = document.getElementById("book_id")
let bookId = book_id.innerHTML
book_id.innerHTML = ""
let book_text = document.getElementById("book_text")
value = book_text.innerHTML
book_text.InnerHTML = ""
let readingSpeed = 0
let setZero = true
var lines = getLines(value)
let reading = false
setScreen(lines)

function getLines(val) {
    let result = []
    let temp = val.split('\n')
    for (let t of temp) {
        let tmp = t.split(' ')
        for (let l of tmp)
            result.push(l)
    }
    return result
}

function setScreen(ls) {
    let lss = ls
    curr.innerHTML = lss[0]
    next.innerHTML = lss[1]
    lines.shift()
    lines.shift()
}

async function outputUpdate(speed) {
    reading = false
    let output = document.querySelector("#speed")
    output.value = speed;

    output.style.left = speed * 3.6 - 17 + 'px';
    if (output.value > 9) {
        output.style.left = speed * 3.6 - 25 + 'px';
    }
    if (output.value > 18) {
        output.style.left = speed * 3.6 - 26.5 + 'px';
    }
    if (output.value > 27) {
        output.style.left = speed * 3.6 - 28 + 'px';
    }
    if (output.value > 36) {
        output.style.left = speed * 3.6 - 29.5 + 'px';
    }
    if (output.value > 45) {
        output.style.left = speed * 3.6 - 31 + 'px';
    }
    if (output.value > 54) {
        output.style.left = speed * 3.6 - 32.5 + 'px';
    }
    if (output.value > 63) {
        output.style.left = speed * 3.6 - 34 + 'px';
    }
    if (output.value > 72) {
        output.style.left = speed * 3.6 - 35.5 + 'px';
    }
    if (output.value > 81) {
        output.style.left = speed * 3.6 - 37 + 'px';
    }
    if (output.value > 90) {
        output.style.left = speed * 3.6 - 38.5 + 'px';
    }
    if (output.value > 99) {
        output.style.left = speed * 3.6 - 47 + 'px';
    }
    reading = true
    change(speed)
}

async function change(speed) {
    readingSpeed = 0
    readingSpeed = (speed * 7) / 100
    if (typeof (lines[0]) === "undefined") {
        if (next.innerHTML != "" && next.innerHTML != "undefined") {
            prev.innerHTML = curr.innerHTML
            curr.innerHTML = next.innerHTML
            next.innerHTML = ""
        }
        return;
    }
    while (typeof (lines[0]) != "undefined" && readingSpeed != 0 && reading) {
        prev.innerHTML = curr.innerHTML
        curr.innerHTML = next.innerHTML
        next.innerHTML = lines[0]
        await sleep(1000 / readingSpeed)
        lines.shift()
    }
}

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

if (bookId == 2) {
    lines = []
    document.getElementById("book_name").innerHTML = "Великий Гетсбі"
    let val = 'Ще будучи зеленим і вразливим юнаком, я дістав від батька пораду, яку запам\'ятав на все життя.— Щоразу, коли тобі раптом захочеться когось осудити, — сказав він, — згадуй, що не кожному на цім світі випали переваги, які маєш ти.Він нічого не додав до цього, але ми з ним завжди розуміли один одного з півслова, і мені ясно було, що він має на думці набагато більше.Отож я привчив себе не квапитися з висновками і завдяки цій звичці не раз здобував прихильність людей пересічних, а ще частіше ставав жертвою невиправних зануд.Хвороблива натура швидко вловлює і зразу ж намагається використати вияв терпимості з боку людини цілком нормальної; ще в коледжі мені несправедливо закидали потяг до дешевої популярності через те, що найбільш вовкуваті й замкнуті хлопці звіряли мені свої потаємні жалі.Я зовсім не домагався такої відвертості — навпаки, помітивши в голосі співрозмовника перші нотки довірчих одкровень, я, бувало, вдавав, що хочу спати, чи поспішаю кудись, чи переходив на такий собі задерикувато - легковажний тон; адже, виливаючи душу, молоді люди, як правило, не добирають своїх власних слів, а говорять з чужого голосу і до того ж, на жаль, з явними недомовками.Стриманість у судженнях вселяє невичерпну надію.Я й досі побоююся прогавити щось, якщо забуду батькове снобістське зауваження — яке я по - снобістському повторюю — про те, що природа наділяє людей різним розумінням дозволеного і недозволеного.А тепер, похвалившись своєю терпимістю, я мушу зізнатися, що вона не безмежна.Поведінка людини може грунтуватися на засадах твердих, як камінь, чи хлипких, як твань, але часом настає і така мить, коли мене вже не обходить, на чому вона грунтується.Минулої осені, коли я повернувся з Нью - Йорка, мені хотілося, щоб людство стало на варту своїх моральних цінностей, як затягнутий у мундир солдат.З мене досить уже було розгульних екскурсій з відвіданням потаємних закутків людської душі.Тільки для Гетсбі, людини, ім\'ям якої названа ця книжка, я робив виняток,— для Гетсбі, котрий уособлював усе те, що я глибоко зневажаю. Якщо міряти особистість напругою її поривань, то він був особистістю надзвичайною, наділеною якоюсь загостреною чутливістю до всього, що може пообіцяти йому життя; він був немовби частиною одного з тих складних приладів, що реєструють підземні поштовхи на відстані десятків тисяч миль. Чутливість ця не мала нічого спільного з млявою вразливістю, яку гучно іменують "артистичною вдачею",— це була рідкісна здатність надіятися, романтичний запал, якого я ні в кому більше не зустрічав і, певне, вже ніколи не зустріну. Ні, Гетсбі наостанку виправдав себе; не він, а те, що тяжіло над ним, та отруйна курява, яку здіймали крила його мрії,— ось що на час позбавило мене інтересу до людських перебіжних печалей та скороминущих радощів. Я належу до заможної родини, яка от уже в третьому поколінні відіграє значну роль у житті нашого середньозахідного міста. Каррауеї — це, власне, цілий клан, що, за родинними переказами, походить від герцогів Баклу, але наша парость бере початок фактично від дідового брата, який приїхав сюди 1851 року, відкупився від участі в Громадянській війні й налагодив оптову торгівлю залізним товаром, яку тепер провадить мій батько. Я ніколи не бачив свого двоюрідного діда, але кажуть, ніби я схожий на нього — засвідчувати це має його досить грубий портрет, що висить у батьковому кабінеті. 1915 року, рівно через двадцять п\'ять років після мого батька, я завершив вищу освіту в Нью - Хейвені, [1] а трохи згодом узяв участь у тій запізнілій міграції тевтонських племен, яку заведено називати Великою світовою війною.Похідне життя так захопило мене, що, повернувшись додому, я вже не міг всидіти на місці.Рідний штат здавався мені тепер не славним осереддям всесвіту, а, скоріш, його пощербленим краєм; тим - то я вирішив податися на Схід і вивчитися на біржовика.Всі мої знайомі жили з біржі — тож невже вона не прогодує ще одного самотнього чоловіка ? Мої численні тітки й дядьки обговорювали це питання так заклопотано, наче йшлося про вибір для мене початкової школи, і нарешті дуже поважно й не дуже впевнено виголосили: "Власне, чом би й ні..." Батько погодився протягом року оплачувати мої рахунки, і ось після всіляких непередбачених затримок я навесні 1922 року приїхав до Нью - Йорка, як мені здавалося тоді, — назавжди.Мені, звісно, слід було б найняти помешкання в самому місті, але наближалося літо, а я прибув з краю просторих травників і тінистих дерев, і тому, коли один молодий колега по конторі запропонував найняти вдвох помешкання де - небудь у передмісті, я радо пристав на це.Він підшукав обшарпаний дачний будиночок за вісімдесят доларів на місяць, але в останню хвилину фірма відрядила його до Вашингтона й мені довелось оселитися там самому.Я завів собаку — щоправда, всього на кілька днів, бо потім він утік, — купив старенький "додж" і найняв служницю, фінку, яка стелила мені ліжко й готувала на електричній плитці сніданок, бормочучи собі під ніс якісь фінські мудрощі.Перші кілька днів я почував себе самотньо, аж поки одного ранку мене зупинив на дорозі якийсь чоловік.— Ви не скажете, як дістатися до Вест - Егга ?— безпорадно спитав він.Я пояснив.I коли я рушив далі, почутгя самотності як рукою зняло.Я був тутешній, я був старожил, я показував дорогу іншим! Випадковий перехожий надав мені звання почесного громадянина цієї місцевості.Сонце припікало щодень сильніше, бруньки розпукувалися, вистрілюючи листя, мов у кіно при вповільненій зйомці, і, як завжди о цій порі, я сповнювався вірою в те, що з настанням літа почнеться нове життя.Передусім я візьмуся за книжки, я читатиму їх одну за одною, а ще — набиратимуся сили й здоров\'я, п\'ючи на повні груди свіже, живлюще повітря.Я купив кільканадцять посібників з банківської і кредитної справи, з економіки капіталовкладень, і вони вишикувалися на полиці, сяючи червоними палітурками з золотим тисненням, мов щойно викарбувані монети, обіцяючи розкрити блискучі таємниці, відомі лише Мідасу, Моргану й Меценату.Я мав також благородний намір прочитати багато інших книжок.В університеті я захоплювався літературними вправами — протягом року навіть писав пишномовні, претензійні передові для "Йєльського вісника" — і тепер хотів удосконалитися на цій ниві, щоб знову стати найвужчим з усіх вузьких фахівців — так званою всебічно розвиненою людиною.Між іншим, я кажу це не для красного слова — зрештою, життя бачиш найліпше, коли спостерігаєш його тільки з одного вікна.Волею випадку я оселився в одному з найдивніших куточків Північної Америки, на неширокому, вкритому буйною рослинністю острові, що простягся просто на схід від Нью - Йорка, острові, на якому серед інших примх природи є два незвичайні геологічні утвори.За двадцять миль від міста в солону масу найбільш освоєних вод західної півкулі, в широченний затон, що зветься протокою Лонг - Айленд, заходять два миси, які обрисами нагадують величезні яйця, однакові за формою і розділені тільки невеликою затокою.Вони не являють собою ідеальні овали — кожне, як Колумбове яйце, знизу сплюснуте, — але схожість їхніх обрисів та розмірів, певне, щоразу спантеличує чайок, що пролітають над ними.Для безкрилих істот ще дивовижніша особливість полягає в тому, що, поза обрисами та розмірами, ці утвори цілковито відрізняються один від одного.Я оселився у Вест - Еггу — сказати б, менш фешенебельному з двох селищ, хоча цей словесний ярлик дуже приблизно окреслює химерний, ба навіть трохи лиховісний контраст між ними.Мій будиночок стояв на самому краю мису, ярдів за п\'ятдесят від берега, затиснутий між двома величезними особняками, з тих, які наймають на сезон за дванадцять-п\'ятнадцять тисяч.Особливо розкішною була споруда праворуч — достеменна копія якоїсь нормандської Hótel de Ville[2] з вежею, новенькі мури якої ще ледь прикривало обрідне плетиво плюща, з мармуровим плавальним басейном і садком на добрих сорок акрів.Я знав, що це особняк Гетсбі.Цебто, — оскільки ми з ним не були знайомі, — що він належить якомусь добродієві на прізвище Гетсбі.Мій будиночок був тут мов більмо на оці, але більмо таке малесеньке, що його навіть не помічали, й тому я мав змогу тішитися не тільки видом на море й на газон мого сусіда, а й усвідомленням того, що я живу в оточенні мільйонерів — і все за якихось вісімдесят доларів на місяць.По той бік затоки сяяли над водою білі палаци фешенебельного Іст - Егга, і, власне, історія літа, про яке йдеться, починається з мого вечірнього візита до Б\'юкененів, що мешкали в Іст-Еггу. Дейзі Б\'юкенен доводилася мені троюрідною сестрою, а Тома я знав ще з студентських часів.Відразу по війні я два дні гостював у них у Чікаго.Том, серед інших своїх спортивних перемог, здобув колись славу найкращого нападаючого футбольної команди Йєльського університету — тобто став одним із тих досить типових американців, котрі на двадцять першому році життя досягають граничної межі досконалості, за якою вже все, що б вони не робили, має присмак поразки.Батьки його були неймовірно багаті — ще в університеті йому дорікали за звичку розкидатися грошима, — і тепер він перебрався з Чікаго на Схід з розмахом просто - таки разючим; привіз, наприклад, з Лейк - Фореста цілий табун поні для гри в поло.Навіть важко було повірити, що в моєму поколінні є люди настільки багаті, що можуть дозволити собі таке.Я не знаю, що спонукало їх переселитися на Схід.Вони провели рік у Франції, теж без видимих на те причин, а потім якийсь час переїздили з місця на місце, завжди туди, де збиралися багатії, щоб разом грати в поло й тішитися своїм багатством. "Ми починаємо осідле життя", — сказала мені Дейзі по телефону, але я не повірив цьому.Я не міг зазирнути їй у душу, але мені здавалося, що Том довіку блукатиме по світу, гнаний тугою за безповоротно втраченою гостротою почуттів футболіста.Отак воно й сталося, що одного теплого вітряного вечора я приїхав до Іст - Егга в гості до двох своїх давніх приятелів, яких я, власне, майже не знав.Їхній особняк виявився ще пишнішим, ніж я собі уявляв.Це була весела червоно - біла споруда в південному колоніальному стилі з видом на затоку.';
    lines = getLines(val);
    setScreen(lines);
}
else if (bookId == 1) {
    lines = []
    document.getElementById("book_name").innerHTML = "Ромео і Джульєтта"
    let val = 'Два доми, рівно поважа́ні й славні, в Вероні красній, місці наших дій, знов починають свої чвари давні й чужою кров’ю кроплять розлад свій. З лон тих домів — рокована, нещасна — коханців пара у життя іде, і їх загибель — люта, передчасна — край ворожнечі батьківській кладе. Любов, що їм життя розбити має, і довга ворожнеча двох родин, що тільки з смертю їх дітей сконає, за дві години наш перейдуть кін. Прислухайтеся ж вухом небайдужим, ми працею всі вади надолужим. АКТ ПЕРШИЙ СЦЕНА 1 Майдан Входять Сансоне й Грегоріо, озброєні мечами та щитами. Сансоне Кажу ж, Грегоріо, ми не потерпимо знущання. Грегоріо Авжеж, хай нам перше руки й ноги потерпнуть. Сансоне Адже ми потерпаємо від гніву, кажу. Грегоріо Гляди лишень, поки живий, щоб тобі горлянка не отерпла. Сансоне Я швидко рубаю, як хто мене зрушить. Грегоріо Тільки що не швидко тебе зрушиш. Сансоне Собака з дому Монтеккі зрушить мене. Грегоріо Рухатись — кидатись, а бути хоробрим — стояти. Тим-то, коли ти зрушишся, ти кинешся навтіки. Сансоне Собака з того дому зрушить мене, щоб я став. Я стану під стіну проти якого завгодно чоловіка чи то дівки з дому Монтеккі. Грегоріо По цьому ж то й знати, що ти безсилий раб. Бо тільки безсилий тулиться до стіни. Сансоне Правда. Тим-то жінок завжди й припирають до стіни, що вони — слабші сосуди. Тому-то я чоловіків Монтеккі відпихатиму від стіни, а дівчат припиратиму до стіни. Грегоріо Сварка йде між нашими панами, а ми ж їхні слуги. Сансоне Все одно, я покажу себе тираном. Воювавши з чоловіками, буду лютий до дівчат: стинатиму їм голови. Грегоріо Голови дівчатам? Сансоне Еге, дівчатам або ж їхньому дівоцтву; розумій, як хочеш. Грегоріо Зрозуміють ті, кого це торкатиметься. Сансоне Я торкатимусь їх, поки стою на ногах. Адже відомо, що з мене добрий шмат м’яса. Грегоріо Добре, що не риби, бо була б з тебе тараня. Ну, виймай своє начиння: он ідуть двоє з дому Монтеккі. Сансоне Моя зброя наголо. Зачепи, а я заслоню тебе ззаду. Грегоріо Як! Повернешся задом та й втечеш? Сансоне Не бійся мене. Грегоріо Ще б пак: мені тебе боятися! Сансоне Нехай за нами буде право: хай вони почнуть. Грегоріо Я нахмурюсь, проходячи мимо! Хай вони думають, що хочуть. Сансоне Ні, що посміють. Я покажу їм дулю. Буде ганьба для їх, коли вони це стерплять. Входять Абрамо і Балдасаро. Абрамо Це ви показуєте дулю, синьйоре? Сансоне Я показую дулю, синьйоре... Абрамо Це ви нам показуєте дулю, синьйоре? Сансоне (стиха до Грегоріо) Чи буде право з нашого боку, як я скажу — еге? Грегоріо Ні. Сансоне Ні, синьйоре, я не показую вам дулі, синьйоре. Але я показую дулю, синьйоре. Грегоріо Ви чіпляєтесь, синьйоре. Абрамо Чіпляюсь? Ні, синьйоре. Сансоне Коли чіпляєтесь, синьйоре, я готовий. Я служу такому панові, як і ви. Абрамо Але не кращому. Сансоне Нехай так, синьйоре. Грегоріо (стиха до Сансоне, помітивши вдалині Тібальдо) Скажи — кращому: он іде один з роду мого пана. Сансоне Так, кращому, синьйоре. Абрамо Брешеш! Входить Бенволіо, оподаль. Сансоне Виймайте ж мечі, коли ви не баби.— Грегоріо, пригадай свій разючий удар. (Б’ються) Бенволіо Розійдіться, дурні! Сховайте мечі. Ви не знаєте, що робите. Відбиває їхні мечі. Входить Тібальдо. Тібальдо Як! Зняти меч між хлопів легкодухих? Огляньсь, Бенволіо, і смерть зустрінь. Бенволіо Я мир встановлюю. Сховай свій меч, або допоможи розборонити. Тібальдо З мечем про мир? Ненавиджу це слово, як пекло, всіх Монтеккі і тебе. Тримайся ж, боягузе! (Б’ються) Входять кілька осіб з обох домів і вмішуються в бійку. Потім входять кілька городян з киями та алебардами. 1-й городянин Київ, списів! А бийте їх! Трощіть! Геть Капулетті! Геть усіх Монтеккі! Входить Капулетті в халаті, з синьйорою Капулетті. Капулетті Що це за гук? Мій довгий меч, агей! Синьйора Капулетті Ні, костур, костур! Нащо меч тобі? Капулетті Мій меч, кажу! Прийшов старий Монтеккі й махає лезом на ганьбу мені. Входить Монтеккі з синьйорою Монтеккі. Монтеккі Поганче Капулетті! А пустіть-но! Синьйора Монтеккі Й на крок до ворога не підпущу. Входить герцог з почтом. Герцог Підданці буйні, миру вороги, що леза умочили в кров сусідську,— чи чуєте? Ви, люди, ви, звірюки, що гасите вогонь своєї злоби червоними струмками з власних жил,— під страхом кари, із кривавих рук на землю киньте ненаситну зброю й почуйте гнівний вирок свого князя! Три бучі, вами із пустого слова ізняті, Капулетті та Монтеккі, мир наших вулиць турбували тричі; і змушували мешканців Верони скидати з пліч своє вбрання поважне, й старі списи, від миру ржаві, взявши, ненависть вашу ржаву розчіпляти. Коли стривожите ви знову місто, життям тоді заплатите за мир. А поки що — розходьтеся усі. Ти, Капулетті, йди за мною слідом, а ти, Монтеккі, прийдеш по обіді довідатись про призвіл мій в цій справі у давній Город, у міське судище. Ще раз: під страхом смерти всі розходьтесь. Виходять герцог з почтом. Капулетті, синьйора Капулетті, Тібальдо, городяни й слуги. Монтеккі Хто сварку давню знов тут розпочав? Скажи, небоже, як вона зчинилась? Бенволіо Тут слуги супротивника і ваші рукопаш бились, як сюди прийшов я. Я вийняв меч..., щоб розвести їх. Раптом з мечем готовим надійшов Тібальдо — і, викликаючи мене, махав мечем над головою й різав вітер, що з марних помахів свистів глузливо. А поки ми ударами мінялись, набігли люди й стали битись поряд, аж поки герцог нас розборонив. Синьйора Монтеккі А де ж мій син? Чи хто про нього чув? Я рада, що в цій бучі він не був. Бенволіо Ще за годину перед тим, як сонце проглянуло з вікна свого на сході, тривожний дух погнав мене із хати. Гуляючи між фігових дерев в гайку на західному боці міста, я сина вашого тоді побачив. Пішов до нього. Та, мене уздрівши, у сховок гаю він скоріш прокрався. Я ж, мірячи його чуття своїми, що в марних пориваннях знемагали, занадто стомлений для товариства за настроєм своїм, а не його, йдучи, минув того, хто втік від мене. Монтеккі Там часто вранці бачили його, як він сльозами збільшує росу і додає до хмар зітханням хмари. А тільки сонце, всім привітне, має розсунути на сході щонайдальшім над постіллю Аврори тінні шати, тікає геть від світла син мій журний і замикається один в кімнаті і вікна запинає й денне світло вигонить, щоб зробити штучну ніч. Недобре настрій цей скінчитись може, хіба що рада добра допоможе. Бенволіо Шляхетний дядьку, знаєте причину? Монтеккі Ні, я дізнатися не зміг від нього. Бенволіо Чи ви хоч раз на нього натискали? Монтеккі І сам і через друзів натискав, та він же сам своїм чуттям порадник, і сам собі — не знаю вже, чи вірний,— але такий закритний потаємець, такий для зору інших неприступний,— як брость, підтята черв\'яком зажерним, не встигши розгорнутися в повітрі й свою красу для нього присвятити.Якби причину смутку нам узнати, то знали б ми, де ліків діставати.Входить Ромео, оподаль.Бенволіо Іде Ромео.Відступіться поки.Довідаюсь або прийму мороки.Монтеккі Бажаю успіху тобі, щоб скоро почув ти сповідь.Ми ж ходім, синьйоро.Виходять Монтеккі та синьйора Монтеккі.Бенволіо Із добрим ранком, брате.Ромео Чи ще рано ? Бенволіо Дев’ята.Ромео В смутку довшають години.То батько мій пішов так швидко звідси ? Бенволіо Він.Що ж за смуток час Ромео довжить ? Ромео Того, що час скорочує, відсутність.Бенволіо Любов ? Ромео Ні.Бенволіо Нелюбов ? Ромео Її неласка до мого кохання.Бенволіо О, чом любов, така на позір ніжна, тираном обертається жорстоким!';
    lines = getLines(val);
    setScreen(lines);
}
