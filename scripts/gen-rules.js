import EmmetCssSnippets from './emmet-snippet/css.json' assert { type: 'json' }
import EmmetCssCheatSheet from './emmet-snippet/cheat-sheet.json' assert { type: 'json' }
import fs from 'node:fs'
function genTemplateStringExpressionStr(content) {
  return '${' + content + '}'
}
function genTemplateStringStr(content) {
  return '`' + content + '`'
}
const result = [
  ...Object.keys(EmmetCssSnippets)
    .map((snippetKey) => {
      const keys = snippetKey.split('|')
      const content = EmmetCssSnippets[snippetKey]
      return keys.map((key) => {
        // TODO: {"bd": "border:${1:1px} ${2:solid} ${3:#000}"}
        if (content.includes('${')) {
          const result = ''
          // return `[/^${key}(:|-)(.*)$/,(match) => ${result}]`
          return undefined
        }

        // TODO: {"ols": "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset"}
        // I don't know how to handle this rule
        // Use EmmetCssCheatSheet to generate rules
        //
        if (content.includes('|')) {
          // const [cssProperty, cssValue] = content.split(':')
          // const cssValues = cssVal.split('|')
          // const result = genTemplateString(`${cssProperty}:${genTemplateStringExpression(
          //   `?? match[2]`
          // )}`)
          // return `[/^${key}(:|-)(.*)$/,(match) => ${result}]`

          return undefined
        }

        // {"p": "padding"}
        if (!content.includes(':')) {
          const result = `({"${content}":${genTemplateStringStr(genTemplateStringExpressionStr('match[2]'))}})`
          return `[/^${key}(:|-)(.*)$/,(match) => ${result}]`
        }

        // unknown rule
        return undefined
      })
    })
    .flat(),
  ...Object.keys(EmmetCssCheatSheet).map((cheatSheetKey) => {
    const content = EmmetCssCheatSheet[cheatSheetKey]
    const [cssProp, value] = content.split(':').map((i) => i.trim())
    if (['|', '@', '${', '\\', '!'].every((i) => !content.includes(i))) {
      return `[/^${cheatSheetKey}$/,() => ({"${cssProp}": \`${value.replace(';', '')}\`})]`
    }
    if (
      content.includes('|') &&
      Object.keys(EmmetCssSnippets).every((cssSnippet) => cssSnippet.split('|').every((key) => key !== cheatSheetKey))
    ) {
      const [cssProp, value] = content.split(':').map((i) => i.trim())
      return `[/^${cheatSheetKey}-(.*)$/,(match) => ({"${cssProp}": \`${value
        .replace(';', '')
        .replace('|', '${match[1]}')}\`})]`
    }
  }),
].filter(Boolean)
fs.writeFileSync('src/rules.ts', `export default [\n${result.map((i) => i + ',').join('\n')}\n]`)
