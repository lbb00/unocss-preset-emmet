import { definePreset } from '@unocss/core'
import rules from './rules'

export const presetEmmet = definePreset(() => {
  return {
    name: 'unocss-preset-emmet',
    rules,
  }
})
