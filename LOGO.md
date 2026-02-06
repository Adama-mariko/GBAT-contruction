# Logo GBAT Construction

## 🏗️ Description du Logo

Le logo de GBAT Construction a été recréé fidèlement en CSS pur pour s'intégrer parfaitement au site web. Il représente :

### Éléments Visuels
- **Structure en 3D** : Deux faces d'un bâtiment en perspective
- **Côté gauche rouge** : Représente la solidité et la passion
- **Côté droit bleu** : Symbolise la confiance et la technologie
- **Effet de profondeur** : Perspective 3D avec rotations et ombres
- **Point rouge** : Accent visuel qui complète le design

### Couleurs Utilisées
- **Rouge principal** : #e53e3e (avec dégradés vers #ff4757)
- **Bleu principal** : #3182ce (avec dégradés vers #4dabf7)
- **Effets** : Dégradés, ombres et reflets pour le réalisme

## 🎨 Implémentation Technique

### Composant React
Le logo est implémenté comme un composant React réutilisable (`src/components/Logo.tsx`) avec :
- Props pour la taille (small, medium, large)
- Option d'affichage du texte
- Classes CSS personnalisables
- Animations au survol

### Styles CSS
- **Perspective 3D** : `transform: rotateY(-20deg) rotateX(8deg)`
- **Animations fluides** : Transitions CSS avec `cubic-bezier`
- **Responsive** : Adaptation automatique aux différentes tailles d'écran
- **Effets visuels** : Ombres, dégradés et reflets

## 📱 Utilisation

### Dans le Header
```tsx
<Logo size="medium" showText={true} />
```

### Dans le Footer
```tsx
<Logo size="medium" showText={true} />
```

### Versions disponibles
- **Small** : 32px × 32px (mobile)
- **Medium** : 48px × 48px (desktop)
- **Large** : 64px × 64px (hero sections)

## 🔧 Personnalisation

### Modifier les couleurs
Les couleurs sont définies dans les variables CSS :
```css
--primary-color: #e53e3e;
--secondary-color: #3182ce;
```

### Ajuster la perspective
Modifier les valeurs de rotation dans `.building-structure` :
```css
transform: rotateY(-20deg) rotateX(8deg);
```

### Animations
Les effets hover peuvent être personnalisés dans les classes `.logo-container:hover`

## 📄 Fichiers Associés

- `src/components/Logo.tsx` - Composant React
- `src/App.css` - Styles CSS du logo
- `public/favicon.svg` - Version SVG pour favicon
- `public/favicon.ico` - Version ICO pour compatibilité

## 🎯 Avantages

1. **Performance** : CSS pur, pas d'images à charger
2. **Scalabilité** : Vectoriel, net à toutes les tailles
3. **Personnalisable** : Couleurs et animations modifiables
4. **Responsive** : Adaptation automatique
5. **Accessible** : Compatible avec tous les navigateurs

---

*Logo créé pour GBAT Construction - Version 1.0*