import { createGenerator, escapeSelector } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { presetEmmet } from '../src/index.ts'

const uno = createGenerator({
  presets: [presetEmmet()],
})

describe('test', () => {
  it('foo', async () => {
    const { css } = await uno.generate(['fz-16px', 'ai:c'].join(' '), {
      preflights: false,
    })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .fz-16px{font-size:16px;}
      .ai\\:c{align-items:center;}"
    `)
  })
})
