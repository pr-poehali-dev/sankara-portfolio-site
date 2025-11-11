import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: 'Cpu',
      title: 'Изготовление стендов',
      description: 'Разработка и производство испытательных стендов для различных отраслей промышленности',
      details: 'Проектирование, изготовление и внедрение стендов любой сложности с использованием современных технологий'
    },
    {
      icon: 'Plane',
      title: 'Авиационное оборудование',
      description: 'Производство высокоточного оборудования для авиационной промышленности',
      details: 'Системы контроля, измерительное оборудование и комплексные решения для авиастроения'
    },
    {
      icon: 'Gauge',
      title: 'Системы гидравлики',
      description: 'Проектирование и монтаж гидравлических систем для промышленных объектов',
      details: 'Гидростанции, гидроприводы, системы управления и контроля гидравлических процессов'
    },
    {
      icon: 'Settings',
      title: 'Автоматизация',
      description: 'Комплексные решения по автоматизации производственных процессов',
      details: 'АСУ ТП, промышленные контроллеры, SCADA-системы и диспетчеризация'
    }
  ];

  const advantages = [
    { icon: 'Award', title: 'Опыт работы', text: 'Более 15 лет на рынке инженерных решений' },
    { icon: 'Users', title: 'Команда профессионалов', text: 'Высококвалифицированные инженеры и специалисты' },
    { icon: 'Shield', title: 'Гарантия качества', text: 'Полное сопровождение и гарантийное обслуживание' },
    { icon: 'Zap', title: 'Современные технологии', text: 'Использование передовых технологий и материалов' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Factory" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">КомТехИнжиниринг</h1>
                <p className="text-xs text-muted-foreground">Инженерные решения</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['services', 'about', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary"
                >
                  {section === 'services' ? 'Услуги' : section === 'about' ? 'О компании' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/2bc85543-d3c7-4657-b8f3-489cb9b48ac7/files/233d63d7-c822-446b-a3e7-cb39da39ce2f.jpg"
            alt="Производство"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>
        <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            ООО "КомТехИнжиниринг"
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light max-w-3xl mx-auto">
            Комплексные инженерные решения для промышленных предприятий
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Разработка и производство испытательных стендов, авиационного оборудования, систем гидравлики и автоматизации
          </p>
          <Button size="lg" onClick={() => scrollToSection('contact')} className="text-base px-8 py-6">
            Связаться с нами
          </Button>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted/30 animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Предоставляем полный спектр инженерных услуг от проектирования до внедрения и обслуживания
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 cursor-pointer transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    {activeService === index && (
                      <p className="text-sm text-foreground/80 animate-fade-in border-t border-border pt-4">
                        {service.details}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ООО "КомТехИнжиниринг" — современная инженерная компания, специализирующаяся на разработке и производстве 
                высокотехнологичного оборудования для промышленности.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы предлагаем комплексные решения в области создания испытательных стендов, авиационного оборудования, 
                гидравлических систем и автоматизации производственных процессов.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша команда состоит из высококвалифицированных инженеров с многолетним опытом работы в области 
                промышленного оборудования и систем автоматизации.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/2bc85543-d3c7-4657-b8f3-489cb9b48ac7/files/272fab35-6dbd-4d19-9803-cfd3c58d572d.jpg"
                alt="Производство"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 text-center hover:border-primary transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Наши технологии</h2>
            <p className="text-center text-muted-foreground mb-12">
              Используем передовые технологии и современное оборудование для реализации проектов любой сложности
            </p>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/2bc85543-d3c7-4657-b8f3-489cb9b48ac7/files/a253dfd8-ca41-4656-aae2-8036f180440e.jpg"
                alt="Технологии"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['3D моделирование', 'CAD/CAM системы', 'ЧПУ обработка', 'Промышленная автоматизация'].map((tech, idx) => (
                    <div key={idx} className="bg-background/80 backdrop-blur-sm p-4 rounded-lg text-center">
                      <p className="font-semibold text-sm">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Контакты</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта. Мы готовы предложить оптимальное решение
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Промышленная, д. 25</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@komtech.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      info@komtech.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50">
              <h3 className="text-2xl font-bold mb-6">Отправить заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input 
                    type="text" 
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.ru"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea 
                    rows={4}
                    placeholder="Опишите ваш проект..."
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                <Button className="w-full py-6" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Icon name="Factory" size={20} className="text-primary-foreground" />
              </div>
              <p className="font-semibold">ООО "КомТехИнжиниринг"</p>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 КомТехИнжиниринг. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;