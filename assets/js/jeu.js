const ALL_QUESTIONS = [{"id": 1, "category": "patient", "situation": "Il débarque au téléphone en pleine négociation avec son fournisseur, pousse la porte sans raccrocher, et balance « la cheville, vite, ce que vous avez de plus fort » comme s'il commandait un café à emporter.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 2, "category": "patient", "situation": "Il regarde sa montre deux fois en 30 secondes façon compte à rebours de fusée, et coupe le pharmacien : « allez à l'essentiel, j'ai un rendez-vous qui a commencé il y a cinq minutes. »", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 3, "category": "patient", "situation": "Il a mal dormi, il a deux minutes montre en main, et il traite le comptoir comme un drive : « une seule solution, je ne suis pas venu faire du shopping. »", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 4, "category": "patient", "situation": "Dans la file, il négocie au téléphone comme si sa vie en dépendait, et regarde la porte de sortie plus que le pharmacien.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 5, "category": "patient", "situation": "Il vient chercher une ordonnance en donnant des ordres à quelqu'un au téléphone en même temps, sur le ton de quelqu'un qui dirige une opération militaire.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 6, "category": "patient", "situation": "« J'ai déjà dit ce qu'il me fallait » : il coupe toute question comme s'il payait à la seconde.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 7, "category": "patient", "situation": "Il tourne en rond dans la file comme un lion en cage, regarde partout sauf le présentoir, cherche visiblement une sortie plus rapide.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 8, "category": "patient", "situation": "« Je prends toujours ça » : vingt ans de fidélité au même produit, zéro envie d'entendre une explication de plus.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 9, "category": "patient", "situation": "Patron d'entreprise, il pose sa question en une phrase et attend la réponse en une autre, ni plus ni moins.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 10, "category": "patient", "situation": "Venu pour une entorse, il vous refait le film complet : comment il est tombé, la quatrième fois que ça lui arrive, et sa dernière soirée concert qui n'a rien à voir. La cheville, on y arrivera peut-être avant la fermeture.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 11, "category": "patient", "situation": "En attendant son tour, il a déjà sympathisé avec trois autres patients de la file, à voix haute, comme si c'était une réunion Tupperware.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 12, "category": "patient", "situation": "Il choisit un produit « parce que la boîte est jolie », argument imparable qu'aucune notice n'a jamais réussi à contredire.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 13, "category": "patient", "situation": "Avant de parler de son ordonnance, il prend des nouvelles de toute l'équipe, façon retrouvailles de famille.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 14, "category": "patient", "situation": "Le conseil est donné, la vente est faite, mais lui, il est toujours là dix minutes plus tard à raconter autre chose.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 15, "category": "patient", "situation": "Il demande l'avis de son conjoint, de sa voisine de file, et du pharmacien, dans la même phrase, comme s'il montait un jury populaire.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 16, "category": "patient", "situation": "Il raconte comment il s'est fait mal avec des grands gestes et un fou rire, en plein milieu de la pharmacie, public compris.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 17, "category": "patient", "situation": "Troisième passage cette semaine « pour faire un coucou », le motif médical n'est presque plus qu'un prétexte.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 18, "category": "patient", "situation": "Il enchaîne l'historique complet de ses trois précédentes entorses, sans qu'on lui ait rien demandé, comme un générique de fin.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 19, "category": "patient", "situation": "Il a déjà tout cherché sur Google avant de venir, et récite le nom exact du produit comme un mot de passe : pas d'alternative acceptée.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 20, "category": "patient", "situation": "Il pose dix questions sur une seule boîte, dosage, horaire, interactions, durée, comme s'il passait un oral de pharmacologie.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 21, "category": "patient", "situation": "Le pharmacien propose une alternative : mauvaise idée. Il veut exactement ce qu'il avait en tête, ni plus, ni moins, ni autre chose.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 22, "category": "patient", "situation": "Il veut lire la notice en entier sur place, ligne par ligne, pendant que la file s'allonge derrière lui.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 23, "category": "patient", "situation": "« Vous avez une source ? » : il ne prend rien pour argent comptant, même venant d'un pharmacien diplômé.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 24, "category": "patient", "situation": "Comptable dans la vie, il note presque mentalement chaque réponse du pharmacien comme s'il allait la vérifier plus tard sur tableur.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 25, "category": "patient", "situation": "Il revient une semaine après avec un carnet de questions de suivi si précis qu'on croirait un audit.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 26, "category": "patient", "situation": "Il compare deux boîtes ligne de composition par ligne de composition, au comptoir, sous le regard impatient de la file.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 27, "category": "patient", "situation": "Pour la même cheville, lui, il a déjà tout géré tout seul avant de venir : strap fait main, anti-inflammatoire pris, mission accomplie version amateur éclairé.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 28, "category": "patient", "situation": "Fond d'écran enfants et plantes vertes, pull doux, il dégage une sérénité presque suspecte pour un mardi après-midi.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 29, "category": "patient", "situation": "« Je ne sais pas trop... j'hésite » : la phrase qu'il répétera encore trois fois avant de se décider.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 30, "category": "patient", "situation": "Habillé nature, voix douce, il donne l'impression d'être venu pour un câlin plus que pour une ordonnance.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 31, "category": "patient", "situation": "Avant d'accepter quoi que ce soit, il veut savoir si c'est doux, sûr, et compatible avec un enfant de trois ans dans les parages.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 32, "category": "patient", "situation": "Il a déjà testé sa propre préparation maison avant de passer à la pharmacie, en plan B version prudente.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 33, "category": "patient", "situation": "« Je vais y réfléchir » : il repart sans rien acheter, mais visiblement rassuré d'avoir posé la question.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 34, "category": "patient", "situation": "Une fois le cadre bien expliqué, il remercie trois fois de suite comme si on venait de lui sauver la semaine.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 35, "category": "titulaire_collegue", "situation": "Le titulaire annonce le challenge produit en parlant chiffre d'affaires et augmentation de salaire : lui, soudain, est très motivé.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 36, "category": "titulaire_collegue", "situation": "Il veut être challengé directement et s'inscrit lui-même en premier sur la liste, avant même que le titulaire ait fini sa phrase.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 37, "category": "titulaire_collegue", "situation": "En réunion, il coupe le titulaire : « on fait quoi concrètement, là, maintenant », parce que le PowerPoint, très peu pour lui.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 38, "category": "titulaire_collegue", "situation": "Plus il prend de responsabilités dans l'officine, plus il devient carré et directif : la version pharmacie de la loi de la jungle.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 39, "category": "titulaire_collegue", "situation": "Il veut des objectifs chiffrés, pas un discours motivant à la Rocky Balboa.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 40, "category": "titulaire_collegue", "situation": "Il veut savoir en deux minutes chrono ce que le challenge change pour lui, montre en main.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 41, "category": "titulaire_collegue", "situation": "Il prend déjà des initiatives avant même que le titulaire ait donné le feu vert, façon franc-tireur bienveillant.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 42, "category": "titulaire_collegue", "situation": "Le titulaire le motive le mieux en le laissant fixer lui-même son objectif : lui donner un cadre, il le dépasse.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 43, "category": "titulaire_collegue", "situation": "Dès que le titulaire dit que le produit est « génial, incroyable, différenciant », il est déjà debout, prêt à foncer.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 44, "category": "titulaire_collegue", "situation": "Il est le premier à annoncer le challenge à toute l'équipe, l'affiche n'est même pas encore imprimée.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 45, "category": "titulaire_collegue", "situation": "Il préfère que le challenge soit annoncé devant tout le monde, en grande pompe, plutôt qu'en aparté discret.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 46, "category": "titulaire_collegue", "situation": "Il est motivé davantage par les applaudissements de l'équipe que par la prime elle-même.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 47, "category": "titulaire_collegue", "situation": "Il raconte le challenge aux patients avec un enthousiasme presque suspect, avant même d'avoir vendu la première boîte.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 48, "category": "titulaire_collegue", "situation": "Il a besoin que le titulaire reste chaleureux même en fixant un objectif ferme, sinon il se referme comme une huître.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 49, "category": "titulaire_collegue", "situation": "Hyper motivé les deux premiers jours, puis il se disperse doucement si personne ne relance la machine.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 50, "category": "titulaire_collegue", "situation": "Il propose une idée d'affichage ou d'animation pour rendre le challenge plus fun, spontanément, sans qu'on lui demande.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 51, "category": "titulaire_collegue", "situation": "Avant de s'engager, il demande au titulaire : « qu'est-ce qui te manque pour que je puisse le mettre en place », interrogatoire en règle version bienveillante.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 52, "category": "titulaire_collegue", "situation": "Il se vexe si le titulaire le motive avec exactement le même discours que pour toute l'équipe : lui, il veut du sur-mesure.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 53, "category": "titulaire_collegue", "situation": "Avant de vendre quoi que ce soit, il veut connaître le mécanisme d'action précis, sinon il ne se sent pas légitime au comptoir.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 54, "category": "titulaire_collegue", "situation": "Impossible de le motiver en réunion collective : il faut un tête-à-tête, sinon c'est silence radio.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 55, "category": "titulaire_collegue", "situation": "Il n'accepte le challenge qu'après avoir compris exactement le « pourquoi » qui le concerne, lui, personnellement, pas l'équipe en général.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 56, "category": "titulaire_collegue", "situation": "Avant même de vendre le premier produit, il a déjà préparé son argumentaire par écrit, façon mémoire de fin d'études.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 57, "category": "titulaire_collegue", "situation": "Il remet en question la méthode de calcul du challenge si elle lui semble bancale, calculette à la main.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 58, "category": "titulaire_collegue", "situation": "Silencieux en réunion, il débarque ensuite dans le bureau du titulaire avec une liste de questions écrites à l'avance.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 59, "category": "titulaire_collegue", "situation": "Il s'engage sur le challenge dès que le titulaire prononce les mots « 100% naturel » et « responsable ».", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 60, "category": "titulaire_collegue", "situation": "Avant de foncer, il s'inquiète d'abord de l'ambiance d'équipe : « on ne va pas se tirer dans les pattes pour ça, hein ? »", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 61, "category": "titulaire_collegue", "situation": "Il a besoin d'être rassuré que ce n'est pas une compétition entre collègues, sinon il refuse presque par principe.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 62, "category": "titulaire_collegue", "situation": "Il préfère nettement un objectif d'équipe à un classement individuel affiché, allergie déclarée au tableau des scores.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 63, "category": "titulaire_collegue", "situation": "Avant de pousser le produit, il demande s'il convient aussi aux patients les plus fragiles, réflexe maman poule intégré.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 64, "category": "titulaire_collegue", "situation": "Il s'engage tout doucement, sans excès, mais il tient l'objectif jusqu'au bout, en tortue increvable.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 65, "category": "titulaire_collegue", "situation": "Il propose de son propre chef d'accompagner un collègue plus jeune pendant tout le challenge, mentor naturel.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 66, "category": "titulaire_collegue", "situation": "Il demande un temps calme en tête-à-tête avec le titulaire, loin du bruit du comptoir, pour bien comprendre l'objectif.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 67, "category": "titulaire_collegue", "situation": "Il se sent valorisé surtout quand le titulaire parle de l'aspect humain du challenge, le chiffre passe presque au second plan.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 68, "category": "collegue_collegue", "situation": "Il coupe la parole d'un collègue en pleine explication pour accélérer le service, la file qui s'allonge lui donne des sueurs froides.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 69, "category": "collegue_collegue", "situation": "Il ronge son frein en silence pendant qu'un collègue prend 20 minutes avec un patient bavard, chronomètre mental en marche.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 70, "category": "collegue_collegue", "situation": "Dès que la file s'allonge, il propose de prendre le relais, sans même vraiment demander la permission.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 71, "category": "collegue_collegue", "situation": "À l'arrière, ses consignes tiennent en une phrase, sans détour, sans fioriture, presque militaire.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 72, "category": "collegue_collegue", "situation": "Quand deux collègues hésitent, il tranche à leur place en trois secondes, référent auto-proclamé.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 73, "category": "collegue_collegue", "situation": "Une réunion qui dépasse dix minutes, et son regard commence à dériver vers la sortie.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 74, "category": "collegue_collegue", "situation": "Il voit un patient s'impatienter face à un collègue trop bavard : il va discrètement à l'arrière proposer de reprendre le comptoir, façon sauvetage éclair.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 75, "category": "collegue_collegue", "situation": "Deux collègues aussi directs l'un que l'autre finissent par se répartir le boulot sans un mot de trop, l'un laissant l'autre prendre le dessus sur ce dossier.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "rouge", "explanation": "Rouge : direct, pressé, orienté résultat. Il veut une réponse claire, vite, sans détour."}, {"id": 76, "category": "collegue_collegue", "situation": "Il raconte son week-end en détail à un collègue avant même d'avoir repris sa place au comptoir, épisode complet, rebondissements inclus.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 77, "category": "collegue_collegue", "situation": "Il a du mal avec un collègue très direct qui tranche en deux secondes sans lui laisser le temps de développer.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 78, "category": "collegue_collegue", "situation": "C'est lui qui met l'ambiance en réserve pendant la pause, celui qui fait rire toute l'équipe entre deux préparations.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 79, "category": "collegue_collegue", "situation": "Il fait le tour de la pharmacie pour papoter avec trois collègues différents, son propre comptoir n'étant qu'une étape parmi d'autres.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 80, "category": "collegue_collegue", "situation": "Une remarque un peu sèche d'un collègue, et il la rumine toute la journée, même si elle n'était pas méchante.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 81, "category": "collegue_collegue", "situation": "Il propose d'aider un collègue débordé avec un enthousiasme presque suspect, comme si on lui offrait un cadeau.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 82, "category": "collegue_collegue", "situation": "Il a besoin qu'on lui reformule calmement une consigne lâchée entre deux patients, sinon il en garde une version toute personnelle.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 83, "category": "collegue_collegue", "situation": "Au moment de fermer, il raconte les meilleurs moments de sa journée à toute l'équipe, façon débrief animé.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "jaune", "explanation": "Jaune : communicant, expressif, prend de la place. Il achète aussi par ressenti et par lien humain."}, {"id": 84, "category": "collegue_collegue", "situation": "Il vérifie deux fois une préparation avant de la valider, par principe, même quand tout le monde lui dit que c'est bon.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 85, "category": "collegue_collegue", "situation": "Il préfère largement une consigne écrite noir sur blanc à un « tu feras comme ça » lancé en passant.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 86, "category": "collegue_collegue", "situation": "Il repère la moindre incohérence dans le rangement d'un collègue, œil de lynx version pharmacie.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 87, "category": "collegue_collegue", "situation": "Très organisé et très carré, il s'entend en fait très bien avec un collègue direct et tranchant : les deux aiment que ça avance, chacun à sa façon.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 88, "category": "collegue_collegue", "situation": "Avant d'appliquer une nouvelle procédure, il veut des précisions, encore des précisions, et une dernière précision pour la route.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 89, "category": "collegue_collegue", "situation": "Discret en réunion, il envoie ensuite un message ultra précis avec trois points numérotés, façon rapport d'audit.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 90, "category": "collegue_collegue", "situation": "Il repère en premier une erreur de stock, presque avant que l'erreur elle-même ait eu le temps de se sentir coupable.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 91, "category": "collegue_collegue", "situation": "Si un collègue change une méthode sans lui expliquer pourquoi, il se sent bousculé, presque trahi.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "bleu", "explanation": "Bleu : analytique, a besoin de comprendre et de précision. Il déteste le flou et l'approximation."}, {"id": 92, "category": "collegue_collegue", "situation": "Avant même de parler boulot, il prend des nouvelles d'un collègue fatigué, sincèrement inquiet pour lui.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 93, "category": "collegue_collegue", "situation": "Il propose de débriefer calmement la matinée avec toute l'équipe, sans pointer personne du doigt.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 94, "category": "collegue_collegue", "situation": "Dès qu'une tension pointe entre deux collègues, il se pose en médiateur naturel, mode pompier bienveillant activé.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 95, "category": "collegue_collegue", "situation": "Il s'inquiète pour un collègue qui a l'air stressé depuis quelques jours, et le lui dit gentiment.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 96, "category": "collegue_collegue", "situation": "Il préfère un roulement d'équipe calme et prévisible à des changements de planning de dernière minute.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 97, "category": "collegue_collegue", "situation": "Il remercie chaleureusement, presque avec effusion, un collègue qui l'a aidé sur un comptoir chargé.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 98, "category": "collegue_collegue", "situation": "C'est lui qui veille à ce que tout le monde ait bien pris sa pause, gardien officieux du bien-être de l'équipe.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 99, "category": "collegue_collegue", "situation": "Il a besoin d'un temps d'adaptation avant un changement d'équipe ou d'horaires, pas du genre à aimer les surprises.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}, {"id": 100, "category": "collegue_collegue", "situation": "Un collègue direct hausse le ton juste à côté de lui : il reste imperturbable, voix posée, comme si de rien n'était.", "options": ["rouge", "jaune", "bleu", "vert"], "correct": "vert", "explanation": "Vert : prudent, rassurant, protecteur. Il a besoin de sécurité et de temps avant de s'engager."}];
const COLOR_LABELS = {rouge: "🔴 Rouge", jaune: "🟡 Jaune", bleu: "🔵 Bleu", vert: "🟢 Vert"};
const CAT_LABELS = {
  patient: "Patient ↔ comptoir",
  titulaire_collegue: "Titulaire ↔ collègue",
  collegue_collegue: "Collègue ↔ collègue"
};

let session = [];
let idx = 0;
let score = 0;
let answered = false;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startGame() {
  session = shuffle(ALL_QUESTIONS).slice(0, 10);
  idx = 0;
  score = 0;
  renderQuestion();
}

function renderIntro() {
  document.getElementById("card").classList.remove("card-result");
  document.getElementById("card").innerHTML = `
    <h1>Le jeu comptoir BHEVIA</h1>
    <p class="subtitle">Quelle couleur ?</p>
    <p class="disc-intro">Un patient pressé, un collègue enthousiaste, un titulaire qui veut motiver son équipe : chacun réagit différemment selon son profil. La méthode DISC identifie 4 profils comportementaux pour repérer ça en quelques secondes — au comptoir, en équipe, ou avec un titulaire — et adapter le discours sans jamais changer le fond du message.</p>
    <div class="color-key">
      <div class="item"><span class="dot c-rouge"></span><span><b>Rouge</b> : direct, rapide, orienté résultat.</span></div>
      <div class="item"><span class="dot c-jaune"></span><span><b>Jaune</b> : enthousiaste, relationnel, communicatif.</span></div>
      <div class="item"><span class="dot c-vert"></span><span><b>Vert</b> : calme, patient, rassurant.</span></div>
      <div class="item"><span class="dot c-bleu"></span><span><b>Bleu</b> : précis, analytique, attentif aux détails.</span></div>
    </div>
    <p class="lead">10 situations réelles. Moins de 5 minutes.</p>
    <button class="start-btn" onclick="startGame()">Commencer la partie →</button>
  `;
}

function renderQuestion() {
  answered = false;
  document.getElementById("card").classList.remove("card-result");
  const q = session[idx];
  const opts = shuffle(q.options);
  const pct = Math.round((idx / session.length) * 100);
  document.getElementById("card").innerHTML = `
    <div class="progress-row"><span>Question ${idx + 1} / ${session.length}</span><span>Score ${score}</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <p class="cat-tag">${CAT_LABELS[q.category]}</p>
    <p class="kicker">Quelle couleur reconnaissez-vous ?</p>
    <p class="situation">${q.situation}</p>
    <div class="options" id="options">
      ${opts.map(c => `<button class="opt" data-color="${c}" onclick="answer('${c}')">${COLOR_LABELS[c]}</button>`).join("")}
    </div>
    <div id="feedbackZone"></div>
  `;
}

function answer(chosen) {
  if (answered) return;
  answered = true;
  const q = session[idx];
  const correct = q.correct;
  const isCorrect = chosen === correct;
  if (isCorrect) score++;

  document.querySelectorAll(".opt").forEach(btn => {
    btn.disabled = true;
    const c = btn.getAttribute("data-color");
    if (c === correct) btn.classList.add("correct");
    else if (c === chosen) btn.classList.add("wrong");
  });

  const verdict = isCorrect
    ? "✅ Bonne réponse !"
    : `❌ Pas tout à fait — c'était ${COLOR_LABELS[correct]}.`;

  document.getElementById("feedbackZone").innerHTML = `
    <div class="feedback ${isCorrect ? 'is-correct' : 'is-wrong'}">
      <div class="feedback-verdict">${verdict}</div>
      <div class="feedback-explain">${q.explanation}</div>
    </div>
    <button class="next-btn" onclick="nextQuestion()">${idx + 1 < session.length ? "Question suivante →" : "Voir mon score →"}</button>
  `;
}

function nextQuestion() {
  idx++;
  if (idx >= session.length) {
    renderResult();
  } else {
    renderQuestion();
  }
}

const SHARE_URL = "https://www.bhevia.com/";

function computeTier() {
  const pct = Math.round((score / session.length) * 100);
  if (pct >= 90) return "Œil affûté. Vous repérez une couleur presque à coup sûr.";
  if (pct >= 70) return "Bon niveau. Encore quelques situations et c'est un réflexe.";
  if (pct >= 50) return "Sur la bonne voie. Les 4 couleurs commencent à se distinguer.";
  return "Vous débutez, mais vous avez saisi l'idée.";
}

function renderResult() {
  const tier = computeTier();
  const card = document.getElementById("card");
  card.classList.add("card-result");
  card.innerHTML = `
    <div class="result-kicker-row">
      <span class="kicker-line"></span><span class="kicker-diamond"></span>
      <p class="kicker">Résultat</p>
      <span class="kicker-diamond"></span><span class="kicker-line"></span>
    </div>
    <img id="medalPreview" class="medal-preview" alt="Médaille — résultat ${score}/${session.length}" />
    <canvas id="medalCanvas" width="640" height="640" style="display:none;"></canvas>
    <canvas id="shareCanvas" width="1080" height="1080" style="display:none;"></canvas>
    <div class="score-tier">${tier}</div>
    <button class="linkedin-btn" onclick="shareLinkedIn()">
      <span class="li-icon">in</span> Partager sur LinkedIn →
    </button>
    <p class="share-support">En un clic, votre résultat est prêt à partager.</p>
    <div class="divider-row"><span class="divider-line"></span><span class="divider-diamond"></span><span class="divider-line"></span></div>
    <p class="share-support">Défiez vos collègues : qui aura le meilleur score ?</p>
    <button class="toggle-text-btn" onclick="toggleShareText()">💬 <span id="toggleTextLabel">Voir le texte du post</span></button>
    <div class="share-box" id="shareTextBox" style="display:none;"></div>
  `;
  document.getElementById("shareTextBox").textContent = buildShareText(tier);
  document.fonts.ready.then(() => {
    renderMedalPreview();
    renderShareCard(tier);
  });
}

// Draws the medal artwork (gradient disc, dotted rim, laurel accents,
// notched ribbon tails, stacked score) at (cx, cy) with outer radius R.
// Shared by the on-page preview canvas and the full downloadable share card
// so both stay visually identical.
function drawMedal(ctx, cx, cy, R) {
  ctx.save();

  // laurel accents flanking the medal
  ctx.globalAlpha = 0.28;
  ctx.fillStyle = "#D9A54A";
  for (const side of [-1, 1]) {
    for (let i = 0; i < 6; i++) {
      const t = i / 5;
      const bx = cx + side * (R * 1.28 - t * R * 0.55);
      const by = cy + R * 0.55 - t * R * 1.55;
      ctx.save();
      ctx.translate(bx, by);
      ctx.rotate(side * (0.9 - t * 0.55));
      ctx.beginPath();
      ctx.ellipse(0, 0, R * 0.075, R * 0.16, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }
  ctx.globalAlpha = 1;

  // sparkle accents
  ctx.fillStyle = "#FCEFD1";
  drawSparkle(ctx, cx - R * 1.02, cy - R * 0.62, R * 0.09);
  drawSparkle(ctx, cx + R * 0.92, cy - R * 0.82, R * 0.065);

  // ribbon tails (swallowtail notch)
  ctx.fillStyle = "#1B2B5E";
  drawRibbonTail(ctx, cx - R * 0.42, cy + R * 0.62, R * 0.34, R * 0.95, -1);
  drawRibbonTail(ctx, cx + R * 0.42, cy + R * 0.62, R * 0.34, R * 0.95, 1);

  // medal disc
  const grad = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
  grad.addColorStop(0, "#FCD98A");
  grad.addColorStop(0.55, "#F5A723");
  grad.addColorStop(1, "#C97F16");
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.shadowColor = "rgba(180,120,20,0.45)";
  ctx.shadowBlur = R * 0.3;
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.lineWidth = R * 0.02;
  ctx.strokeStyle = "rgba(255,255,255,0.55)";
  ctx.beginPath();
  ctx.arc(cx, cy, R * 0.97, 0, Math.PI * 2);
  ctx.stroke();

  // dotted rim
  const dotCount = 44;
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  for (let i = 0; i < dotCount; i++) {
    const a = (i / dotCount) * Math.PI * 2;
    const dx = cx + Math.cos(a) * R * 0.86;
    const dy = cy + Math.sin(a) * R * 0.86;
    ctx.beginPath();
    ctx.arc(dx, dy, R * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }

  // inner ring
  ctx.lineWidth = R * 0.012;
  ctx.strokeStyle = "rgba(255,255,255,0.45)";
  ctx.beginPath();
  ctx.arc(cx, cy, R * 0.74, 0, Math.PI * 2);
  ctx.stroke();

  // score, stacked
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  ctx.font = `800 ${Math.round(R * 0.62)}px Manrope, sans-serif`;
  ctx.textBaseline = "alphabetic";
  ctx.fillText(String(score), cx, cy + R * 0.12);
  ctx.font = `700 ${Math.round(R * 0.22)}px Manrope, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.fillText("/" + session.length, cx, cy + R * 0.42);

  ctx.restore();
}

function drawSparkle(ctx, x, y, s) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, -s); ctx.lineTo(s * 0.22, -s * 0.22);
  ctx.lineTo(s, 0); ctx.lineTo(s * 0.22, s * 0.22);
  ctx.lineTo(0, s); ctx.lineTo(-s * 0.22, s * 0.22);
  ctx.lineTo(-s, 0); ctx.lineTo(-s * 0.22, -s * 0.22);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawRibbonTail(ctx, xTop, yTop, w, len, dir) {
  const notch = len * 0.28;
  ctx.beginPath();
  ctx.moveTo(xTop - w / 2, yTop);
  ctx.lineTo(xTop + w / 2, yTop);
  ctx.lineTo(xTop + w / 2 + dir * w * 0.08, yTop + len);
  ctx.lineTo(xTop, yTop + len - notch);
  ctx.lineTo(xTop - w / 2 + dir * w * 0.08, yTop + len);
  ctx.closePath();
  ctx.fill();
}

function renderMedalPreview() {
  const canvas = document.getElementById("medalCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMedal(ctx, canvas.width / 2, canvas.height * 0.42, canvas.width * 0.28);
  document.getElementById("medalPreview").src = canvas.toDataURL("image/png");
}

function renderShareCard(tier) {
  const size = 1080;
  const cx = size / 2;
  const canvas = document.getElementById("shareCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#FAFAF9";
  ctx.fillRect(0, 0, size, size);

  const glow = ctx.createRadialGradient(cx, 420, 40, cx, 420, 480);
  glow.addColorStop(0, "rgba(245,167,35,0.18)");
  glow.addColorStop(1, "rgba(245,167,35,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, size, size);

  ctx.save();
  ctx.translate(cx - 132, 96);
  ctx.rotate(Math.PI / 4);
  ctx.fillStyle = "#F5A723";
  ctx.fillRect(-9, -9, 18, 18);
  ctx.restore();
  ctx.fillStyle = "#1B2B5E";
  ctx.font = "800 28px Manrope, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("BHEVIA PHARMA", cx - 108, 97);

  drawMedal(ctx, cx, 430, 175);

  ctx.fillStyle = "#1B2B5E";
  ctx.font = "700 38px Manrope, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  wrapCanvasText(ctx, tier, cx, 800, size - 220, 48);

  ctx.fillStyle = "#9CA3AF";
  ctx.font = "600 26px Manrope, sans-serif";
  ctx.fillText("bhevia.com", cx, size - 72);
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  const lines = [];
  for (const word of words) {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((l, i) => ctx.fillText(l, x, startY + i * lineHeight));
}

function buildShareText(tier) {
  return `J'ai fait ${score}/${session.length} au quiz BHEVIA « Quelle couleur ? » 🔴🟡🔵🟢
${tier}
La méthode DISC identifie 4 profils comportementaux pour adapter son discours en quelques secondes — au comptoir, en équipe, avec un titulaire.
À vous de tester votre œil 👉 www.bhevia.com`;
}

function toggleShareText() {
  const box = document.getElementById("shareTextBox");
  const label = document.getElementById("toggleTextLabel");
  const isHidden = box.style.display === "none";
  box.style.display = isHidden ? "block" : "none";
  label.textContent = isHidden ? "Masquer le texte du post" : "Voir le texte du post";
}

function downloadShareImage() {
  const canvas = document.getElementById("shareCanvas");
  const link = document.createElement("a");
  link.download = `bhevia-quelle-couleur-${score}sur${session.length}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function shareLinkedIn() {
  const tier = computeTier();
  const text = buildShareText(tier);
  const shareURL = `https://www.bhevia.com/share/${score}.html`;

  // Copie préalable du texte au presse-papiers pour le cas où l'app native masque le champ texte
  copyText(text);

  // Utilisation prioritaire du partage natif (Mobile / Web Share API)
  if (navigator.share && typeof navigator.share === "function") {
    navigator.share({
      title: "Jeu comptoir BHEVIA",
      text: text,
      url: shareURL
    }).catch((err) => {
      console.log("Partage natif annulé ou non disponible :", err);
    });
  } else {
    // Fallback Desktop / Navigateurs non compatibles
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareURL)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => copyTextFallback(text));
  } else {
    copyTextFallback(text);
  }
}

function copyTextFallback(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

renderIntro();