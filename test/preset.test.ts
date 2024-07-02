import { createGenerator, escapeSelector } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { presetEmmet } from '../src/index.ts'

const uno = createGenerator({
  presets: [presetEmmet()],
})

describe('test generate', () => {
  it('fz-16px', async () => {
    const { css } = await uno.generate('fz-16px', {
      preflights: false,
    })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .fz-16px{font-size:16px;}"
    `)
  })
  it('fsz-16px', async () => {
    const { css } = await uno.generate('fsz-16px', {
      preflights: false,
    })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .fsz-16px{font-size:16px;}"
    `)
  })
  it('fsz:16px', async () => {
    const { css } = await uno.generate('fsz-16px', {
      preflights: false,
    })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .fsz-16px{font-size:16px;}"
    `)
  })
  it('ai:c', async () => {
    const { css } = await uno.generate('ai:c', {
      preflights: false,
    })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .ai\\:c{align-items:center;}"
    `)
  })
})
