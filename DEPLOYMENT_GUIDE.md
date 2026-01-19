# Guide de Déploiement - Bilel Proposal

Ce guide vous explique comment déployer votre application Angular sur un serveur public.

## 📋 Préparation avant le déploiement

### 1. Vérifier que tout fonctionne localement

```bash
# Installer les dépendances
npm install

# Tester le build de production
npm run build

# Vérifier que le build fonctionne
npm run serve:ssr:bilel-proposal
```

### 2. Vérifier vos fichiers dans `public/assets/`
Assurez-vous d'avoir :
- ✅ `profile-photo.jpg` (ou .png)
- ✅ `Bilel-Chniti-CV.pdf`
- ✅ `Bilel-Chniti-Executive-Proposal.pdf`

---

## 🚀 Option 1 : Vercel (RECOMMANDÉ - Support SSR)

**Avantages** : Gratuit, support Angular SSR, déploiement automatique, CDN global

### Étapes :

#### A. Installer Vercel CLI
```bash
npm install -g vercel
```

#### B. Se connecter à Vercel
```bash
vercel login
```

#### C. Déployer
```bash
vercel
```

#### D. Suivre les instructions
- Link to existing project? **No**
- Project name? **bilel-proposal** (ou un nom de votre choix)
- Directory? **./** (appuyer sur Entrée)
- Override settings? **No**

#### E. Configuration automatique
Vercel détectera automatiquement Angular et configurera le déploiement.

#### F. Obtenir votre lien
Après le déploiement, vous recevrez :
- ✅ **Production URL** : `https://bilel-proposal.vercel.app`
- ✅ **Preview URL** : Pour chaque push Git

### Déploiements futurs :
```bash
vercel --prod
```

---

## 🌐 Option 2 : Netlify

**Avantages** : Gratuit, interface simple, déploiement continu

### Étapes :

#### A. Installer Netlify CLI
```bash
npm install -g netlify-cli
```

#### B. Se connecter
```bash
netlify login
```

#### C. Créer un fichier `netlify.toml` à la racine :
```toml
[build]
  command = "npm run build"
  publish = "dist/bilel-proposal/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### D. Déployer
```bash
netlify deploy --prod
```

#### E. Suivre les instructions
Netlify vous donnera votre URL : `https://votre-site.netlify.app`

---

## 📦 Option 3 : GitHub Pages (Statique uniquement)

**Note** : Nécessite de modifier la configuration pour un build statique (sans SSR)

### Étapes :

#### A. Modifier `angular.json` (temporairement) :
Changez `outputMode: "server"` en `outputMode: "browser"` pour un build statique.

#### B. Créer un fichier `.github/workflows/deploy.yml` :
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/bilel-proposal/browser
```

#### C. Push sur GitHub
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

#### D. Activer GitHub Pages
1. Aller dans Settings > Pages
2. Source : `gh-pages` branch
3. Votre site sera disponible : `https://votre-username.github.io/bilel-proposal`

---

## 🔥 Option 4 : Firebase Hosting

### Étapes :

#### A. Installer Firebase CLI
```bash
npm install -g firebase-tools
```

#### B. Se connecter
```bash
firebase login
```

#### C. Initialiser Firebase
```bash
firebase init hosting
```

Options :
- What do you want to use as your public directory? **dist/bilel-proposal/browser**
- Configure as a single-page app? **Yes**
- Set up automatic builds and deploys with GitHub? **No**

#### D. Créer `firebase.json` (si nécessaire) :
```json
{
  "hosting": {
    "public": "dist/bilel-proposal/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### E. Déployer
```bash
npm run build
firebase deploy --only hosting
```

Votre site sera disponible : `https://votre-projet.web.app`

---

## ✅ Vérifications post-déploiement

Après le déploiement, vérifiez :

1. ✅ La photo de profil s'affiche
2. ✅ Les boutons de téléchargement fonctionnent
3. ✅ La navigation fonctionne
4. ✅ Le design responsive fonctionne
5. ✅ Les liens fonctionnent (email, LinkedIn)

---

## 🔗 Résumé des liens obtenus

Selon la plateforme choisie :
- **Vercel** : `https://bilel-proposal.vercel.app`
- **Netlify** : `https://votre-site.netlify.app`
- **GitHub Pages** : `https://votre-username.github.io/bilel-proposal`
- **Firebase** : `https://votre-projet.web.app`

---

## 💡 Recommandation

**Pour votre cas (Angular SSR)** : **Vercel** est le meilleur choix car :
- ✅ Support natif du SSR Angular
- ✅ Configuration automatique
- ✅ Performance optimale
- ✅ Gratuit avec bonnes limites
- ✅ Déploiement en 2 minutes

---

## ❓ Besoin d'aide ?

Si vous rencontrez des problèmes, vérifiez :
1. Les fichiers dans `public/assets/` sont bien présents
2. Le build de production fonctionne localement
3. Vos fichiers PDF sont accessibles

