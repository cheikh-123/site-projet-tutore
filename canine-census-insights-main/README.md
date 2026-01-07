# Site Projet Tutoré

## 🚀 Comment lancer le site localement

Pour que vos collaborateurs puissent ouvrir et travailler sur le site, suivez ces étapes :

### Prérequis
- Node.js installé (version 18 ou supérieure recommandée)
- npm ou yarn installé

### Instructions

```sh
# Étape 1: Cloner le dépôt
git clone https://github.com/cheikh-123/site-projet-tutore.git

# Étape 2: Aller dans le dossier du projet
cd site-projet-tutore/canine-census-insights-main

# Étape 3: Installer les dépendances
npm install

# Étape 4: Lancer le serveur de développement
npm run dev
```

Une fois le serveur lancé, le site sera accessible à l'adresse affichée dans le terminal (généralement `http://localhost:5173`).

### Autres commandes utiles

```sh
# Construire le projet pour la production
npm run build

# Prévisualiser la version de production
npm run preview

# Vérifier le code avec ESLint
npm run lint
```

## 📝 Contribution

Pour contribuer au projet :

1. Créez une nouvelle branche : `git checkout -b ma-nouvelle-fonctionnalite`
2. Faites vos modifications
3. Committez vos changements : `git commit -m "Ajout d'une nouvelle fonctionnalité"`
4. Poussez vers GitHub : `git push origin ma-nouvelle-fonctionnalite`
5. Créez une Pull Request sur GitHub

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🛠️ Technologies utilisées

Ce projet utilise :
- **Vite** - Build tool et serveur de développement
- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI réutilisables
- **React Router** - Routage pour les applications React

## 📦 Structure du projet

```
canine-census-insights-main/
├── src/
│   ├── components/     # Composants React
│   ├── pages/          # Pages de l'application
│   ├── hooks/          # Hooks personnalisés
│   └── lib/            # Utilitaires
├── public/             # Fichiers statiques
└── package.json        # Dépendances du projet
```
