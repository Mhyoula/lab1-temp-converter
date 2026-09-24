SEG3502 — Laboratoire 1

Introduction à Angular : calculatrice

Marie Youla  •  Numéro étudiant : 300388603

Dépôt GitHub : https://github.com/Mhyoula/lab1-temp-converter

1. Objectif et travail réalisé

J’ai développé une application Angular qui effectue les quatre opérations arithmétiques de base sur deux nombres : addition, soustraction, multiplication et division. L’utilisateur saisit les deux valeurs, puis clique sur un bouton d’opération. Le résultat apparaît sous les boutons, sans rechargement de la page.

Le composant calculator regroupe l’interface (calculator.html), la logique de calcul (calculator.ts) et les styles (calculator.css). FormsModule et ngModel relient les champs aux valeurs du composant. Les clics appellent la méthode calculer(), puis les signaux resultat et erreur actualisent l’affichage. Le composant principal App affiche la calculatrice.

L’application accepte les nombres négatifs et décimaux. Elle signale les champs vides, la division par zéro et les résultats non finis. Toute modification d’un nombre efface le résultat précédent. La présentation utilise une carte centrée, des boutons pastel et une zone de résultat verte ; elle s’adapte aux petits écrans.

2. Installation et exécution

Prérequis : Git, Node.js 22.22.3 ou une version ultérieure de la branche 22, et npm. Node.js 22.23.0 est utilisé dans l’environnement de développement. Angular CLI est fourni par les dépendances du projet.

Dans un terminal, récupérer le projet et installer ses dépendances :

git clone https://github.com/Mhyoula/lab1-temp-converter.git

cd lab1-temp-converter

npm ci

Démarrer ensuite le serveur de développement :

npm start

Ouvrir http://localhost:4200/ dans un navigateur. Pour arrêter le serveur, appuyer sur Ctrl+C dans le terminal.

3. Vérification

Les 14 tests automatisés passent. Ils couvrent notamment les quatre opérations, les nombres négatifs, les champs vides, la division par zéro, un résultat non fini et l’interaction entre les champs, les boutons et le résultat.

npm test -- --watch=false

La compilation de production a également été vérifiée avec :

npm run build

4. Captures d’écran de l’application

Les captures suivantes proviennent de l’exécution locale du projet.

Figure 1 — Addition : les valeurs 10 et 20 produisent le résultat 30.

4. Captures d’écran — suite

Figure 2 — Division de 8 par 0 : un message explicatif est affiché et aucun résultat numérique n’est présenté.
