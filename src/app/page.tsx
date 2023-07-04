import NavHeader from "../app/components/navigation/NavHeader";
import Image from "next/image";
import profilePicture from "../../public/profile.png";

const projects = [
    {
        header: "Project To-day",
        message: "Dit project had als doel het ontwikkelen van een Android-applicatie waarmee gebruikers hun taken konden bijhouden. We hebben de app gebouwd met behulp van Android Studio, waarbij we Java hebben gebruikt als programmeertaal en Room als database. Het project begon vanaf de basis, waarbij we diagrammen hebben gebruikt om de structuur van de app te plannen."
    },
    {
        header: "Project InventoryHub",
        message: "Dit project omvatte de ontwikkeling van een voorraadbeheersysteem. We hebben een op maat gemaakt embedded systeem ontworpen, dat fungeerde als een weegschaal om de voorraad te meten. Het embedded systeem is ontwikkeld in C++ en maakte gebruik van een ESP32 microcontroller. Daarnaast hebben we een Android-applicatie ontwikkeld als gebruikersinterface, waarbij we WiFi, Bluetooth en NFC-technologieën hebben toegepast voor de communicatie tussen het embedded systeem en de app. De app is ontwikkeld met behulp van Android Studio en Java. Om het systeem goed te laten functioneren, hebben we een RESTful API ontwikkeld, geschreven in JavaScript met behulp van Node.js. Deze API werkte samen met een MySQL-database als server. Het project omvatte het ontwerpen van de firmware voor het embedded systeem, het ontwikkelen van de API, het bouwen van de Android-app en het implementeren van het volledige productieproces."
    },
    {
        header: "Project Farmconnect",
        message: "Het hoofddoel van dit project was het ontwikkelen van een gebruiksvriendelijke webapplicatie met het oog op het verminderen van voedselverspilling, aansluitend bij de principes van Duurzaam Ontwikkelingsdoel (SDG) 12. Met dit in gedachten hebben we ervoor gekozen om een platform te creëren waar boeren hun boerderijen kunnen adverteren. Dit maakt het eenvoudiger voor bewuste consumenten, die graag een duurzamere en meer bewuste levensstijl nastreven, om lokaal geproduceerd voedsel te vinden en rechtstreeks van de boerderij te kopen. \n" +
            "\n" +
            "Onze webapplicatie is ontwikkeld met Next.js en TypeScript voor de frontend, en Node.js, Express en Sequelize voor de backend, waarbij de gegevens worden opgeslagen in een MySQL database. We hebben onze taken en voortgang effectief beheerd door middel van de Scrum-methodologie en met behulp van Jira voor het beheer van de backlog. Het eindproduct hebben we geïmplementeerd op Azure, om een veilige en betrouwbare hosting te garanderen die altijd en overal toegankelijk is voor onze gebruikers."
    }
]

const skills = [
    {
        header: "Talen",
        message: "Java, JavaScript, TypeScript, SQL, Python, C++, Git"
    },
    {
        header: "Frameworks",
        message: "React, Next.js, Node.js, Express, Sequelize, Android Studio, TailwindCSS"
    },
    {
        header: "Tools",
        message: "GitHub, Jira, Figma, Android Studio, Swagger, Postman"
    }
]

//     <div className="w-full flex flex-col px-40 justify-center bg-black/40  py-5">
//     {welcomes.map((welcome) => (
//             <div key={welcome.header} className="flex flex-col items-center justify-center">
//                 <h2 className="text-3xl font-bold text-white"> {welcome.header} </h2>
//                 <p className="mt-10 text-white">
//                     {welcome.message}
//                 </p>
//             </div>
//         ))}
// </div>


export default function Home() {
    return (
        <section id={'homepage'} className="bg-slate-600/70">
            <section
                id={'welcomePage'}
                className="flex items-center flex-col space-y-40 h-screen mb-12 bg-fixed bg-center bg-cover bg-[url(../../public/background2.jpg)]"
            >
                <NavHeader></NavHeader>
                <div
                    className="w-full flex justify-center items-center space-x-6 bg-black/40 px-0 py-5">
                    <Image src={profilePicture} alt={"Profile Picture"} width={250} height={250}></Image>
                    <h2 className="text-5xl font-bold text-white">Quinten Vollmer </h2>
                </div>
                <div className="w-full flex flex-col px-40 justify-center bg-black/40  py-5">
                    <h2 className="text-3xl font-bold text-white"> Welkom <span
                        //TODO fix animation
                        className={"animate-wiggle"}>👋</span>
                    </h2>
                    <h2 className={"animate-wiggle"}>👋</h2>
                    <p className="mt-10 text-white">
                        Tot mijn profiel!
                    </p>
                </div>
            </section>
            <section
                id={'aboutMe'}
                className="max-w-lg m-auto p-6 mb-14 border-2 rounded-lg border-slate-500 shadow-2xl shadow-slate-500 bg-slate-200">
                <h2 className="text-3xl font-bold text-slate-900">Wie ben ik?</h2>
                <p className="mb-4">
                    Laat me mezelf kort voorstellen: ik ben Quinten, een gedreven en leergierige jongeman die na
                    bijna
                    10 jaar in de horeca te hebben gewerkt, zich nu omschoolt naar mijn tweede passie, de ICT. Op
                    15-jarige leeftijd begon ik in de horeca en dankzij mijn opleiding kon ik doorgroeien tot
                    manager
                    bij verschillende restaurants. Hier heb ik veel hard- en soft skills ontwikkeld die ik nog
                    steeds
                    gebruik.
                </p>
                <p className="mb-4">
                    Tijdens de coronatijd kwam de wereld tot stilstand en heb ik de kans gegrepen om mezelf om te
                    scholen en me te verdiepen in de ICT. Nu, bijna twee jaar verder, kan ik met trots zeggen dat ik
                    naast mijn studie ook al werkzaam ben in de ICT en het enorm naar mijn zin heb.
                </p>
                <p className="mb-4">
                    Op de werkvloer richt ik me op het verbeteren en stroomlijnen van werkprocessen en ga ik geen
                    uitdaging uit de weg. Ik leer graag van mijn collega's en doe altijd mijn best om een bijdrage
                    te
                    leveren aan het team.
                </p>
                <p className="mb-4">
                    Sinds 2021 volg ik een deeltijdopleiding Software Engineering aan De Haagse Hogeschool. Deze
                    opleiding heeft een sterke focus op het bedrijfsleven en de bijbehorende werkmethoden. Daarom
                    werk
                    ik altijd aan projecten in groepsverband en hanteren we verschillende werkmethodieken. Hierdoor
                    heb
                    ik veel ervaring opgedaan in het werken met de Scrum-methodiek.
                </p>
            </section>
            <section
                id={'skills'}
                className="flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover bg-[url(../../public/background.jpg)]"
            >
                <div className="w-full flex flex-col px-40 items-center justify-center bg-black/40 py-5">
                    <h1 className="text-5xl font-bold text-white">Mijn skills</h1>
                    <p className={"text-white"}>Hieronder vind je een overzicht van mijn skills.</p>
                    {skills.map((skill) => (
                        <div key={skill.header} className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-bold text-white mt-6"> {skill.header} </h2>
                            <p className="text-white"> {skill.message} </p>
                        </div>
                    ))}
                </div>
            </section>
            <div
                className="max-w-lg m-auto p-6 mb-14 border-2 rounded-lg border-slate-500 shadow-2xl shadow-slate-500 bg-slate-200">
                {projects.map((project) => (
                    <div key={project.header} className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-slate-900"> {project.header} </h2>
                        <p className="mb-4">
                            {project.message}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
