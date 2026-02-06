# Guide de Déploiement - GBAT Construction

## 🚀 Options de Déploiement

### 1. Netlify (Recommandé)
```bash
# Build le projet
npm run build

# Déployer le dossier dist/ sur Netlify
# Glisser-déposer le dossier dist dans l'interface Netlify
# Domaine suggéré : gbatconstruction.netlify.app
```

### 2. Vercel
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
# Domaine suggéré : gbatconstruction.vercel.app
```

### 3. Hébergement Web Ivoirien
```bash
# Build le projet
npm run build

# Uploader le contenu du dossier dist/ vers votre hébergeur ivoirien
# Configurer le domaine gbatconstruction.online
```

## ⚙️ Configuration du Serveur

### Apache (.htaccess)
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🔧 Variables d'Environnement

Créer un fichier `.env.production` :
```env
VITE_COMPANY_NAME="GBAT Construction"
VITE_COMPANY_EMAIL="infos@gbatconstruction.online"
VITE_COMPANY_PHONE_1="+225 27 22 40 64 92"
VITE_COMPANY_PHONE_2="+225 07 98 44 40 00"
VITE_WEBSITE_URL="https://gbatconstruction.online"
```

## 📊 Optimisations de Performance

### 1. Compression
- Activer la compression gzip/brotli sur le serveur
- Les fichiers sont déjà minifiés par Vite

### 2. Cache
```nginx
# Cache des assets statiques
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. CDN
- Utiliser un CDN pour les images
- Configurer un CDN pour les assets statiques

## 🔍 SEO et Analytics

### Google Analytics
Ajouter dans `index.html` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
- Vérifier la propriété du site
- Soumettre le sitemap.xml

## 📱 PWA (Optionnel)

Pour transformer en Progressive Web App :
```bash
npm install --save-dev vite-plugin-pwa
```

## 🔒 Sécurité

### Headers de Sécurité
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
```

## 📞 Support

Pour toute assistance technique :
- Email : infos@gbatconstruction.online
- Téléphones : +225 27 22 40 64 92 | +225 07 98 44 40 00
- Adresse : Abidjan, Cocody Angré Château, Cité Star 16 – Villa 96

---

*Guide créé pour GBAT Construction - Version 1.0*