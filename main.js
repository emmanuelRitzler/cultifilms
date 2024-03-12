// Images for each movie displayed
const movieImages = {
    casino: "Images/Movie_Images/casino.jpg",
    reservoirDogs: "Images/Movie_Images/reservoirdogs.jpg",
    ragingBull: "Images/Movie_Images/ragingbull.jpg",
    ingloriousBasterds: "Images/Movie_Images/ingloriousbasterds.jpg",
    lasVegasParano: "Images/Movie_Images/lasvegasparano.webp",
    heat: "Images/Movie_Images/heat.webp",
    oceanEleven: "Images/Movie_Images/oceaneleven.jpg",
    jackieBrown: "Images/Movie_Images/jackiebrown.jpg",
    trainingDay: "Images/Movie_Images/trainingday.jpg",
    boyzInTheHood: "Images/Movie_Images/boyzinthehood.jpg",
    menace2Society: "Images/Movie_Images/menace2society.jpg",
    drive: "Images/Movie_Images/drive.jpg",
    fallingDown: "Images/Movie_Images/fallingdown.jpg",
    friday: "Images/Movie_Images/friday.webp",
    publicEnemies: "Images/Movie_Images/publicenemies.jpeg",
    nightcall: "Images/Movie_Images/nightcall.jpeg",
    apocalypseNow: "Images/Movie_Images/apocalypsenow.webp",
    lesIncorruptibles: "Images/Movie_Images/lesincorruptibles.jpeg",
    batman: "Images/Movie_Images/batman.jpeg",
    ilEtaitUneFoisLeBronx: "Images/Movie_Images/iletaitunefoislebronx.jpeg",
    lesHuitsSalopards: "Images/Movie_Images/leshuitssalopards.jpeg",
    pulpFiction: "Images/Movie_Images/pulpfiction.jpeg",
    americanGangster: "Images/Movie_Images/americangangster.webp",
    gomorra: "Images/Movie_Images/gomorra.webp",
    getRichOrDieTryin: "Images/Movie_Images/getrichordietryin.webp",
    legend: "Images/Movie_Images/legend.webp",
    noCountryForOldMen: "Images/Movie_Images/nocountryforoldmen.jpeg",
    paidInFull: "Images/Movie_Images/paidinfull.jpeg",
    gangsOfNewYork: "Images/Movie_Images/gangsofnewyork.jpg",
    taxiDriver: "Images/Movie_Images/taxidriver.jpeg",
    houseOfGucci: "Images/Movie_Images/houseofgucci.jpg",
    memento: "Images/Movie_Images/memento.jpeg",
    leon: "Images/Movie_Images/leon.jpeg",
    lImpasse: "Images/Movie_Images/limpasse.webp",
    nikita: "Images/Movie_Images/nikita.webp",
    dobermann: "Images/Movie_Images/dobermann.jpeg",
    laFureurDuDragon: "Images/Movie_Images/lafureurdudragon.jpeg",
    humanTraffic: "Images/Movie_Images/humantraffic.jpeg",
    menInBlack: "Images/Movie_Images/meninblack.jpeg",
    monBeauPereEtMoi: "Images/Movie_Images/monbeaupereetmoi.jpg",
    leRoisDuDesert: "Images/Movie_Images/lesroisdudesert.jpeg",
    lesPrincesDeLaVille: "Images/Movie_Images/lesprincesdelaville.jpg",
    desperado: "Images/Movie_Images/desperado.jpg",
}
let imageArray = Object.values(movieImages);

// Array of all the films displayed
let films = [
    "Casino", "Reservoir Dogs", "Raging Bull",
    "Inglorious Basterds", "Las Vegas Parano", "Heat",
    "Ocean Eleven", "Jackie Brown", "Training Day",
    "Boyz in the Hood", "Menace 2 Society", "Drive",
    "Falling Down", "Friday", "Public Enemies",
    "Nightcall", "Apocalypse Now", "Les Incorruptibles",
    "Batman", "Il était une fois le Bronx", "Les huits salopards",
    "Pulp Fiction", "American Gangster", "Gomorra",
    "Get Rich or Die Tryin'", "Legend", "No Country For Old Men",
    "Paid In Full", "Gangs of New-York", "Taxi Driver",
    "House of Gucci", "Memento", "Leon",
    "L'impasse", "Nikita", "Dobermann",
    "La fureur du dragon", "Human Traffic", "Men In Black",
    "Mon beau-père et moi", "Les rois du désert", "Les princes de la ville",
    "Desperado"
]


// Summary of the displayed movie
const summary = {
    casino: "Las Vegas, années 70. Ace Rothstein dirige d'une main de fer le Tangiers, hôtel casino parmi les plus prospères de la ville, financé en sous main par le puissant syndicat des camionneurs. Ace est devenu le grand manitou de Las Vegas, secondé par son ami d'enfance, Nicky Santoro. Impitoyable avec les tricheurs, Rothstein se laisse un jour séduire par une virtuose de l'arnaque d'une insolente beauté, Ginger McKenna.",
    reservoirDogs: "Six truands désignés par des noms de code entreprennent de dévaliser une importante bijouterie sous la direction du tyrannique Joe Cabot et de son fils Nice Guy Eddie. L'opération échoue malencontreusement et se solde par un bain de sang. Les malfrats se réfugient alors dans un entrepôt sordide. Mr Orange est grièvement blessé. Mr Pink, quant à lui, est d'avis qu'il existe un traître parmi eux. Mr Blonde, un psychopathe, entend bien faire parler le policier qu'il a réussi à capturer.",
    ragingBull: "En 1941, Jake LaMotta a tout juste dix-neuf ans et une foi absolue en sa bonne étoile. Joey, son frère, parvient à le persuader qu'il peut prétendre au titre de champion du monde de boxe. Commence alors un entraînement intensif pour Jake, qui n'en néglige pas pour autant Vickie, sa jeune et ravissante épouse. Les combats se succèdent, et le jeune sportif voit ses chances de décrocher le titre tant convoité augmenter de jour en jour.",
    ingloriousBasterds: "Dans la France occupée de 1940, Shosanna Dreyfus assiste à l'exécution de sa famille tombée entre les mains du colonel nazi Hans Landa. Shosanna s'échappe de justesse et s'enfuit à Paris où elle se construit une nouvelle identité en devenant exploitante d'une salle de cinéma. Quelque part ailleurs en Europe, le lieutenant Aldo Raine forme un groupe de soldats juifs américains pour mener des actions punitives particulièrement sanglantes contre les nazis.",
    lasVegasParano: "À travers l'épopée à la fois comique et horrible vers Las Vegas du journaliste Raoul Duke et de son énorme avocat, le Dr. Gonzo, évocation caustique et brillante de l'année 1971 aux États-Unis, pendant laquelle les espoirs des années 60 et le fameux rêve américain furent balayés pour laisser la place à un cynisme plus politiquement correct.",
    heat: "La bande de Neil McCauley à laquelle est venu se greffer Waingro, une nouvelle recrue, attaque un fourgon blindé pour s'emparer d'une somme importante en obligations. Cependant, ce dernier tue froidement l'un des convoyeurs et Chris Shiherlis se retrouve obligé de terminer le travail. Neil tente d'éliminer Waingro, mais celui-ci parvient à s'échapper. Parallèlement, le lieutenant Vincent Hanna mène l'enquête.",
    oceanEleven: "Après deux ans passés dans la prison du New Jersey, Danny Ocean retrouve la liberté et s'apprête à monter un coup qui semble impossible à réaliser : cambrioler dans le même temps les casinos Bellagio, Mirage et MGM Grand, avec une jolie somme de 150 millions de dollars à la clé. Il souhaite également récupérer Tess, sa bien-aimée que lui a volée Terry Benedict, le propriétaire de ces trois somptueux établissements de jeux de Las Vegas.",
    jackieBrown: "Jackie Brown, hôtesse de l'air, arrondit ses fins de mois en convoyant de l'argent liquide pour le compte d'un trafiquant d'armes, Ordell Robbie. Un jour, un agent fédéral et un policier de Los Angeles la cueillent à l'aéroport. Ils comptent sur elle pour faire tomber le trafiquant. Jackie échafaude alors un plan audacieux pour doubler tout le monde lors d'un transfert impliquant une somme de cinq cent mille dollars.",
    trainingDay: "Jake Hoyt, un jeune bleu idéaliste et naïf, a rallié la police de Los Angeles dans l'espoir de servir la justice. Décidé à passer inspecteur, il sollicite une mise à l'essai de vingt-quatre heures auprès du sergent chef Alonzo Harris, un vétéran de la lutte antidrogue qui opère depuis une douzaine d'années dans les quartiers les plus durs de la ville.",
    boyzInTheHood: "Trois amis de South Central, un ghetto de Los Angeles, vivent un quotidien rythmé par la drogue, les gangs et les interventions policières. Tandis que l'un d'eux s'en sort grâce aux études, les deux autres sont pris dans l'engrenage de la violence.",
    menace2Society: "Après avoir grandi dans le milieu des gangs des cités de Los Angeles, Caine Lawson, 18 ans, veut s'en sortir. Tous ceux qui l'entourent, y compris son imprévisible ami O-Dog, sont prisonniers de leur vie de crime et de violence. Avec l'aide de son professeur et de sa petite amie qui le soutiennent, Caine prévoit de quitter la ville pour de bon. Mais dans une série d'événements tragiques, Caine se rend compte que s'échapper ne sera pas facile.",
    drive: "Un jeune homme solitaire, The Driver, conduit le jour à Hollywood pour le cinéma en tant que cascadeur et la nuit pour des truands. Ultra professionnel et peu bavard, il a son propre code de conduite. Jamais il n'a pris part aux crimes de ses employeurs autrement qu'en conduisant - et au volant, il est le meilleur !",
    fallingDown: "Durant un été très chaud, un embouteillage causé par un chantier de travaux publics paralyse une portion de route de Los Angeles. William Foster, ancien salarié de l'industrie de la défense, craque soudainement et abandonne son véhicule. Fou de rage, il se lance dans une virée sauvage dans les rues de Los Angeles, s'en prenant indifféremment aux membres d'un gang ou aux employés d'un fast-food.",
    friday: "Après avoir été congédié pendant son jour de congé, Craig accompagné de son meilleur ami Smokey passe la journée à fumer dans leur quartier de Los Angeles. Au fil des heures, les deux amis découvrent toutes les facettes de la vie urbaine: des fusillades, un trafiquant de drogue en colère et beaucoup d'autres personnages étranges.",
    publicEnemies: "Basé sur l'histoire vraie de John Dillinger, un braqueur de banque hors pair qui a sévi à de nombreuses reprises dans l'Amérique des années 30. Avancé comme l'ennemi public numéro 1 par le patron du FBI, John Edgar Hoover, Dillinger sera traqué sans relâche par Melvin Purvis, l'un des agents fédéraux des plus efficaces.",
    nightcall: "Oiseau de nuit asocial, Lou fait une halte sur le site d'un accident de la route. Fasciné par le travail des caméramans pigistes guidés sur les lieux par les radars de la police, le jeune voleur décide de faire de ce métier sa nouvelle vocation. Mal équipé et sans formation, Lou parvient toutefois, grâce à son arrogance et à son mépris des règles éthiques, à obtenir des images sensationnelles d'un accident puis à les vendre à Nina, productrice d'une émission de télévision matinale.",
    apocalypseNow: "Pendant la guerre du Vietnam, un agent de l'armée américaine s'aventure au Cambodge à la recherche d'un tyran dangereux, le colonel Kurtz, autrefois un soldat modèle qui s'est converti plus tard à la cause de l'ennemi.",
    lesIncorruptibles: "À Chicago durant les années trente, lors de la prohibition, Al Capone règne en maître absolu sur le réseau de vente illégale d'alcool. Décidé à mettre un terme au trafic et à confondre Al Capone, l'agent Eliot Ness recrute trois hommes de confiance, aussi intraitables que lui. Ensemble, les quatre incorruptibles partent en guerre contre le gang de Capone.",
    batman: "Le célèbre et impitoyable combattant, Batman, est de retour. Plus beau, plus fort, et plus dépoussiéré que jamais, il s'apprête à nettoyer Gotham City et à affronter le terrible Joker. Tout cela, car un mystérieux justicier a déclaré la guerre aux criminels qui sèment la terreur dans les rues de la ville.",
    ilEtaitUneFoisLeBronx: "Le quartier de Fordam, dans le Bronx, vit sous le règne de la mafia sicilienne. Honnête chauffeur de bus et père de famille très modeste, Lorenzo Anello refuse d'accepter combines et argent sale. Un soir, son fils Calogero, du haut de ses 9 ans, est témoin d'un meurtre commis par Sonny, le chef des mafieux. Fasciné par le malfrat, il respecte l'omerta et ne dit rien à la police. Sonny prend le petit sous son aile et le considère comme le sien.",
    lesHuitsSalopards: "Quelques années après la guerre de Sécession, le chasseur de primes John Ruth, dit Le Bourreau, fait route vers Red Rock, où il conduit sa prisonnière Daisy Domergue. Sur leur route, ils rencontrent le Major Marquis Warren, un ancien soldat aussi devenu chasseur de primes, et Chris Mannix, le nouveau shérif de Red Rock. Surpris par le blizzard, ils trouvent refuge dans une auberge au milieu des montagnes, où ils sont accueillis par quatre personnages énigmatiques.",
    pulpFiction: "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent. Dans un restaurant, un couple de jeunes braqueurs, Pumpkin et Yolanda, discutent des risques que comporte leur activité. Deux truands, Jules Winnfield et son ami Vincent Vega, qui revient d'Amsterdam, ont pour mission de récupérer une mallette au contenu mystérieux et de la rapporter à Marsellus Wallace.",
    americanGangster: "En 1970, dans le quartier de Harlem à New York, Frank Lucas décide de prendre la relève du trafic de drogue, suite à la mort du caïd local dont il était le chauffeur et confident depuis quinze ans. Jeune, ambitieux et intelligent, il ne veut dépendre de personne et met son propre réseau sur pied. Utilisant les avions de l'armée américaine, il importe des quantités massives d'héroïne et amasse rapidement une fortune colossale.",
    gomorra: "`On ne partage pas un empire d'une poignée de main, on le découpe au couteau'. Cet empire, c'est Naples et la Campanie. Gomorrhe aux mains de la Camorra. Là-bas, une seule loi : la violence. Un seul langage : les armes. Un seul rêve : le pouvoir. Une seule ivresse : le sang. Sur fond de guerres de clans et de trafics en tous genres, Gomorra raconte les destins croisés de : Toto, Don Ciro et Maria, Franco et Roberto, Pasquale, Marco et Ciro.",
    getRichOrDieTryin: "Un rêve habite Marcus depuis toujours : devenir rappeur. Lorsque sa mère est assassinée, l'adolescent perd brutalement ses repères et plonge dans le crime. Devenu dealer par nécessité, il se voit rapidement entraîné dans une spirale infernale, avec pour seuls garde-fous sa grand-mère, sa petite amie Charlene et son loyal ami Bama. Sa vie dès lors se partage entre le crime et l'écriture, à laquelle il consacre la même énergie désespérée.",
    legend: "Durant les années 60, Londres a été marqué du règne brutal des frères Kray. Ronnie était le psychopathe de la famille, alors que son jumeau Reggie s'avérait plus équilibré. Ensemble, ils ont fait régner la loi, développant des liens avec des gangsters et la mafia américaine, élargissant leur influence jusqu'aux boîtes de nuit et aux casinos. Pendant que Reggie filait le bonheur avec la séduisante Frances, Ronnie se livrait à des actions des plus en plus barbares et irréfléchies.",
    noCountryForOldMen: "A la frontière qui sépare le Texas du Mexique, les trafiquants de drogue ont depuis longtemps remplacé les voleurs de bétail. Lorsque Llewelyn Moss tombe sur une camionnette abandonnée, cernée de cadavres, il ne sait rien de ce qui a conduit à ce drame. Quand il prend les deux millions de dollars qu'il découvre à l'intérieur du véhicule, il n'a pas la moindre idée de ce que cela va provoquer. Moss a déclenché une réaction en chaîne d'une violence inouïe.",
    paidInFull: "À Harlem dans les années 1980, Ace observe avec envie les voitures luxueuses et les beaux vêtements de ses amis Mitch et Calvin, trafiquants de cocaïne. Un jour, Ace rencontre par hasard Luis « Lulu » Lujano dans le luxueux appartement de ce dernier. Ace va vite être attiré dans l'argent facile liée au trafic de drogue. Alors qu'il devient quelqu'un d'important, Ace se rend compte que son succès rapide va lui attirer des ennuis.",
    gangsOfNewYork: "En 1846, le quartier de Five Points, un faubourg pauvre de New York, est le théâtre d'une guerre des gangs sanguinaire. Lorsque Bill le Boucher assassine le chef des Irlandais, père d'Amsterdam Vallon, il s'associe avec un policier véreux et prend le contrôle de la ville. Seize ans plus tard, Amsterdam retourne à New York pour venger la mort de son père, tuer Bill et mettre fin à son règne.",
    taxiDriver: "Depuis son retour du Vietnam, Travis Bickle est contraint de prendre quantité de tranquillisants pour dormir. Il devient taxi de nuit, évoluant dans un New York où se mêlent délinquants, drogués et prostitués. Dans la journée, il écrit son journal dans lequel il se dit laid et incompris. Amoureux de Betsy, celle-ci le quitte à cause de sa maladresse. Il s'intéresse à la politique puis surtout à la violence et aux armes.",
    houseOfGucci: "Retour sur l'assassinat de Maurizio Gucci le 27 mars 1995, petit-fils héritier de Guccio Gucci, le fondateur de la célèbre marque de luxe italienne. Sa future ex-femme, Patrizia Reggiani, a commandité son meurtre afin de toucher la part d'héritage qui lui revenait avant que Maurizio se remarie avec Paola Franchi.",
    memento: "Leonard Shelby ne porte que des costumes de grands couturiers et ne se déplace qu'au volant de sa Jaguar. En revanche, il habite dans des motels miteux et règle ses notes avec d'épaisses liasses de billets.Leonard n'a qu'une idée en tête : traquer l'homme qui a violé et assassiné sa femme afin de se venger. Sa recherche du meurtrier est rendue plus difficile par le fait qu'il souffre d'une forme rare et incurable d'amnésie.",
    leon: "Un tueur à gages répondant au nom de Léon prend sous son aile Mathilda, une petite fille de 12 ans, seule rescapée du massacre de sa famille. Bientôt, Léon va faire de Mathilda une `nettoyeuse', comme lui. La jeune fille pourra alors venger son petit frère.",
    lImpasse: "En 1975, à New York, Carlito Brigante, un ancien trafiquant de drogue, est libéré de prison grâce à David Kleinfeld, son avocat, qui a découvert plusieurs vices de forme dans la manière dont le procureur Bill Norwalk avait instruit le procès. Carlito est bien décidé à rentrer dans le droit chemin et, dès qu'il aura économisé assez d'argent, il compte se retirer aux Bahamas pour s'assurer une retraite paisible avec Gail, sa compagne danseuse dans une boîte de striptease.",
    nikita: "Une nuit, le braquage d'une pharmacie se termine en une sanglante tuerie. Nikita est arrêtée et condamnée à vie pour meurtre. Pourtant, elle va avoir une chance de se racheter en signant avec l'Etat un pacte implacable. Après trois ans d'un dur entraînement et une dernière mise à l'épreuve, Nikita retrouve une nouvelle identité et devient un tueur à la solde du gouvernement.",
    dobermann: "Le Dobermann et son gang défraient la chronique. Banques, postes, fourgons,tout y passe. Une anthologie du braquage, un best-of du hold-up ! En face d'eux,un flic quelque peu pourri, qui fait de leur arrestation une affaire personnelle.",
    laFureurDuDragon: "Originaire de Hong-Kong, Tang Lung est envoyé par Wang en Italie pour aider Chen, la nièce de ce dernier, qui exploite un restaurant à Rome. La jeune femme subit en effet des pressions de la mafia pour vendre son établissement. Devant son obstination à refuser, les truands multiplient les intimidations. Tang Lung, redoutable combattant, compte sur ses aptitudes physiques pour la sortir de cette mauvaise passe.",
    humanTraffic: "Cinq copains de Cardiff, dont la vie revêt le plus souvent des teintes grisâtres, ont pris l'habitude chaque vendredi soir d'aller en boite pour s'amuser. Pour Jip, Koop, Nina, Lulu et Moff, tout peut arriver, même le meilleur, et tous les moyens sont bons.",
    menInBlack: "Chargés de protéger la Terre de toute infraction extraterrestre et de réguler l'immigration intergalactique sur notre planète, les Men in black ou MIB opèrent dans le plus grand secret. Vêtus de costumes sombres et équipés des toutes dernières technologies, ils passent inaperçus aux yeux des humains dont ils effacent régulièrement la mémoire récente.",
    monBeauPereEtMoi: "Greg Focker, un modeste infirmier de Chicago, vit depuis deux mois avec la charmante Pam Byrnes et rêve d'officialiser leur union. Ravie de sa proposition, la jeune femme insiste pour un strict respect des règles bourgeoises: Greg devra obtenir l'accord de son père, Jack. Deux semaines plus tard, le couple fait son apparition dans la luxueuse résidence des Byrnes. Accueilli à bras ouverts par la mère de Pam, Dina, Greg décèle d'emblée une certaine froideur chez Jack.",
    lesRoisDuDesert: "Quatre soldats, Archi, un béret vert, Troy Barlow, un jeune idéaliste, Elgin et Conrad Vig, déçus et frustrés par l'aboutissement de la Guerre du Golfe, cette guerre `high-tech' aux allures de jeu vidéo, décident de prendre une petite revanche. Ils concluent qu'ils méritent bien une petite compensation et montent hâtivement une expédition secrète en vue de récupérer une partie des lingots volés par Saddam Hussein au Koweit.",
    lesPrincesDeLaVille: "Paco, son demi-frère Cruz et leur cousin Miklo, des jeunes Hispano-Américains, vivent dans le même quartier `chicano', à l'est de Los Angeles. Ce `barrio' est livré aux rivalités entre gangs. Bien qu'unis par leurs origines, les trois jeunes gens empruntent des chemins bien différents. Cruz, taggeur, manifeste un talent prometteur , Miklo a vite plongé dans la délinquance. Quant à Paco, il est devenu policier.",
    desperado: "Le Mariachi, musicien sans nom, mais non sans caractère, est de retour dans l'obscur village où le Bucho, un gangster mexicain, a assassiné sa petite amie. El Mariachi a décidé à se venger, mais ses ennemis s'en aperçoivent bientôt. Pas question de le laisser accomplir sa mission. Le musicien échappe par miracle à plusieurs tentatives de meurtre, non sans paver son chemin de cadavres."
}

let summaryArray = Object.values(summary);

// Save the arrays to local storage
function saveFilmsToLocalStorage(films) {
    localStorage.setItem('filmArray', JSON.stringify(films));
}

function saveImagesToLocalStorage(imageArray) {
    localStorage.setItem('imageArray', JSON.stringify(imageArray));
}

function saveSummariesToLocalStorage(summaryArray) {
    localStorage.setItem('summaryArray', JSON.stringify(summaryArray));
}

// Function to load the array from localStorage
function loadFilmsFromLocalStorage() {
    const storedFilms = localStorage.getItem('filmArray');
    if (storedFilms) {
        return JSON.parse(storedFilms);
    } else {
        return []; // Return an empty array if nothing is stored
    }
}

function loadImagesFromLocalStorage() {
    const storedImages = localStorage.getItem('imageArray');
    if (storedImages) {
        return JSON.parse(storedImages);
    } else {
        return []; // Return an empty array if nothing is stored
    }
}

function loadSummariesFromLocalStorage() {
    const storedSummaries = localStorage.getItem('summaryArray');
    if (storedSummaries) {
        return JSON.parse(storedSummaries);
    } else {
        return []; // Return an empty array if nothing is stored
    }
}

// Load arrays from local storage
films = loadFilmsFromLocalStorage();
imageArray = loadImagesFromLocalStorage();
summaryArray = loadSummariesFromLocalStorage();

// Get the stored values for title, summary and image to keep them after reloading
const getFilmStored = localStorage.getItem('randomFilm');
const getImageStored = localStorage.getItem('randomImage');
const getSummaryStored = localStorage.getItem('randomSummary');

// DOM elements for modifying the page
const textFieldFilm = document.querySelector('#film-title');
const summaryTitle = document.querySelector('#summary-title')
const summaryText = document.querySelector('#summary');
const filmButton = document.querySelector('#generate-film');
const nextPage = document.querySelector('#link-film');
const filmImage = document.querySelector('#film-image');
const refreshButton = document.querySelector('#refresh-button');
const mainTitle = document.querySelector('#main-title');

if (window.location.href.endsWith('index.html')) {
    filmButton.innerHTML = 'Choisir un film';
    filmButton.style.display = 'inline';
    summaryTitle.innerHTML = 'Synopsis';
    summaryText.style.height = '110px';
    filmImage.src = 'Images/clap.png';
    textFieldFilm.innerHTML = 'Votre film ici';
    textFieldFilm.style.color = 'rgba(0, 0, 0, 0.5)';
    summaryTitle.innerHTML = '';
    summaryText.innerHTML = '';
    summaryText.style.display = 'none';    
}

if (window.location.href.endsWith('films.html')) {
    filmButton.innerHTML = 'Prochain film';
}


//Getting a random number
function randomNumber() {
    return Math.floor(Math.random() * films.length);
}

let filmStored = localStorage.getItem('randomFilm')
if (filmStored === '') {
    summaryTitle.innerHTML = "C'était le dernier! Rajoutez des classiques et recommencez";
    summaryText.style.height = '0px';
    filmButton.style.display = 'none';
    refreshButton.style.display = 'inline';
}

// Check if the random number is already stored in session storage
let randomNum = localStorage.getItem('randomNum');

console.log("Stored randomNum:", randomNum);

if (randomNum === null || randomNum === "0" || isNaN(parseInt(randomNum)) || randomNum < 0 || randomNum >= films.length) {
    console.log("RandomNum is invalid, generating new randomNum.");
    randomNum = randomNumber();
    localStorage.setItem('randomNum', randomNum);
} else {
    console.log("Using stored randomNum.");
    randomNum = parseInt(randomNum);
    // nextPage.innerHTML = "Prochain film";
}

console.log("Final randomNum:", randomNum);

// Reloading the elements based on the local storage data
const randomFilm = getFilmStored;
if (randomFilm === undefined) {
    summaryTitle.innerHTML = "C'était le dernier! Rajoutez des classiques et recommencez"
    filmButton.style.display = 'none';
    refreshButton.style.display = 'inline';
}

const randomSummary = getSummaryStored;
if (randomSummary === undefined) {
    summaryText.innerHTML = '';
}
else {
    summaryText.innerHTML = randomSummary;
}

summaryText.style.display = 'block';
summaryTitle.style.display = 'block';

function replaceImage() {
    // Get the image element by its ID
    const img = document.getElementById('film-image');

    // Set the new source URL
    const newSrc = getImageStored;

    // Set the src attribute of the image element to the new source URL
    img.src = newSrc;

    return newSrc;
}
const randomImage = replaceImage();
if (randomImage === undefined) {
    filmImage.src = 'Images/clap.png'
}

if (randomFilm === undefined) {
    textFieldFilm.innerHTML = '';
} 
else {
    textFieldFilm.innerHTML = randomFilm;
    textFieldFilm.style.color = 'black';
}

// Click event handling on filmButton
filmButton.addEventListener('click', event => {
    event.preventDefault;

    summaryText.style.display = 'inline';
    
    const randomNum = randomNumber();

    localStorage.setItem('randomNum', randomNum);
    localStorage.setItem('randomFilm', films[randomNum]);
    localStorage.setItem('randomImage', imageArray[randomNum]);
    localStorage.setItem('randomSummary', summaryArray[randomNum]);

    const randomFilm = films[randomNum];
    if (randomFilm === undefined) {
        summaryTitle.innerHTML = "C'était le dernier! Rajoutez des classiques et recommencez"
    }

    const randomSummary = summaryArray[randomNum];
    if (randomSummary === undefined) {
        summaryText.innerHTML = '';
        summaryText.style.height = '0px';
        filmButton.style.display = 'none';
        refreshButton.style.display = 'inline';

        let emptyFilm = '';
        let emptyImage = 'Images/clap.png';
        let emptySummary = '';

        localStorage.setItem('randomFilm', emptyFilm);
        localStorage.setItem('randomImage', emptyImage);
        localStorage.setItem('randomSummary', emptySummary);
    }
    else {
        summaryText.innerHTML = randomSummary;
        filmButton.innerHTML = 'Prochain film';
    }

    summaryText.style.display = 'block';
    summaryTitle.style.display = 'block';

    function replaceImage() {
        // Get the image element by its ID
        const img = document.getElementById('film-image');

        // Set the new source URL
        const newSrc = imageArray[randomNum];

        // Set the src attribute of the image element to the new source URL
        img.src = newSrc;

        return newSrc;
    }
    const randomImage = replaceImage()
    if (randomImage === undefined) {
        filmImage.src = 'Images/clap.png'
    }

    if (randomFilm === undefined) {
        textFieldFilm.innerHTML = '';
    } 
    else {
        textFieldFilm.innerHTML = randomFilm;
        textFieldFilm.style.color = 'black';
    }

    let filmToRemove = textFieldFilm.innerHTML;
    let summaryToRemove = summaryText.innerHTML;
    let imageToRemove = randomImage;


    films = films.filter(string => string != filmToRemove);
    summaryArray = summaryArray.filter(string => string != summaryToRemove);
    imageArray = imageArray.filter(string => string != imageToRemove);

    saveFilmsToLocalStorage(films);
    saveSummariesToLocalStorage(summaryArray);
    saveImagesToLocalStorage(imageArray);

    window.onload = function() {
        const randomNum = localStorage.getItem('randomNum');
    };
})

saveFilmsToLocalStorage(films);
saveSummariesToLocalStorage(summaryArray);
saveImagesToLocalStorage(imageArray);

refreshButton.addEventListener('click', event => {
    event.preventDefault;

    window.location.replace("index.html");

    // Images for each movie displayed
const movieImages = {
    casino: "Images/Movie_Images/casino.jpg",
    reservoirDogs: "Images/Movie_Images/reservoirdogs.jpg",
    ragingBull: "Images/Movie_Images/ragingbull.jpg",
    ingloriousBasterds: "Images/Movie_Images/ingloriousbasterds.jpg",
    lasVegasParano: "Images/Movie_Images/lasvegasparano.webp",
    heat: "Images/Movie_Images/heat.webp",
    oceanEleven: "Images/Movie_Images/oceaneleven.jpg",
    jackieBrown: "Images/Movie_Images/jackiebrown.jpg",
    trainingDay: "Images/Movie_Images/trainingday.jpg",
    boyzInTheHood: "Images/Movie_Images/boyzinthehood.jpg",
    menace2Society: "Images/Movie_Images/menace2society.jpg",
    drive: "Images/Movie_Images/drive.jpg",
    fallingDown: "Images/Movie_Images/fallingdown.jpg",
    friday: "Images/Movie_Images/friday.webp",
    publicEnemies: "Images/Movie_Images/publicenemies.jpeg",
    nightcall: "Images/Movie_Images/nightcall.jpeg",
    apocalypseNow: "Images/Movie_Images/apocalypsenow.webp",
    lesIncorruptibles: "Images/Movie_Images/lesincorruptibles.jpeg",
    batman: "Images/Movie_Images/batman.jpeg",
    ilEtaitUneFoisLeBronx: "Images/Movie_Images/iletaitunefoislebronx.jpeg",
    lesHuitsSalopards: "Images/Movie_Images/leshuitssalopards.jpeg",
    pulpFiction: "Images/Movie_Images/pulpfiction.jpeg",
    americanGangster: "Images/Movie_Images/americangangster.webp",
    gomorra: "Images/Movie_Images/gomorra.webp",
    getRichOrDieTryin: "Images/Movie_Images/getrichordietryin.webp",
    legend: "Images/Movie_Images/legend.webp",
    noCountryForOldMen: "Images/Movie_Images/nocountryforoldmen.jpeg",
    paidInFull: "Images/Movie_Images/paidinfull.jpeg",
    gangsOfNewYork: "Images/Movie_Images/gangsofnewyork.jpg",
    taxiDriver: "Images/Movie_Images/taxidriver.jpeg",
    houseOfGucci: "Images/Movie_Images/houseofgucci.jpg",
    memento: "Images/Movie_Images/memento.jpeg",
    leon: "Images/Movie_Images/leon.jpeg",
    lImpasse: "Images/Movie_Images/limpasse.webp",
    nikita: "Images/Movie_Images/nikita.webp",
    dobermann: "Images/Movie_Images/dobermann.jpeg",
    laFureurDuDragon: "Images/Movie_Images/lafureurdudragon.jpeg",
    humanTraffic: "Images/Movie_Images/humantraffic.jpeg",
    menInBlack: "Images/Movie_Images/meninblack.jpeg",
    monBeauPereEtMoi: "Images/Movie_Images/monbeaupereetmoi.jpg",
    leRoisDuDesert: "Images/Movie_Images/lesroisdudesert.jpeg",
    lesPrincesDeLaVille: "Images/Movie_Images/lesprincesdelaville.jpg",
    desperado: "Images/Movie_Images/desperado.jpg",
}
imageArray = Object.values(movieImages);

// Array of all the films displayed
films = [
    "Casino", "Reservoir Dogs", "Raging Bull",
    "Inglorious Basterds", "Las Vegas Parano", "Heat",
    "Ocean Eleven", "Jackie Brown", "Training Day",
    "Boyz in the Hood", "Menace 2 Society", "Drive",
    "Falling Down", "Friday", "Public Enemies",
    "Nightcall", "Apocalypse Now", "Les Incorruptibles",
    "Batman", "Il était une fois le Bronx", "Les huits salopards",
    "Pulp Fiction", "American Gangster", "Gomorra",
    "Get Rich or Die Tryin'", "Legend", "No Country For Old Men",
    "Paid In Full", "Gangs of New-York", "Taxi Driver",
    "House of Gucci", "Memento", "Leon",
    "L'impasse", "Nikita", "Dobermann",
    "La fureur du dragon", "Human Traffic", "Men In Black",
    "Mon beau-père et moi", "Les rois du désert", "Les princes de la ville",
    "Desperado"
]


// Summary of the displayed movie
const summary = {
    casino: "Las Vegas, années 70. Ace Rothstein dirige d'une main de fer le Tangiers, hôtel casino parmi les plus prospères de la ville, financé en sous main par le puissant syndicat des camionneurs. Ace est devenu le grand manitou de Las Vegas, secondé par son ami d'enfance, Nicky Santoro. Impitoyable avec les tricheurs, Rothstein se laisse un jour séduire par une virtuose de l'arnaque d'une insolente beauté, Ginger McKenna.",
    reservoirDogs: "Six truands désignés par des noms de code entreprennent de dévaliser une importante bijouterie sous la direction du tyrannique Joe Cabot et de son fils Nice Guy Eddie. L'opération échoue malencontreusement et se solde par un bain de sang. Les malfrats se réfugient alors dans un entrepôt sordide. Mr Orange est grièvement blessé. Mr Pink, quant à lui, est d'avis qu'il existe un traître parmi eux. Mr Blonde, un psychopathe, entend bien faire parler le policier qu'il a réussi à capturer.",
    ragingBull: "En 1941, Jake LaMotta a tout juste dix-neuf ans et une foi absolue en sa bonne étoile. Joey, son frère, parvient à le persuader qu'il peut prétendre au titre de champion du monde de boxe. Commence alors un entraînement intensif pour Jake, qui n'en néglige pas pour autant Vickie, sa jeune et ravissante épouse. Les combats se succèdent, et le jeune sportif voit ses chances de décrocher le titre tant convoité augmenter de jour en jour.",
    ingloriousBasterds: "Dans la France occupée de 1940, Shosanna Dreyfus assiste à l'exécution de sa famille tombée entre les mains du colonel nazi Hans Landa. Shosanna s'échappe de justesse et s'enfuit à Paris où elle se construit une nouvelle identité en devenant exploitante d'une salle de cinéma. Quelque part ailleurs en Europe, le lieutenant Aldo Raine forme un groupe de soldats juifs américains pour mener des actions punitives particulièrement sanglantes contre les nazis.",
    lasVegasParano: "À travers l'épopée à la fois comique et horrible vers Las Vegas du journaliste Raoul Duke et de son énorme avocat, le Dr. Gonzo, évocation caustique et brillante de l'année 1971 aux États-Unis, pendant laquelle les espoirs des années 60 et le fameux rêve américain furent balayés pour laisser la place à un cynisme plus politiquement correct.",
    heat: "La bande de Neil McCauley à laquelle est venu se greffer Waingro, une nouvelle recrue, attaque un fourgon blindé pour s'emparer d'une somme importante en obligations. Cependant, ce dernier tue froidement l'un des convoyeurs et Chris Shiherlis se retrouve obligé de terminer le travail. Neil tente d'éliminer Waingro, mais celui-ci parvient à s'échapper. Parallèlement, le lieutenant Vincent Hanna mène l'enquête.",
    oceanEleven: "Après deux ans passés dans la prison du New Jersey, Danny Ocean retrouve la liberté et s'apprête à monter un coup qui semble impossible à réaliser : cambrioler dans le même temps les casinos Bellagio, Mirage et MGM Grand, avec une jolie somme de 150 millions de dollars à la clé. Il souhaite également récupérer Tess, sa bien-aimée que lui a volée Terry Benedict, le propriétaire de ces trois somptueux établissements de jeux de Las Vegas.",
    jackieBrown: "Jackie Brown, hôtesse de l'air, arrondit ses fins de mois en convoyant de l'argent liquide pour le compte d'un trafiquant d'armes, Ordell Robbie. Un jour, un agent fédéral et un policier de Los Angeles la cueillent à l'aéroport. Ils comptent sur elle pour faire tomber le trafiquant. Jackie échafaude alors un plan audacieux pour doubler tout le monde lors d'un transfert impliquant une somme de cinq cent mille dollars.",
    trainingDay: "Jake Hoyt, un jeune bleu idéaliste et naïf, a rallié la police de Los Angeles dans l'espoir de servir la justice. Décidé à passer inspecteur, il sollicite une mise à l'essai de vingt-quatre heures auprès du sergent chef Alonzo Harris, un vétéran de la lutte antidrogue qui opère depuis une douzaine d'années dans les quartiers les plus durs de la ville.",
    boyzInTheHood: "Trois amis de South Central, un ghetto de Los Angeles, vivent un quotidien rythmé par la drogue, les gangs et les interventions policières. Tandis que l'un d'eux s'en sort grâce aux études, les deux autres sont pris dans l'engrenage de la violence.",
    menace2Society: "Après avoir grandi dans le milieu des gangs des cités de Los Angeles, Caine Lawson, 18 ans, veut s'en sortir. Tous ceux qui l'entourent, y compris son imprévisible ami O-Dog, sont prisonniers de leur vie de crime et de violence. Avec l'aide de son professeur et de sa petite amie qui le soutiennent, Caine prévoit de quitter la ville pour de bon. Mais dans une série d'événements tragiques, Caine se rend compte que s'échapper ne sera pas facile.",
    drive: "Un jeune homme solitaire, The Driver, conduit le jour à Hollywood pour le cinéma en tant que cascadeur et la nuit pour des truands. Ultra professionnel et peu bavard, il a son propre code de conduite. Jamais il n'a pris part aux crimes de ses employeurs autrement qu'en conduisant - et au volant, il est le meilleur !",
    fallingDown: "Durant un été très chaud, un embouteillage causé par un chantier de travaux publics paralyse une portion de route de Los Angeles. William Foster, ancien salarié de l'industrie de la défense, craque soudainement et abandonne son véhicule. Fou de rage, il se lance dans une virée sauvage dans les rues de Los Angeles, s'en prenant indifféremment aux membres d'un gang ou aux employés d'un fast-food.",
    friday: "Après avoir été congédié pendant son jour de congé, Craig accompagné de son meilleur ami Smokey passe la journée à fumer dans leur quartier de Los Angeles. Au fil des heures, les deux amis découvrent toutes les facettes de la vie urbaine: des fusillades, un trafiquant de drogue en colère et beaucoup d'autres personnages étranges.",
    publicEnemies: "Basé sur l'histoire vraie de John Dillinger, un braqueur de banque hors pair qui a sévi à de nombreuses reprises dans l'Amérique des années 30. Avancé comme l'ennemi public numéro 1 par le patron du FBI, John Edgar Hoover, Dillinger sera traqué sans relâche par Melvin Purvis, l'un des agents fédéraux des plus efficaces.",
    nightcall: "Oiseau de nuit asocial, Lou fait une halte sur le site d'un accident de la route. Fasciné par le travail des caméramans pigistes guidés sur les lieux par les radars de la police, le jeune voleur décide de faire de ce métier sa nouvelle vocation. Mal équipé et sans formation, Lou parvient toutefois, grâce à son arrogance et à son mépris des règles éthiques, à obtenir des images sensationnelles d'un accident puis à les vendre à Nina, productrice d'une émission de télévision matinale.",
    apocalypseNow: "Pendant la guerre du Vietnam, un agent de l'armée américaine s'aventure au Cambodge à la recherche d'un tyran dangereux, le colonel Kurtz, autrefois un soldat modèle qui s'est converti plus tard à la cause de l'ennemi.",
    lesIncorruptibles: "À Chicago durant les années trente, lors de la prohibition, Al Capone règne en maître absolu sur le réseau de vente illégale d'alcool. Décidé à mettre un terme au trafic et à confondre Al Capone, l'agent Eliot Ness recrute trois hommes de confiance, aussi intraitables que lui. Ensemble, les quatre incorruptibles partent en guerre contre le gang de Capone.",
    batman: "Le célèbre et impitoyable combattant, Batman, est de retour. Plus beau, plus fort, et plus dépoussiéré que jamais, il s'apprête à nettoyer Gotham City et à affronter le terrible Joker. Tout cela, car un mystérieux justicier a déclaré la guerre aux criminels qui sèment la terreur dans les rues de la ville.",
    ilEtaitUneFoisLeBronx: "Le quartier de Fordam, dans le Bronx, vit sous le règne de la mafia sicilienne. Honnête chauffeur de bus et père de famille très modeste, Lorenzo Anello refuse d'accepter combines et argent sale. Un soir, son fils Calogero, du haut de ses 9 ans, est témoin d'un meurtre commis par Sonny, le chef des mafieux. Fasciné par le malfrat, il respecte l'omerta et ne dit rien à la police. Sonny prend le petit sous son aile et le considère comme le sien.",
    lesHuitsSalopards: "Quelques années après la guerre de Sécession, le chasseur de primes John Ruth, dit Le Bourreau, fait route vers Red Rock, où il conduit sa prisonnière Daisy Domergue. Sur leur route, ils rencontrent le Major Marquis Warren, un ancien soldat aussi devenu chasseur de primes, et Chris Mannix, le nouveau shérif de Red Rock. Surpris par le blizzard, ils trouvent refuge dans une auberge au milieu des montagnes, où ils sont accueillis par quatre personnages énigmatiques.",
    pulpFiction: "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent. Dans un restaurant, un couple de jeunes braqueurs, Pumpkin et Yolanda, discutent des risques que comporte leur activité. Deux truands, Jules Winnfield et son ami Vincent Vega, qui revient d'Amsterdam, ont pour mission de récupérer une mallette au contenu mystérieux et de la rapporter à Marsellus Wallace.",
    americanGangster: "En 1970, dans le quartier de Harlem à New York, Frank Lucas décide de prendre la relève du trafic de drogue, suite à la mort du caïd local dont il était le chauffeur et confident depuis quinze ans. Jeune, ambitieux et intelligent, il ne veut dépendre de personne et met son propre réseau sur pied. Utilisant les avions de l'armée américaine, il importe des quantités massives d'héroïne et amasse rapidement une fortune colossale.",
    gomorra: "`On ne partage pas un empire d'une poignée de main, on le découpe au couteau'. Cet empire, c'est Naples et la Campanie. Gomorrhe aux mains de la Camorra. Là-bas, une seule loi : la violence. Un seul langage : les armes. Un seul rêve : le pouvoir. Une seule ivresse : le sang. Sur fond de guerres de clans et de trafics en tous genres, Gomorra raconte les destins croisés de : Toto, Don Ciro et Maria, Franco et Roberto, Pasquale, Marco et Ciro.",
    getRichOrDieTryin: "Un rêve habite Marcus depuis toujours : devenir rappeur. Lorsque sa mère est assassinée, l'adolescent perd brutalement ses repères et plonge dans le crime. Devenu dealer par nécessité, il se voit rapidement entraîné dans une spirale infernale, avec pour seuls garde-fous sa grand-mère, sa petite amie Charlene et son loyal ami Bama. Sa vie dès lors se partage entre le crime et l'écriture, à laquelle il consacre la même énergie désespérée.",
    legend: "Durant les années 60, Londres a été marqué du règne brutal des frères Kray. Ronnie était le psychopathe de la famille, alors que son jumeau Reggie s'avérait plus équilibré. Ensemble, ils ont fait régner la loi, développant des liens avec des gangsters et la mafia américaine, élargissant leur influence jusqu'aux boîtes de nuit et aux casinos. Pendant que Reggie filait le bonheur avec la séduisante Frances, Ronnie se livrait à des actions des plus en plus barbares et irréfléchies.",
    noCountryForOldMen: "A la frontière qui sépare le Texas du Mexique, les trafiquants de drogue ont depuis longtemps remplacé les voleurs de bétail. Lorsque Llewelyn Moss tombe sur une camionnette abandonnée, cernée de cadavres, il ne sait rien de ce qui a conduit à ce drame. Quand il prend les deux millions de dollars qu'il découvre à l'intérieur du véhicule, il n'a pas la moindre idée de ce que cela va provoquer. Moss a déclenché une réaction en chaîne d'une violence inouïe.",
    paidInFull: "À Harlem dans les années 1980, Ace observe avec envie les voitures luxueuses et les beaux vêtements de ses amis Mitch et Calvin, trafiquants de cocaïne. Un jour, Ace rencontre par hasard Luis « Lulu » Lujano dans le luxueux appartement de ce dernier. Ace va vite être attiré dans l'argent facile liée au trafic de drogue. Alors qu'il devient quelqu'un d'important, Ace se rend compte que son succès rapide va lui attirer des ennuis.",
    gangsOfNewYork: "En 1846, le quartier de Five Points, un faubourg pauvre de New York, est le théâtre d'une guerre des gangs sanguinaire. Lorsque Bill le Boucher assassine le chef des Irlandais, père d'Amsterdam Vallon, il s'associe avec un policier véreux et prend le contrôle de la ville. Seize ans plus tard, Amsterdam retourne à New York pour venger la mort de son père, tuer Bill et mettre fin à son règne.",
    taxiDriver: "Depuis son retour du Vietnam, Travis Bickle est contraint de prendre quantité de tranquillisants pour dormir. Il devient taxi de nuit, évoluant dans un New York où se mêlent délinquants, drogués et prostitués. Dans la journée, il écrit son journal dans lequel il se dit laid et incompris. Amoureux de Betsy, celle-ci le quitte à cause de sa maladresse. Il s'intéresse à la politique puis surtout à la violence et aux armes.",
    houseOfGucci: "Retour sur l'assassinat de Maurizio Gucci le 27 mars 1995, petit-fils héritier de Guccio Gucci, le fondateur de la célèbre marque de luxe italienne. Sa future ex-femme, Patrizia Reggiani, a commandité son meurtre afin de toucher la part d'héritage qui lui revenait avant que Maurizio se remarie avec Paola Franchi.",
    memento: "Leonard Shelby ne porte que des costumes de grands couturiers et ne se déplace qu'au volant de sa Jaguar. En revanche, il habite dans des motels miteux et règle ses notes avec d'épaisses liasses de billets.Leonard n'a qu'une idée en tête : traquer l'homme qui a violé et assassiné sa femme afin de se venger. Sa recherche du meurtrier est rendue plus difficile par le fait qu'il souffre d'une forme rare et incurable d'amnésie.",
    leon: "Un tueur à gages répondant au nom de Léon prend sous son aile Mathilda, une petite fille de 12 ans, seule rescapée du massacre de sa famille. Bientôt, Léon va faire de Mathilda une `nettoyeuse', comme lui. La jeune fille pourra alors venger son petit frère.",
    lImpasse: "En 1975, à New York, Carlito Brigante, un ancien trafiquant de drogue, est libéré de prison grâce à David Kleinfeld, son avocat, qui a découvert plusieurs vices de forme dans la manière dont le procureur Bill Norwalk avait instruit le procès. Carlito est bien décidé à rentrer dans le droit chemin et, dès qu'il aura économisé assez d'argent, il compte se retirer aux Bahamas pour s'assurer une retraite paisible avec Gail, sa compagne danseuse dans une boîte de striptease.",
    nikita: "Une nuit, le braquage d'une pharmacie se termine en une sanglante tuerie. Nikita est arrêtée et condamnée à vie pour meurtre. Pourtant, elle va avoir une chance de se racheter en signant avec l'Etat un pacte implacable. Après trois ans d'un dur entraînement et une dernière mise à l'épreuve, Nikita retrouve une nouvelle identité et devient un tueur à la solde du gouvernement.",
    dobermann: "Le Dobermann et son gang défraient la chronique. Banques, postes, fourgons,tout y passe. Une anthologie du braquage, un best-of du hold-up ! En face d'eux,un flic quelque peu pourri, qui fait de leur arrestation une affaire personnelle.",
    laFureurDuDragon: "Originaire de Hong-Kong, Tang Lung est envoyé par Wang en Italie pour aider Chen, la nièce de ce dernier, qui exploite un restaurant à Rome. La jeune femme subit en effet des pressions de la mafia pour vendre son établissement. Devant son obstination à refuser, les truands multiplient les intimidations. Tang Lung, redoutable combattant, compte sur ses aptitudes physiques pour la sortir de cette mauvaise passe.",
    humanTraffic: "Cinq copains de Cardiff, dont la vie revêt le plus souvent des teintes grisâtres, ont pris l'habitude chaque vendredi soir d'aller en boite pour s'amuser. Pour Jip, Koop, Nina, Lulu et Moff, tout peut arriver, même le meilleur, et tous les moyens sont bons.",
    menInBlack: "Chargés de protéger la Terre de toute infraction extraterrestre et de réguler l'immigration intergalactique sur notre planète, les Men in black ou MIB opèrent dans le plus grand secret. Vêtus de costumes sombres et équipés des toutes dernières technologies, ils passent inaperçus aux yeux des humains dont ils effacent régulièrement la mémoire récente.",
    monBeauPereEtMoi: "Greg Focker, un modeste infirmier de Chicago, vit depuis deux mois avec la charmante Pam Byrnes et rêve d'officialiser leur union. Ravie de sa proposition, la jeune femme insiste pour un strict respect des règles bourgeoises: Greg devra obtenir l'accord de son père, Jack. Deux semaines plus tard, le couple fait son apparition dans la luxueuse résidence des Byrnes. Accueilli à bras ouverts par la mère de Pam, Dina, Greg décèle d'emblée une certaine froideur chez Jack.",
    lesRoisDuDesert: "Quatre soldats, Archi, un béret vert, Troy Barlow, un jeune idéaliste, Elgin et Conrad Vig, déçus et frustrés par l'aboutissement de la Guerre du Golfe, cette guerre `high-tech' aux allures de jeu vidéo, décident de prendre une petite revanche. Ils concluent qu'ils méritent bien une petite compensation et montent hâtivement une expédition secrète en vue de récupérer une partie des lingots volés par Saddam Hussein au Koweit.",
    lesPrincesDeLaVille: "Paco, son demi-frère Cruz et leur cousin Miklo, des jeunes Hispano-Américains, vivent dans le même quartier `chicano', à l'est de Los Angeles. Ce `barrio' est livré aux rivalités entre gangs. Bien qu'unis par leurs origines, les trois jeunes gens empruntent des chemins bien différents. Cruz, taggeur, manifeste un talent prometteur , Miklo a vite plongé dans la délinquance. Quant à Paco, il est devenu policier.",
    desperado: "Le Mariachi, musicien sans nom, mais non sans caractère, est de retour dans l'obscur village où le Bucho, un gangster mexicain, a assassiné sa petite amie. El Mariachi a décidé à se venger, mais ses ennemis s'en aperçoivent bientôt. Pas question de le laisser accomplir sa mission. Le musicien échappe par miracle à plusieurs tentatives de meurtre, non sans paver son chemin de cadavres."
}

summaryArray = Object.values(summary);

saveFilmsToLocalStorage(films);
saveSummariesToLocalStorage(summaryArray);
saveImagesToLocalStorage(imageArray);

const randomNum = randomNumber();
    const randomFilm = films[randomNum];
    if (randomFilm === undefined) {
        summaryTitle.innerHTML = "C'était le dernier! Rajoutez des classiques et recommencez 🔄"
    }

    const randomSummary = summaryArray[randomNum];
    if (randomSummary === undefined) {
        summaryText.innerHTML = '';
    }
    else {
        summaryText.innerHTML = randomSummary;
    }

    summaryText.style.display = 'block';
    summaryTitle.style.display = 'block';

    function replaceImage() {
        // Get the image element by its ID
        const img = document.getElementById('film-image');

        // Set the new source URL
        const newSrc = imageArray[randomNum];

        // Set the src attribute of the image element to the new source URL
        img.src = newSrc;

        return newSrc;
    }
    const randomImage = replaceImage()
    if (randomImage === undefined) {
        filmImage.src = 'Images/clap.png'
    }

    if (randomFilm === undefined) {
        textFieldFilm.innerHTML = '';
    } 
    else {
        textFieldFilm.innerHTML = randomFilm;
        textFieldFilm.style.color = 'black';
    }

    // Styling back the window
    refreshButton.style.display = 'none';
    filmButton.innerHTML = 'Choisir un film';
    filmButton.style.display = 'inline';
    summaryTitle.innerHTML = 'Synopsis';
    summaryText.style.height = '110px';
    filmImage.src = 'Images/clap.png';
    textFieldFilm.innerHTML = 'Votre film ici';
    textFieldFilm.style.color = 'rgba(0, 0, 0, 0.5)';
    summaryTitle.innerHTML = '';
    summaryText.innerHTML = '';
    summaryText.style.display = 'none';

    // Setting the stored dataset to the new generated array
    localStorage.setItem('randomNum', randomNum);
    localStorage.setItem('randomFilm', films[randomNum]);
    localStorage.setItem('randomImage', imageArray[randomNum]);
    localStorage.setItem('randomSummary', summaryArray[randomNum]);
})

mainTitle.addEventListener('click', event => {
    event.preventDefault;

    window.location.replace("index.html");
})