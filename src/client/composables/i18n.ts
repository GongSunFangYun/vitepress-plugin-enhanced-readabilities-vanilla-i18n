import { createI18n } from '@nolebase/ui'

import { InjectionKey } from '../constants'
import {
    defaultEnLocale,
    defaultLocales,
    defaultZhCNLocale,
    defaultZhTWLocale,
    defaultJaJPLocale,
    defaultKoKRLocale,
    defaultRuLocale,
    defaultEsESLocale,
    defaultPtBRLocale,
    defaultDeDELocale,
    defaultFrFRLocale,
    defaultPlPLLocale,
    defaultTrTRLocale,
    defaultItITLocale
} from '../locales'

export const useI18n = createI18n(
    InjectionKey,
    defaultLocales,
    defaultEnLocale
)