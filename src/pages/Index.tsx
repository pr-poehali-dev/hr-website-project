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
        <div className="max-w-4xl w-full">
          <Badge variant="outline" className="mb-8 border-primary text-primary px-4 py-1.5 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            ATTENTION: HR & RECRUITERS
          </Badge>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            Привет!<br />
            Вот ты и{' '}
            <span className="text-primary">попала.</span>
          </h1>

          <div className="space-y-8 text-lg text-muted-foreground mt-12">
            <div className="border-l-4 border-foreground pl-6">
              <p className="text-foreground font-semibold text-xl mb-2">
                "А зачем я сюда перешла?"
              </p>
              <p className="leading-relaxed">
                Объясняю) Прежде чем откликнуться на вакансию, я просмотрел тонны резюме моих коллег. И знаешь, это все настолько банально, однотипно...
              </p>
            </div>

            <div className="border-l-4 border-foreground pl-6">
              <p className="leading-relaxed">
                "И знаешь, у меня в голове что-то щелкнуло: <span className="text-primary font-semibold">«Я ведь могу лучше»</span>. И мне будет достаточно <span className="underline decoration-2 decoration-foreground">5 минут</span>, чтобы убедить тебя."
              </p>
            </div>

            <p className="text-xl">
              Не веришь?))) Ну, и правильно делаешь:D Но давай все же проверим,{' '}
              <span className="text-muted-foreground/60 uppercase tracking-wider text-sm">листай вниз!</span>
            </p>
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
          
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
            Дай я попробую угадать
          </h2>
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="text-primary">твой день</span>
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
              <p className="text-muted-foreground leading-relaxed">
                Вроде все супер, договорились, а он... просто слился и даже не написал (плаки-плаки).
              </p>
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
                Резюме — космос, второй Джобс. По факту? 4 месяца курсов и ноль практики.
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
                Все под NDA. Здравый смысл тоже под NDA. Результатов не покажем, но поверь на слово.
              </p>
            </div>
          </div>

          <div className="bg-foreground text-background p-12 rounded-3xl text-center border-4 border-dashed border-foreground/20">
            <Badge variant="secondary" className="mb-6 bg-background text-foreground">
              TRUE STORY
            </Badge>
            <h3 className="text-4xl font-black mb-6">Печалька, да?</h3>
            <p className="text-xl mb-2">
              Давай объективно — сейчас на рынке просто цирк. И угадай, кто крайняя?
            </p>
            <p className="text-4xl font-black text-primary mt-4">
              ТЫ
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
                Стараюсь быть честным.<br />
                HR — не «секретарь», ты мой партнёр.
              </p>
              <div className="border-l-4 border-background/20 pl-6 text-background/60 italic">
                P.S. Я точно не идеальный. Я просто стараюсь быть честным с людьми и с собой.
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: '01',
                  title: 'Не вру про опыт',
                  desc: 'Никаких выдуманных «Head of Вселенная» в микроконторе.'
                },
                {
                  number: '02',
                  title: 'Не пропадаю',
                  desc: 'Договорились на созвон — я буду. Не могу — предупрежу.'
                },
                {
                  number: '03',
                  title: 'Не устраиваю драму',
                  desc: 'Не превращаю интервью в психотерапию.'
                },
                {
                  number: '04',
                  title: 'Не играю в гения',
                  desc: 'Если не знаю — так и скажу. Но разберусь.'
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

      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Сейчас для меня
            </h2>
            <h3 className="text-5xl md:text-6xl font-black text-primary">
              Маркетинг = Деньги
            </h3>
            <p className="text-xl text-muted-foreground mt-4">
              А не просто «красивые креативы», Директ, РСЯ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h4 className="text-2xl font-bold mb-3">Продукт {'>'} Креатив</h4>
              <p className="text-muted-foreground">Сначала продукт и ЦА → потом креатив, а не наоборот.</p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h4 className="text-2xl font-bold mb-3">Цифры {'>'} Ощущения</h4>
              <p className="text-muted-foreground">Гипотеза → тест → замер → решение (масштабировать или убить).</p>
            </div>
          </div>

          <div className="bg-card p-10 rounded-2xl border border-border">
            <h4 className="text-2xl font-bold mb-6">Бизнес в контексте</h4>
            <p className="text-muted-foreground mb-6">
              Я понимаю, что маркетинг не живёт в вакууме. Я знаю, что такое:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['ФОТ', 'Юнит-экономика', 'Окупаемость', 'ROI', 'LTV'].map((term) => (
                <Badge key={term} variant="secondary" className="text-center py-2">
                  {term}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {['Быстро собираю лендинги', 'Быстро тестирую', 'Сегментирую ЦА', 'Сильный смысловик'].map((skill) => (
                <Badge key={skill} className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
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

          <p className="text-xl text-background/70 mb-12">
            А мы вообще сработаемся? Запусти диагностику совместимости перед тем, как писать.
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
                <p className="text-2xl font-bold mb-4">Тест на адекватность...</p>
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            </div>
          )}

          {scanComplete && (
            <div className="space-y-8">
              <div className="bg-background/5 border border-hsl(var(--green-accent)) rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="CheckCircle" className="text-[hsl(var(--green-accent))]" size={32} />
                  <div>
                    <h3 className="text-2xl font-black text-[hsl(var(--green-accent))]">MATCH CONFIRMED</h3>
                    <p className="text-sm text-background/50">ID: #8392-AX</p>
                  </div>
                </div>
              </div>

              <div className="bg-background/5 border border-background/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Activity" className="text-[hsl(var(--green-accent))]" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-[hsl(var(--green-accent))] mb-2">ПИНГ: 0MS</h4>
                    <p className="text-background/70">
                      Включаюсь и делаю. Не имитирую деятельность.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background/5 border border-background/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Terminal" className="text-[hsl(var(--green-accent))]" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-[hsl(var(--green-accent))] mb-2">TOXIC: 0%</h4>
                    <p className="text-background/70">
                      Не душню. Краснеть перед стейкхолдерами не придется.
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
            <div className="bg-destructive/10 border-2 border-destructive/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-black mb-4 text-destructive">Тебе НЕ сюда, если нужен:</h3>
              <ul className="text-left space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive mt-1" size={20} />
                  <span>«Звёздный» маркетолог с раздутым ЧСВ</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive mt-1" size={20} />
                  <span>Платиновый сказочник, который красиво врёт</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive mt-1" size={20} />
                  <span>Имитатор бурной деятельности</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">
                Лучше реально закрыть вкладку. Мы друг друга только замучаем.
              </p>
            </div>

            <div className="bg-primary/10 border-2 border-primary/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-black mb-4 text-primary">Жми кнопку, если хочешь:</h3>
              <ul className="text-left space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Живого адекватного маркетолога</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Того, кто уважает твой календарь</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <span>Того, кто нормально говорит и работает</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-12">Связаться</h2>
          
          <div className="space-y-6">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-xl font-bold w-full md:w-auto"
            >
              <a href="https://t.me/N_Rybakov" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-3" size={24} />
                Написать в Telegram
              </a>
            </Button>

            <p className="text-white/80 text-sm">
              P.S. +7 927 666 48 30 - это мой номер, если не отвечу в TG, пишите сюда, но не нужно звонить, пж 🙏
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-foreground text-background/50 text-center text-sm">
        <p>Сделано без шаблонов, честно и с душой</p>
      </footer>
    </div>
  );
};

export default Index;
