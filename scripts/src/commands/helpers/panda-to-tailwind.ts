import { Match } from 'effect'
import { twMerge } from 'tailwind-merge'
import { JsxAttribute, JsxExpression, Node, Project } from 'ts-morph'

const isStyleNode = (tagName: string) =>
  ['Box', 'Container', 'Flex', 'Stack', 'HStack'].includes(tagName)

const isStyleAtrtribute = (attribute: JsxAttribute) =>
  [
    'alignItems',
    'bottom',
    'bg',
    'color',
    'direction',
    'flex',
    'fontWeight',
    'gap',
    'h',
    'height',
    'justifyContent',
    'left',
    'm',
    'maxW',
    'mb',
    'me',
    'ms',
    'mt',
    'mx',
    'my',
    'p',
    'pb',
    'pe',
    'position',
    'ps',
    'pt',
    'px',
    'py',
    'right',
    'textAlign',
    'top',
    'width',
  ].includes(attribute.getNameNode().getText())

export const parse = (code: string) => {
  const project = new Project({
    useInMemoryFileSystem: true,
  })
  const sourceFile = project.createSourceFile('File.tsx', code)
  sourceFile.forEachDescendant((node) => {
    if (Node.isJsxClosingElement(node)) {
      if (isStyleNode(node.getTagNameNode().getText())) {
        node.getTagNameNode().replaceWithText('div')
      }
    }

    if (Node.isJsxSelfClosingElement(node) || Node.isJsxOpeningElement(node)) {
      const nodeClassNames = Match.value(node.getTagNameNode().getText()).pipe(
        Match.when('Flex', () => 'flex'),
        Match.when('Stack', () => 'flex flex-col gap-2.5'),
        Match.when('HStack', () => 'flex gap-2.5'),
        Match.orElse(() => ''),
      )

      if (isStyleNode(node.getTagNameNode().getText())) {
        node.getTagNameNode().replaceWithText('div')
      }

      const attributeClassNames = node
        .getAttributes()
        .filter(Node.isJsxAttribute)
        .filter(isStyleAtrtribute)
        .map((attribute) => {
          const prop = attribute.getInitializerOrThrow()
          const propertyName = attribute.getNameNode().getText()

          const className = Match.value(prop).pipe(
            Match.when(JsxAttribute.isJsxExpression, (node) =>
              Match.value(node.getExpression()).pipe(
                Match.when(JsxExpression.isObjectLiteralExpression, (node) =>
                  node
                    .getProperties()
                    .map(
                      (property) =>
                        Match.value(property).pipe(
                          Match.when(JsxExpression.isPropertyAssignment, (node) =>
                            Match.value(node.getInitializerOrThrow()).pipe(
                              Match.when(JsxExpression.isStringLiteral, (literal) => {
                                return stylePropToClassName(
                                  propertyName,
                                  literal.getLiteralValue(),
                                  node.getNameNode().getText(),
                                )
                              }),
                              Match.orElse(() => ''),
                            ),
                          ),
                          Match.orElse(() => ''),
                        ),
                      Match.orElse(() => ''),
                    )
                    .join(' '),
                ),
                Match.orElse(() => {
                  console.log('property is other', propertyName)
                  return ''
                }),
              ),
            ),
            Match.when(JsxExpression.isStringLiteral, (node) =>
              stylePropToClassName(propertyName, node.getLiteralValue()),
            ),
            Match.orElse(() => {
              console.log('property is other', propertyName)
            }),
          )

          attribute.remove()
          return className
        })
        .join(' ')

      if (nodeClassNames || attributeClassNames) {
        node.insertAttribute(0, {
          name: 'className',
          initializer: `"${twMerge(nodeClassNames, attributeClassNames)}"`,
        })
      }
    }
    if (Node.isImportDeclaration(node)) {
      if (node.getModuleSpecifierValue().startsWith('styled-system')) {
        node.remove()
      }
    }
  })

  return sourceFile.getText()
}

const stylePropToClassName = (propertyName: string, value: string, prefix?: string) => {
  const result = Match.value(propertyName).pipe(
    Match.when('direction', () =>
      Match.value(value).pipe(
        Match.when('row', () => 'flex-row'),
        Match.when('column', () => 'flex-col'),
        Match.orElse(() => value),
      ),
    ),
    Match.when('alignItems', () =>
      Match.value(value).pipe(
        Match.when('flex-start', () => 'items-start'),
        Match.when('flex-end', () => 'items-end'),
        Match.when('center', () => 'items-center'),
        Match.when('baseline', () => 'items-baseline'),
        Match.when('stretch', () => 'items-stretch'),
        Match.orElse(() => value),
      ),
    ),
    Match.when('justifyContent', () =>
      Match.value(value).pipe(
        Match.when('space-between', () => 'justify-between'),
        Match.orElse(() => value),
      ),
    ),
    Match.when('fontWeight', () => ['font', value].join('-')),
    Match.when('textAlign', () => ['text', value].join('-')),
    Match.when('width', () => ['w', value].join('-')),
    Match.when('height', () => ['h', value].join('-')),
    Match.when('h', () => ['h', value].join('-')),
    Match.when('maxW', () => ['max-w', value].join('-')),
    Match.when('flex', () => ['flex', value].join('-')),
    Match.when('color', () => ['text', value.replaceAll('.', '-')].join('-')),
    Match.when('bg', () => ['bg', value.replaceAll('.', '-')].join('-')),
    Match.when('position', () => value),

    Match.orElse(() => [propertyName, value].join('-')),
  )

  return prefix && prefix !== 'base' ? `${prefix}:${result}` : result
}
