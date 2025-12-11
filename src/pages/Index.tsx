import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scanStarted, setScanStarted] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = () => {
    // Отправляем цель в Яндекс.Метрику
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(105513639, 'reachGoal', 'scan-button');
    }
    
    setScanStarted(true);
    setTimeout(() => {
      setScanComplete(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl w-full relative z-10">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-bold text-primary">ATTENTION: HR & RECRUITERS</span>
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Привет! Спасибо, что кликнула.
                </h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/40 rounded-full mb-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  Я сделал эту страницу, чтобы сэкономить твое время и нервы.
                </p>

                <div className="bg-card/50 backdrop-blur-sm border-l-4 border-primary rounded-r-2xl p-6 shadow-lg">
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">
                    Я недавно попробовал посмотреть на рынок глазами HR. Пролистал десятки резюме коллег... и мне стало тебя искренне жаль. Шаблонные фразы, вода, "успешный успех".
                  </p>
                  <p className="text-base text-foreground leading-relaxed font-medium mb-3">
                    В этот момент я решил: <span className="text-primary">не хочу тратить твое время на очередное "стрессоустойчивый и коммуникабельный"</span>. Я сделал эту страницу, чтобы мы сэкономили друг другу время и нервы. Без пафоса.
                  </p>
                  <p className="text-lg font-bold text-foreground flex items-center gap-2">
                    Листай вниз, давай сверим наши "боли". Уверен, тебе это знакомо. 
                    <Icon name="ArrowDown" className="text-primary animate-bounce" size={24} />
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-3xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-card via-card to-card/80 border-2 border-primary/20 rounded-3xl p-10 w-96 shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <Icon name="Sparkles" size={14} />
                      NOT AVERAGE
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                      <div className="relative w-44 h-44 rounded-full border-4 border-primary/30 bg-gradient-to-br from-secondary to-card flex items-center justify-center overflow-hidden shadow-xl">
                        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop" alt="Cute cat" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-primary to-primary/80 rounded-full p-3 shadow-lg">
                        <Icon name="Heart" size={24} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-foreground to-foreground/90 text-background px-8 py-3 rounded-full inline-block font-bold text-lg shadow-lg">
                      MARKETING PRO
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl p-5 border border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-foreground">CV Profile</h3>
                        <Icon name="Star" size={20} className="text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">EDITION 2025.11</p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-2">
                    <div className="h-2.5 flex-1 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-pulse shadow-sm"></div>
                    <div className="h-2.5 flex-1 bg-gradient-to-r from-primary/60 to-primary/40 rounded-full animate-pulse delay-100 shadow-sm"></div>
                    <div className="h-2.5 flex-1 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full animate-pulse delay-200 shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary/40 text-primary mb-6 px-4 py-1.5 text-sm font-bold">
              REALITY CHECK
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Дай я попробую угадать <span className="text-primary">твой день!</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group relative bg-gradient-to-br from-card to-card/80 p-8 rounded-3xl border-2 border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">👻</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Ghost" className="text-primary" size={24} />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary font-bold">
                    GHOSTING
                  </Badge>
                </div>
                <h3 className="text-2xl font-black mb-4 text-foreground">Алмаз, который растворился</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">Вот ты сидишь, разбираешь отклики и видишь: вот он, твой алмазик, Иван Иванович. Звонишь, договорились о встрече, ты уже выдохнула... а он просто МОЛЧА слился. Даже смс не написал.</p>
                <p className="text-sm text-primary/70 italic">(Знакомо, да?)</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-card to-card/80 p-8 rounded-3xl border-2 border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🧠</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Rocket" className="text-primary" size={24} />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary font-bold">
                    FAKE GURU
                  </Badge>
                </div>
                <h3 className="text-2xl font-black mb-4 text-foreground">Илон Маск на минималках</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Или приходит такой «Вася». Читаешь резюме — там второй Стив Джобс, запускал ракеты в космос и Кока-Колу с колен поднимал. Начинаешь копать... а там 3 месяца курсов скиллбокса и опыт настройки рекламы для маминой подруги.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-card to-card/80 p-8 rounded-3xl border-2 border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🕵️</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary font-bold">
                    SECRET AGENT
                  </Badge>
                </div>
                <h3 className="text-2xl font-black mb-4 text-foreground">Агент 007 (NDA)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  А вот еще персонажи, у которых всё под NDA. Кейсов нет, цифр нет, названий нет. Такое чувство, что здравый смысл там тоже попал под NDA.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-foreground text-background p-12 rounded-3xl text-center border-4 border-dashed border-foreground/20">
            <Badge variant="secondary" className="mb-6 bg-background text-foreground">
              TRUE STORY
            </Badge>
            <h3 className="text-4xl font-black mb-6">Печально?</h3>
            <p className="text-xl mb-2">
              Давай объективно — рынок сейчас похож на цирк.
            </p>
            <p className="text-xl mb-2">
              И угадай, кто крайняя? <span className="text-4xl font-black text-primary">ТЫ</span>. Тебе отвечать перед бизнесом.
            </p>
            <p className="text-xl">
              И я это прекрасно понимаю.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Почему{' '}
                <span className="text-primary">со мной</span>
                <br />
                проще
              </h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-xl text-background/80 leading-relaxed mb-8">
                Стараюсь быть честным, именно поэтому:
              </p>
              <div className="border-l-4 border-background/20 pl-6 text-background/60 italic mt-8">
                P.S. Я точно не идеальный. Я просто стараюсь быть честным с людьми и с собой, вот и все.
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: '01',
                  title: 'Не вру про опыт',
                  desc: 'Никаких выдуманных «Coca-Cola» и должностей «Head of Вселенная» в микроконторе.'
                },
                {
                  number: '02',
                  title: 'Не пропадаю',
                  desc: 'Договорились на созвон — я буду. Не могу — заранее предупрежу, а не исчезну в туман.'
                },
                {
                  number: '03',
                  title: 'Не устраиваю драму',
                  desc: 'Не превращаю интервью в психотерапию и не поливаю грязью бывших.'
                },
                {
                  number: '04',
                  title: 'Не играю в гения',
                  desc: 'Если не знаю — так и скажу. Но разберусь и вернусь с ответом.'
                },
                {
                  number: '05',
                  title: 'HR — не «секретарь»',
                  desc: 'Ты мой партнёр. Мне важно, чтобы тебе со мной было удобно.'
                }
              ].map((item) => (
                <div key={item.number} className="flex gap-6">
                  <div className="text-5xl font-black text-background/10">{item.number}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-background/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-secondary/40 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Сейчас для меня
            </h2>
            <h3 className="text-5xl md:text-6xl font-black text-primary mb-4">
              Маркетинг = Деньги
            </h3>
            <p className="text-xl text-muted-foreground mt-4">
              А не просто «красивые креативы», Директ, РСЯ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 p-8 rounded-3xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Package" className="text-primary" size={20} />
                  </div>
                  <h4 className="text-2xl font-bold">Продукт {'>'} Креатив</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">Сначала продукт и ЦА → потом креатив, а не наоборот.</p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 p-8 rounded-3xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="BarChart3" className="text-primary" size={20} />
                  </div>
                  <h4 className="text-2xl font-bold">Цифры {'>'} Ощущения</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">Гипотеза → тест → замер → решение (масштабировать или убить).</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 p-10 rounded-3xl mb-8 shadow-2xl">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-background" size={24} />
                </div>
                <h4 className="text-3xl font-bold text-background">Я в контексте Бизнеса</h4>
              </div>
              <p className="text-background/70 mb-8 text-lg">
                Я понимаю, что маркетинг не живёт в вакууме. Я знаю, что такое:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['ФОТ', 'Юнит-экономика', 'Окупаемость', 'ROI', 'LTV'].map((term) => (
                  <div key={term} className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-xl py-3 px-4 text-center text-background font-semibold hover:bg-background/20 transition-colors">
                    {term}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {['Быстро собираю лендинги', 'Быстро тестирую', 'Сегментирую ЦА', 'Сильный смысловик'].map((skill) => (
              <div key={skill} className="bg-primary/10 border border-primary/20 rounded-2xl py-3 px-6 text-primary font-semibold hover:bg-primary/20 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-8 border-background/30 text-background/70">
            BETA V.1.0
          </Badge>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Система<br />
            «Свой / Чужой»
          </h2>

          <p className="text-xl text-background/70 mb-4">
            А мы вообще сработаемся?
          </p>
          <p className="text-lg text-red-500 mb-12 font-bold uppercase">
            Нажми кнопку ниже, чтобы запустить диагностику совместимости.
          </p>

          {!scanStarted && (
            <div className="flex items-center gap-6">
              <Button 
                onClick={handleScan}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-16 py-8 text-2xl font-bold animate-pulse shadow-2xl"
              >
                SCAN
              </Button>
              <div className="flex items-center gap-3 animate-bounce">
                <Icon name="ArrowRight" size={40} className="text-red-500" />
                <p className="text-xl text-red-500 font-bold">Жми, запусти диагностику!</p>
              </div>
            </div>
          )}

          {scanStarted && !scanComplete && (
            <div className="bg-background/5 border border-background/20 rounded-2xl p-12 text-center">
              <div className="animate-pulse">
                <p className="text-2xl font-bold mb-4">Тест на адекватность... Пройдено</p>
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            </div>
          )}

          {scanComplete && (
            <div className="space-y-8">
              <div className="bg-background/5 border-2 border-[hsl(var(--green-accent))] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="CheckCircle" className="text-[hsl(var(--green-accent))]" size={32} />
                  <div>
                    <h3 className="text-2xl font-black text-[hsl(var(--green-accent))]">СОВПАДЕНИЕ ПОДТВЕРЖДЕНО</h3>
                    <p className="text-sm text-background/50">ID: #8392-AX</p>
                  </div>
                </div>
              </div>

              <div className="bg-background/5 border border-background/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Activity" className="text-[hsl(var(--green-accent))]" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-[hsl(var(--green-accent))] mb-2">Пинг: 0ms</h4>
                    <p className="text-background/70">
                      Режим «Вечный думатель» отключен. Если договорились — я включаюсь и делаю, а не имитирую бурную деятельность.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background/5 border border-background/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Terminal" className="text-[hsl(var(--green-accent))]" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-[hsl(var(--green-accent))] mb-2">Toxic Level: 0%</h4>
                    <p className="text-background/70">
                      Не душню, не ною, не самоутверждаюсь. Со мной можно спокойно идти к стейкхолдерам — краснеть не придется.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background/5 border border-background/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Lightbulb" className="text-[hsl(var(--green-accent))]" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-[hsl(var(--green-accent))] mb-2">Протокол «Ясность»</h4>
                    <p className="text-background/70">
                      Я не заставляю гуглить мои термины. Внятно рассказываю о проектах, без «эээ» и «ну типа».
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl font-bold mb-12">
            Если ты дочитала до этого места —<br />
            мы уже подозрительно совпадаем. 👀
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/40 border-2 border-muted p-8 rounded-2xl">
              <h3 className="text-2xl font-black mb-4 text-foreground">Тебе НЕ сюда, если нужен:</h3>
              <ul className="text-left space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
                  <span>«Звёздный» маркетолог с раздутым ЧСВ</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
                  <span>Платиновый сказочник, который красиво врёт</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
                  <span>Имитатор бурной деятельности</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">
                Лучше реально закрыть вкладку. Мы друг друга только замучаем.
              </p>
            </div>

            <div className="bg-[hsl(var(--green-accent))]/10 border-2 border-[hsl(var(--green-accent))]/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-black mb-4 text-[hsl(var(--green-accent))]">Жми кнопку ниже, если хочешь:</h3>
              <ul className="text-left space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[hsl(var(--green-accent))] mt-1 flex-shrink-0" size={20} />
                  <span>Живого адекватного маркетолога</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[hsl(var(--green-accent))] mt-1 flex-shrink-0" size={20} />
                  <span>Того, кто уважает твой календарь</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[hsl(var(--green-accent))] mt-1 flex-shrink-0" size={20} />
                  <span>Того, кто нормально говорит и работает</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-foreground">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-background text-center">Связаться</h2>
          
          <div className="bg-background rounded-3xl p-12 shadow-2xl">
            <div className="text-center space-y-6">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-bold w-full md:w-auto"
              >
                <a 
                  href="https://t.me/N_Rybakov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105513639, 'reachGoal', 'telegram-button');
                    }
                  }}
                >
                  <Icon name="Send" className="mr-3" size={24} />
                  Написать в Telegram
                </a>
              </Button>

              <p className="text-muted-foreground text-sm leading-relaxed"></p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-background/50 text-center text-sm bg-gray-800">
        <p>Сделано без шаблонов, честно и с душой</p>
      </footer>
    </div>
  );
};

export default Index;