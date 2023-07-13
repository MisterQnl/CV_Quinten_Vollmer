import Image from 'next/image';
import profilePicture from '../../public/profile.png';
import NavHeader from '../app/components/navigation/NavHeader';
import ProjectTabs from '@/app/components/projects/ProjectTab';

const SvgIconToday = () => (
  <svg
    fill={'currentColor'}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 576 512'
    className={'h-8'}
  >
    <path
      d='M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55' />
  </svg>
);

const SvgIconInventoryHub = () => (
  <svg
    fill={'currentColor'}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    className={'h-8'}
  >
    <path
      d='M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z' />
  </svg>
);

const SvgIconFarmConnect = () => (
  <svg
    fill={'currentColor'}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    className={'h-8'}
  >
    <path
      d='M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z' />
  </svg>
);

const SvgIconPortfolio = () => (
  <svg
    fill={'currentColor'}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1088 1024'
    className={'h-8'}>
    <path
      d='M312.3 223.6c-51.8 6.2-100.8 26.6-143.3 59.4-12.2 9.5-38.5 35.8-48 48-33.2 43-53.3 91.8-59.5 144.5-1.9 16.8-1.9 48.2 0 64.9C67.7 593.2 87.7 641.8 121 685c9.4 12.2 35.8 38.6 48 48 43.2 33.3 91.8 53.3 144.6 59.5 16.7 1.9 48.1 1.9 64.8 0 41.3-4.8 80.3-18.2 115.8-39.6 5.4-3.3 10.4-5.9 11.3-5.9s12.6 10.1 26.1 22.5L556 792h77c42.4 0 77-.2 77-.4s-28.8-26.8-64-59.1c-41.2-37.7-64-59.3-64-60.6 0-1 2.5-5.6 5.5-10.3 11-16.8 22.2-40.2 29.5-61.2l3.8-11-58.6-160.3-58.6-160.2-8-5c-34.6-21.3-75.8-35.6-117.1-40.4-16-1.9-50.6-1.8-66.2.1zm57.4 115.9c19.3 2.7 34.1 7.4 51.7 16.1 76 38 111.6 125.5 84 206.6-4.3 12.4-11.5 27.2-13.5 27.6-.8.1-24.7-21.1-53.2-47.3-28.6-26.1-52.1-47.5-52.3-47.5s-.4 31.8-.3 70.7v70.8l13 11.8c7.1 6.5 12.9 12.4 12.9 13.2 0 .7-4.9 2.9-12.4 5.4-49.9 16.6-104.6 9.3-147.7-19.8-32.2-21.6-54.9-51.8-66.8-88.5-14.1-43.6-9.5-92.9 12.4-133.1 11-20.2 31.8-43.5 50.5-56.8 21.4-15.1 50.1-26.3 76-29.6 10.6-1.4 34.8-1.2 45.7.4zm153.6-113.8c.4 1.5 152.8 418.2 194.5 532l12.6 34.3h71.1l2.2-4.7c1.3-2.7 6.3-16.7 11.3-31.3 4.9-14.6 9.4-27.2 9.9-28.1.9-1.5 182.8-498.5 183.8-502.2.5-1.6-2.8-1.7-58.9-1.7h-59.5l-61.9 169.5c-34 93.2-62.3 169.5-62.9 169.5-.5 0-28.9-76.3-62.9-169.5L640.7 224h-59c-55.6 0-58.9.1-58.4 1.7z' />
  </svg>
);

const projects = [
  {
    header: 'Project Farmconnect',
    message:
      'Het hoofddoel van dit project was het ontwikkelen van een gebruiksvriendelijke webapplicatie met het oog op het verminderen van voedselverspilling, aansluitend bij de principes van Duurzaam Ontwikkelingsdoel (SDG) 12. Met dit in gedachten hebben we ervoor gekozen om een platform te creëren waar boeren hun boerderijen kunnen adverteren. Dit maakt het eenvoudiger voor bewuste consumenten, die graag een duurzamere en meer bewuste levensstijl nastreven, om lokaal geproduceerd voedsel te vinden en rechtstreeks van de boerderij te kopen. \n' +
      '\n' +
      'Onze webapplicatie is ontwikkeld met Next.js en TypeScript voor de frontend, en Node.js, Express en Sequelize voor de backend, waarbij de gegevens worden opgeslagen in een MySQL database. We hebben onze taken en voortgang effectief beheerd door middel van de Scrum-methodologie en met behulp van Jira voor het beheer van de backlog. Het eindproduct hebben we geïmplementeerd op Azure, om een veilige en betrouwbare hosting te garanderen die altijd en overal toegankelijk is voor onze gebruikers.',
    svg: <SvgIconFarmConnect />,
  },
  {
    header: 'Project InventoryHub',
    message:
      'Dit project omvatte de ontwikkeling van een voorraadbeheersysteem. We hebben een op maat gemaakt embedded systeem ontworpen, dat fungeerde als een weegschaal om de voorraad te meten. Het embedded systeem is ontwikkeld in C++ en maakte gebruik van een ESP32 microcontroller. Daarnaast hebben we een Android-applicatie ontwikkeld als gebruikersinterface, waarbij we WiFi, Bluetooth en NFC-technologieën hebben toegepast voor de communicatie tussen het embedded systeem en de app. \nDe app is ontwikkeld met behulp van Android Studio en Java. Om het systeem goed te laten functioneren, hebben we een RESTful API ontwikkeld, geschreven in JavaScript met behulp van Node.js. Deze API werkte samen met een MySQL-database als server. Het project omvatte het ontwerpen van de firmware voor het embedded systeem, het ontwikkelen van de API, het bouwen van de Android-app en het implementeren van het volledige productieproces.',
    svg: <SvgIconInventoryHub />,
  },
  {
    header: 'Project Portfolio',
    message:
      'Het primaire doel van dit project was om mijn kennis en ervaring op het gebied van webontwikkeling te verdiepen en uit te breiden. Ik heb ervoor gekozen om mijn portfolio tot leven te brengen door deze als een interactieve website te presenteren. \nIk heb dit project uitgevoerd met behulp van Next.js 13, een krachtig framework voor het ontwikkelen van de website. Voor de vormgeving en styling van de website heb ik Tailwind CSS gebruikt, een utility-first CSS-bibliotheek, die mij hielp om snel en effectief een aantrekkelijk design te creëren. Tenslotte heb ik voor de deployment van de website Vercel gebruikt, een platform dat uitstekend geïntegreerd is met Next.js en dat zorgt voor een vlekkeloze gebruikerservaring. \nDit project diende zowel als een kans om mijn vaardigheden te verbeteren als een showcase van mijn groei als ontwikkelaar.',
    svg: <SvgIconPortfolio />,
  },
  {
    header: 'Project To-day',
    message:
      'Dit project had als doel het ontwikkelen van een Android-applicatie waarmee gebruikers hun taken konden bijhouden. We hebben de app gebouwd met behulp van Android Studio, waarbij we Java hebben gebruikt als programmeertaal en Room als database. Het project begon vanaf de basis, waarbij we diagrammen hebben gebruikt om de structuur van de app te plannen.',
    svg: <SvgIconToday />,
  },
];

const skills = [
  {
    header: 'Talen',
    message: 'Java, JavaScript, TypeScript, SQL, Python, C++',
  },
  {
    header: 'Frameworks',
    message:
      'React, Next.js, Node.js, Express, Sequelize, TailwindCSS',
  },
  {
    header: 'Tools',
    message: 'GitHub, Android Studio, Jira, Figma, Android Studio, Swagger, Postman',
  },
];

export default function Home() {
  return (
    <section
      id={'homepage'}
      className='bg-gradient-to-r from-slate-500 via-slate-200 to-slate-500'
    >
      <section
        id={'welcomePage'}
        className='flex items-center flex-col space-y-40 h-screen mb-12 bg-fixed shadow-2xl shadow-slate-500 bg-center bg-cover bg-[url(../../public/background7.jpg)]'
      >
        <NavHeader />

        <div
          className='w-full flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-6 bg-black/40 px-0 py-5'>
          <Image
            src={profilePicture}
            alt={'Profile Picture'}
            width={250}
            height={250}
          ></Image>
          <h2 className='text-5xl font-bold text-white mt-6 sm:mt-0'>
            Quinten Vollmer{' '}
          </h2>
        </div>
        <div className='w-full flex flex-col justify-center items-center px-6 sm:px-40 bg-black/40 py-5'>
          <div className='w-full flex items-center justify-center m-6'>
            <h2 className='text-3xl font-bold text-white'>Welkom </h2>
            <span className={'text-3xl animate-wiggle animate-infinite'}>
              👋
            </span>
          </div>
          <p className='text-white'> Wat leuk dat je mijn website bezoekt! Deze site dient als mijn portfolio, waarin al mijn ervaringen en projecten worden gepresenteerd. </p>
          <p className={'text-white pb-4'}> Heb je interesse om met mij in contact te komen? Stuur me dan een bericht via LinkedIn, in de navigatiebalk vind je een koppeling naar mijn profiel. </p>
        </div>
      </section>

      <section
        id={'aboutMe'}
        className='sm:p-2 md:p-6 max-w-lg m-auto mb-14 border-2 rounded-lg border-slate-500 shadow-2xl shadow-slate-500 bg-slate-200'
      >
        <h2 className='text-3xl font-bold text-slate-900'>Wie ben ik?</h2>
        <p className='mb-4'>
          Laat me mezelf kort voorstellen: ik ben Quinten, een gedreven en
          leergierige jongeman die na bijna 10 jaar in de horeca te hebben
          gewerkt, zich nu omschoolt naar mijn tweede passie, de ICT. Op
          15-jarige leeftijd begon ik in de horeca en dankzij mijn opleiding kon
          ik doorgroeien tot manager bij verschillende restaurants. Hier heb ik
          veel hard- en soft skills ontwikkeld die ik nog steeds gebruik.
        </p>
        <p className='mb-4'>
          Tijdens de coronatijd kwam de wereld tot stilstand en heb ik de kans
          gegrepen om mezelf om te scholen en me te verdiepen in de ICT. Nu,
          bijna twee jaar verder, kan ik met trots zeggen dat ik naast mijn
          studie ook al werkzaam ben in de ICT en het enorm naar mijn zin heb.
        </p>
        <p className='mb-4'>
          Op de werkvloer richt ik me op het verbeteren en stroomlijnen van
          werkprocessen en ga ik geen uitdaging uit de weg. Ik leer graag van
          mijn collegas en doe altijd mijn best om een bijdrage te leveren aan
          het team.
        </p>
        <p className='mb-4'>
          Sinds 2021 volg ik een deeltijdopleiding Software Engineering aan De
          Haagse Hogeschool. Deze opleiding heeft een sterke focus op het
          bedrijfsleven en de bijbehorende werkmethoden. Daarom werk ik altijd
          aan projecten in groepsverband en hanteren we verschillende
          werkmethodieken. Hierdoor heb ik veel ervaring opgedaan in het werken
          met de Scrum-methodiek.
        </p>
      </section>

      <section
        id={'skills'}
        className='flex items-center justify-center h-screen m-auto mb-12 shadow-2xl shadow-slate-500 bg-fixed bg-center bg-cover bg-[url(../../public/background-blue-sky.png)]'
      >
        <div className='w-full sm:px-6 md:px-40 flex flex-col items-center justify-center bg-black/40 py-5'>
          <h1 className='text-5xl font-bold text-white'>Mijn skills</h1>
          <p className={'text-white'}>
            Hieronder vind je een overzicht van mijn skills.
          </p>
          {skills.map((skill) => (
            <div
              key={skill.header}
              className='flex flex-col items-center justify-center'
            >
              <h2 className='text-3xl font-bold text-white mt-6'>
                {' '}
                {skill.header}{' '}
              </h2>
              <p className='text-white'> {skill.message} </p>
            </div>
          ))}
        </div>
      </section>

      <ProjectTabs projects={projects} />

    </section>
  );
}
