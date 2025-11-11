import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

function Index() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const audioRef = useRef<HTMLAudioElement>(null);

  const repertoire = [
    { title: 'Ария из оперы "Травиата"', composer: 'Дж. Верди', duration: '4:32' },
    { title: 'Романс "Средь шумного бала"', composer: 'П.И. Чайковский', duration: '3:45' },
    { title: 'Каватина Розины', composer: 'Дж. Россини', duration: '5:12' },
  ];

  const testimonials = [
    { name: 'Михаил Петров', role: 'Музыкальный критик', text: 'Голос Санкара обладает редкой чистотой и эмоциональной глубиной. Каждое выступление - это настоящее событие.' },
    { name: 'Елена Соколова', role: 'Директор филармонии', text: 'Работать с таким талантливым исполнителем - большая честь. Санкара всегда дарит зрителям незабываемые впечатления.' },
  ];

  const videos = [
    { title: 'Концерт в Большом зале', thumbnail: 'https://cdn.poehali.dev/projects/2bc85543-d3c7-4657-b8f3-489cb9b48ac7/files/ceea2903-e57f-4fa2-8425-c0258177df92.jpg' },
    { title: 'Выступление на фестивале', thumbnail: 'https://cdn.poehali.dev/projects/2bc85543-d3c7-4657-b8f3-489cb9b48ac7/files/53f33c00-b07b-42d6-87b8-c8b8df815e75.jpg' },
  ];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'bio', 'repertoire', 'gallery', 'videos', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wide">Санкара</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'bio', 'repertoire', 'gallery', 'videos', 'testimonials', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'bio' ? 'Биография' :
                   section === 'repertoire' ? 'Репертуар' :
                   section === 'gallery' ? 'Галерея' :
                   section === 'videos' ? 'Видео' :
                   section === 'testimonials' ? 'Отзывы' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/2bc85543-d3c7-4657-b8f3-489cb9b48ac7/files/8e7c130f-00b0-434a-9b16-1fc2bfe63c4f.jpg"
            alt="Санкара"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>
        <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Санкара</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">Оперная певица • Сопрано</p>
          <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
            Связаться со мной
          </Button>
        </div>
      </section>

      <section id="bio" className="py-24 animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center">Биография</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur">
              <p className="text-lg leading-relaxed mb-6">
                Санкара - выдающаяся оперная певица с уникальным тембром голоса и глубоким пониманием музыкального искусства. 
                Её карьера началась в консерватории, где она изучала вокальное мастерство под руководством выдающихся педагогов.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                За годы творческой деятельности Санкара выступала на ведущих оперных сценах мира, исполняя партии 
                в произведениях Верди, Пуччини, Моцарта и других великих композиторов. Её голос отличается кристальной 
                чистотой и эмоциональной выразительностью.
              </p>
              <p className="text-lg leading-relaxed">
                Сегодня Санкара продолжает радовать публику своими выступлениями, участвует в фестивалях 
                и проводит мастер-классы для молодых вокалистов.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="repertoire" className="py-24 bg-muted/30 animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center">Репертуар</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="space-y-4 mb-8">
                {repertoire.map((track, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all hover:bg-muted ${
                      currentTrack === index ? 'bg-primary/10 border border-primary' : ''
                    }`}
                    onClick={() => playTrack(index)}
                  >
                    <div className="flex items-center gap-4">
                      <Button 
                        size="icon" 
                        variant={currentTrack === index && isPlaying ? "default" : "outline"}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (currentTrack === index) {
                            togglePlay();
                          } else {
                            playTrack(index);
                          }
                        }}
                      >
                        <Icon name={currentTrack === index && isPlaying ? "Pause" : "Play"} size={20} />
                      </Button>
                      <div>
                        <h3 className="font-semibold">{track.title}</h3>
                        <p className="text-sm text-muted-foreground">{track.composer}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{track.duration}</span>
                  </div>
                ))}
              </div>
              <audio ref={audioRef} className="hidden" />
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center">Галерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://cdn.poehali.dev/projects/2bc85543-d3c7-4657-b8f3-489cb9b48ac7/files/8e7c130f-00b0-434a-9b16-1fc2bfe63c4f.jpg',
              'https://cdn.poehali.dev/projects/2bc85543-d3c7-4657-b8f3-489cb9b48ac7/files/ceea2903-e57f-4fa2-8425-c0258177df92.jpg',
              'https://cdn.poehali.dev/projects/2bc85543-d3c7-4657-b8f3-489cb9b48ac7/files/53f33c00-b07b-42d6-87b8-c8b8df815e75.jpg',
            ].map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={img} 
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-24 bg-muted/30 animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center">Видео</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" className="w-16 h-16 rounded-full">
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{video.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center">Отзывы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur">
                <Icon name="Quote" size={32} className="text-primary mb-4" />
                <p className="text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30 animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center">Контакты</h2>
          <Card className="max-w-2xl mx-auto p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Icon name="Mail" size={24} className="text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@sankara.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@sankara.ru
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Phone" size={24} className="text-primary" />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-muted-foreground">Москва, Россия</p>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="font-semibold mb-4">Социальные сети</p>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2024 Санкара. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;