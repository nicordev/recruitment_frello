
# Créer une interface graphique qui permet de gérer des services externes LTI.

Technologies au choix parmi les suivantes:
  - au niveau serveur: symphony ou NodeJS
  - au niveau front: twig ou react.js
  - au niveau bdd: mongodb

Commencer par forker ce projet sur votre compte github puis le cloner en local, ensuite:
  - Installer mongodb
  - Installer nodejs
  - Configurer les informations BDD
  - npm install
  - Lancer le projet node index.js
 
Le projet va créer une base de données et les tables. Vous n'avez pas besoin de créer de vraie inter-connexion LTI.

Dans le repertoire 'LTI' se trouve un dump de données.

Dans le repertoire 'mongoexport', se trouve les mêmes données exportées avec la commande mongoexport.

Le but est de créer un projet capable d'administrer ces tables:
  - idtokens => visualisation des utilisateurs connectés (durée de vie du token une journée) par platforme, un lien vers le contexttoken
  - platforms => ajouter, modifier, supprimer une platform, un lien vers les utilisateurs connectés (donc vers un tableau d'idtokens)

Maintenant à vous de coder et d'organiser le projet comme vous le souhaitez !!!

# Montrer votre maitrise des design patterns
A l'aide du "Factory method pattern" générer des données pour remplir la base au démarrage de l'application

# autres infos

Pour les curieux:
  - https://github.com/Cvmcosta/ltijs Pour générer une fausse connexion au service:

Si vous trouvez des bugs ou des difficultés ouvrez une issue github ;).

Lorsque vous êtes satisfait de votre code envoyez-moi l'url de votre github @ jean-sebastien@frello.fr.

Les critères de notation sont:
  - La clarté du code (si le code est suffisamment clair pas besoin de le commenter)
  - La documentation (readme à la racine)
  - La facilité pour lancer l'application
  - L'organisation du code
  - Explication pour vos choix d'implémentation à inclure dans le readme
