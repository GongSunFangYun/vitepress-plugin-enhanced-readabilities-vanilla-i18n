# Nolebase Enhanced Readabilities - 13 Languages Edition

> A fork of [@nolebase/vitepress-plugin-enhanced-readabilities](https://github.com/nolebase/integrations/tree/main/packages/vitepress-plugin-enhanced-readabilities) with **full 13-language support**!

## Features

- **Spotlight** - Highlight the line where your mouse hovers
- **Layout Switch** - Adjust sidebar width, content width, and page layout
- **Typography Controls** - Font size and line height adjustment
- **13 Languages** - Because 3 is not enough!

## 🗣️ Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English | `en` | SUPPORT |
| Russian | `ru-RU` | SUPPORT |
| Simplified Chinese | `zh-CN` | SUPPORT |
| Traditional Chinese | `zh-TW` | SUPPORT |
| Japanese | `ja-JP` | SUPPORT |
| Korean | `ko-KR` | SUPPORT |
| Spanish | `es-ES` | SUPPORT |
| Portuguese | `pt-BR` | SUPPORT |
| German | `de-DE` | SUPPORT |
| French | `fr-FR` | SUPPORT |
| Polish | `pl-PL` | SUPPORT |
| Turkish | `tr-TR` | SUPPORT |
| Italian | `it-IT` | SUPPORT |

## Why This Fork?

The original plugin only supports **3 languages** (English, Russian, Simplified Chinese). After spending **3 days** digging through node_modules, I discovered it doesn't actually use VitePress's i18n system as advertised. 

So I added the missing 10 languages myself. You're welcome.

## Usage

```javascript
import {
  NolebaseEnhancedReadabilitiesPlugin,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
  InjectionKey
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

// All 13 languages are ready to use!
import {
  defaultEnLocale,
  defaultRuLocale,
  defaultZhCNLocale,
  defaultZhTWLocale,
  defaultJaJPLocale,
  defaultKoKRLocale,
  defaultEsESLocale,
  defaultPtBRLocale,
  defaultDeDELocale,
  defaultFrFRLocale,
  defaultPlPLLocale,
  defaultTrTRLocale,
  defaultItITLocale
} from '@nolebase/vitepress-plugin-enhanced-readabilities/locales'

// In your VitePress theme
export default {
  enhanceApp({ app }) {
    app.provide(InjectionKey, {
      layoutSwitch: { enable: true },
      spotlight: { enable: true },
      locales: {
        'en': defaultEnLocale,
        'ru-RU': defaultRuLocale,
        'zh-CN': defaultZhCNLocale,
        'zh-TW': defaultZhTWLocale,
        'ja-JP': defaultJaJPLocale,
        'ko-KR': defaultKoKRLocale,
        'es-ES': defaultEsESLocale,
        'pt-BR': defaultPtBRLocale,
        'de-DE': defaultDeDELocale,
        'fr-FR': defaultFrFRLocale,
        'pl-PL': defaultPlPLLocale,
        'tr-TR': defaultTrTRLocale,
        'it-IT': defaultItITLocale
      }
    })
  }
}
```

## Why 13 Languages?

Because I could. And because the original plugin's "supports VitePress i18n" claim was a lie. 

## License

MIT (but I'm never touching i18n again)

---

**Made with** Coffee and **3 days of suffering**