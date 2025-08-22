# Internationalization (i18n) Setup

This portfolio site now supports multiple languages with a clean URL structure and language selector.

## Features

- **Language Selector**: Dropdown in the navbar to switch between languages
- **URL Structure**: Clean URLs like `/es/` for Spanish and `/en/` for English
- **Automatic Redirects**: Root `/` automatically redirects to default language
- **SEO Friendly**: Proper `hreflang` attributes and meta tags
- **Responsive**: Language selector works on both desktop and mobile

## File Structure

```
src/
├── i18n/
│   ├── ui.ts          # Translation strings
│   ├── utils.ts       # Utility functions
│   └── detect.ts      # Language detection
├── layouts/
│   ├── es/            # Spanish layout
│   └── en/            # English layout
├── pages/
│   ├── es/            # Spanish pages
│   └── en/            # English pages
└── components/
    └── ui/
        └── LanguageSelector.astro
```

## Adding New Languages

1. **Add language to `src/i18n/ui.ts`**:
```typescript
export const languages = {
  es: 'Español',
  en: 'English',
  fr: 'Français', // New language
};
```

2. **Create layout**: `src/layouts/fr/Layout.astro`
3. **Create pages**: `src/pages/fr/index.astro`
4. **Add translations** in the `ui` object

## Adding New Translations

1. **Add key to Spanish translations**:
```typescript
'nav.newitem': 'Nuevo Elemento',
```

2. **Add key to English translations**:
```typescript
'nav.newitem': 'New Item',
```

3. **Use in components**:
```astro
---
import { useTranslations, getLangFromUrl } from '../../i18n/utils';
const currentLang = getLangFromUrl(Astro.url);
const t = useTranslations(currentLang);
---

<span>{t('nav.newitem')}</span>
```

## Usage in Components

```astro
---
import { useTranslations, getLangFromUrl } from '../../i18n/utils';

const currentLang = getLangFromUrl(Astro.url);
const t = useTranslations(currentLang);
---

<h1>{t('welcome.title')}</h1>
```

## Language Detection

The system automatically detects the current language from the URL and provides:
- Correct `lang` attribute on HTML
- Proper meta descriptions
- Language-specific titles
- `hreflang` links for SEO

## Installation

To complete the setup, install the official Astro i18n integration:

```bash
npm install @astrojs/i18n
```

Then update `astro.config.mjs` to include the integration for better routing support.

## Benefits

- **SEO**: Proper language indicators for search engines
- **UX**: Users can easily switch between languages
- **Maintainability**: Centralized translation management
- **Scalability**: Easy to add new languages and content
- **Performance**: No JavaScript required for language switching
