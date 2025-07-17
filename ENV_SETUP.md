# Configuration des Variables d'Environnement

## Variables nécessaires

### EmailJS
```
VITE_EMAILJS_SERVICE_ID=votre_service_id_ici
VITE_EMAILJS_TEMPLATE_ID=votre_template_id_ici
VITE_EMAILJS_PUBLIC_KEY=votre_public_key_ici
```

### reCAPTCHA
```
VITE_RECAPTCHA_SITE_KEY=votre_site_key_ici
```

## Configuration locale (développement)

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez les variables ci-dessus avec vos vraies clés
3. Le fichier `.env.local` est déjà ignoré par Git

## Configuration Vercel (production)

1. Allez dans votre dashboard Vercel
2. Sélectionnez votre projet
3. Allez dans "Settings" > "Environment Variables"
4. Ajoutez chaque variable avec sa valeur correspondante
5. Redéployez votre projet

## Obtention des clés

### EmailJS
1. Allez sur https://www.emailjs.com/
2. Créez un compte ou connectez-vous
3. Créez un service email (Gmail, Outlook, etc.)
4. Créez un template d'email
5. Copiez les IDs et la clé publique

### reCAPTCHA
1. Allez sur https://www.google.com/recaptcha/admin
2. Créez un nouveau site ou sélectionnez un existant
3. Choisissez reCAPTCHA v2 "Je ne suis pas un robot"
4. Ajoutez votre domaine : `lucasfanner-portfolio.vercel.app`
5. Copiez la clé du site 