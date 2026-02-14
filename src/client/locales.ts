import type { Locale } from './types'

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
} from '../locales'

export {
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
  defaultItITLocale,
}

export const defaultLocales: Record<string, Locale> = {
  // 英语
  'en-US': defaultEnLocale,
  'en': defaultEnLocale,

  // 俄语
  'ru-RU': defaultRuLocale,
  'ru': defaultRuLocale,

  // 简体中文
  'zh-CN': defaultZhCNLocale,
  'zh-Hans': defaultZhCNLocale,
  'zh': defaultZhCNLocale,

  // 繁体中文
  'zh-TW': defaultZhTWLocale,
  'zh-Hant': defaultZhTWLocale,

  // 日语
  'ja-JP': defaultJaJPLocale,
  'ja': defaultJaJPLocale,

  // 韩语
  'ko-KR': defaultKoKRLocale,
  'ko': defaultKoKRLocale,

  // 西班牙语
  'es-ES': defaultEsESLocale,
  'es': defaultEsESLocale,

  // 葡萄牙语
  'pt-BR': defaultPtBRLocale,
  'pt': defaultPtBRLocale,

  // 德语
  'de-DE': defaultDeDELocale,
  'de': defaultDeDELocale,

  // 法语
  'fr-FR': defaultFrFRLocale,
  'fr': defaultFrFRLocale,

  // 波兰语
  'pl-PL': defaultPlPLLocale,
  'pl': defaultPlPLLocale,

  // 土耳其语
  'tr-TR': defaultTrTRLocale,
  'tr': defaultTrTRLocale,

  // 意大利语
  'it-IT': defaultItITLocale,
  'it': defaultItITLocale,
}