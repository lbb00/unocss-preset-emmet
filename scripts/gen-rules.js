import EmmetCssSnippets from './emmet-css-snippet.json' assert { type: 'json' }
import fs from 'node:fs'

const result = Object.keys(EmmetCssSnippets)
  .map((key) => {
    if (key.includes('@')) return
    if (EmmetCssSnippets[key].includes('${')) return
    if (EmmetCssSnippets[key].includes('\\')) return
    if (!EmmetCssSnippets[key].includes(':')) return
    const cssProp = EmmetCssSnippets[key].split(':')[0]
    const value = EmmetCssSnippets[key].split(':')[1]?.replace(';', '')
    if (EmmetCssSnippets[key].includes('|')) {
      return `[/^${key}-(.*)$/,(match) => ({"${cssProp}": \`${value.replace('|', '${match[1]}')}\`})]`
    }

    return `[/^${key}$/,() => ({"${cssProp}": \`${value}\`})]`
  })
  .filter(Boolean)

result.map((i) => console.log(i))
fs.writeFileSync('src/rules.ts', `export default [\n${result.map((i) => i + ',').join('\n')}\n]`)
