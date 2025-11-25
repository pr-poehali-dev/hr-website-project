import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scanStarted, setScanStarted] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = () => {
    setScanStarted(true);
    setTimeout(() => {
      setScanComplete(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-8 border-primary text-primary px-4 py-1.5 text-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                ATTENTION: HR & RECRUITERS
              </Badge>
              
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                Привет!<br />
                Вот ты и{' '}
                <span className="text-primary">попала на лэндос</span>
              </h1>

              <div className="space-y-8 text-lg text-muted-foreground mt-12">
                <p className="text-foreground font-semibold text-xl">
                  Уверен, возник вопрос: "А зачем я сюда перешла?"
                </p>
                
                <p className="leading-relaxed">
                  Объясняю) Прежде чем откликнуться на вакансию, я просмотрел тонны резюме моих коллег. И знаешь, это все настолько банально, однотипно...
                </p>

                <p className="leading-relaxed">
                  "И знаешь, у меня в голове что-то щелкнуло и возникла мысль: <span className="text-primary font-semibold">'Я ведь могу лучше, гораздо лучше. И мне будет достаточно и 5 минут, чтобы убедить, что я гораздо сильнее <span className="text-[hsl(var(--green-accent))]">БОЛЬШИНСТВА</span>.'</span>"
                </p>

                <p className="text-xl">
                  Не веришь?))) Ну, и правильно делаешь:D Но давай все же проверим,{' '}
                  <span className="text-muted-foreground/60 uppercase tracking-wider text-sm">листай вниз!</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-3xl p-8 w-80 shadow-2xl">
                  <Badge variant="outline" className="mb-6 border-primary text-primary">
                    NOT AVERAGE
                  </Badge>
                  
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-4 border-border bg-secondary flex items-center justify-center">
                        <Icon name="User" size={64} className="text-muted-foreground" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                        <Icon name="Heart" size={20} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="bg-foreground text-background px-6 py-2 rounded-full inline-block font-bold">
                      MARKETING PRO
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-secondary/50 rounded-2xl p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">CV Profile</h3>
                        <Icon name="Star" size={20} className="text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">EDITION 2024</p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <div className="h-2 flex-1 bg-primary rounded-full animate-pulse"></div>
                    <div className="h-2 flex-1 bg-primary/50 rounded-full animate-pulse delay-100"></div>
                    <div className="h-2 flex-1 bg-primary/30 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground mb-8">
              REALITY CHECK
            </Badge>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Дай я попробую угадать <span className="text-primary">твой день!</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="mb-6">
                <Icon name="Ghost" className="text-primary" size={40} />
              </div>
              <Badge variant="outline" className="mb-4 text-xs border-muted-foreground/30 text-muted-foreground">
                GHOSTING
              </Badge>
              <h3 className="text-2xl font-black mb-4">Алмаз, который слился</h3>
              <p className="text-muted-foreground leading-relaxed">Вот ты сидишь, разбираешь резюмехи и видишь, вот он, твой алмазик, по имени Иван Иваныч. Звонишь ему и вроде бы все замечательно, договорились о встрече, а он... просто, СУКА,слился и даже не написал (плаки-плаки). Грусто</p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="mb-6">
                <Icon name="Rocket" className="text-primary" size={40} />
              </div>
              <Badge variant="outline" className="mb-4 text-xs border-muted-foreground/30 text-muted-foreground">
                FAKE GURU
              </Badge>
              <h3 className="text-2xl font-black mb-4">Илон Маск из Скиллбокса</h3>
              <p className="text-muted-foreground leading-relaxed">
                Или например. Приходит какой-то ВАся, читаешь резюме, а там чисто второй Илон Маск, чуть ли не Кока-Колу в одного запустил и Стив Джобс к нему ходил за советом. А что по факту? 4 месяца яндекс практикума или какой-нибудь скиллбокс) Было же, такое да?)
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="mb-6">
                <Icon name="Shield" className="text-primary" size={40} />
              </div>
              <Badge variant="outline" className="mb-4 text-xs border-muted-foreground/30 text-muted-foreground">
                SECRET AGENT
              </Badge>
              <h3 className="text-2xl font-black mb-4">Агент 007 (NDA)</h3>
              <p className="text-muted-foreground leading-relaxed">
                А вот еще персонажи, у которых все под NDA. Как бы, ну, ок... Ну, наверное, там здравый смысл тоже под NDA
              </p>
            </div>
          </div>

          <div className="bg-foreground text-background p-12 rounded-3xl text-center border-4 border-dashed border-foreground/20">
            <Badge variant="secondary" className="mb-6 bg-background text-foreground">
              TRUE STORY
            </Badge>
            <h3 className="text-4xl font-black mb-6">Печалька, да?</h3>
            <p className="text-xl mb-2">
              Давай объективно — сейчас на рынке просто цирк.
            </p>
            <p className="text-xl mb-2">
              И угадай, кто крайняя? <span className="text-4xl font-black text-primary">ТЫ</span>. И я это прекрасно понимаю.
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
          <p className="text-lg text-background/60 mb-12">
            Нажми кнопку ниже, чтобы запустить диагностику совместимости.
          </p>

          {!scanStarted && (
            <Button 
              onClick={handleScan}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-bold"
            >
              SCAN
            </Button>
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
                <a href="https://t.me/N_Rybakov" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-3" size={24} />
                  Написать в Telegram
                </a>
              </Button>

              <p className="text-muted-foreground text-sm leading-relaxed">
                P.S. +7 927 666 48 30 - это мой номер, если не отвечу в TG, пишите сюда, но не нужно звонить, пж 🙏
              </p>
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