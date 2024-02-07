import { TreeView as ArkTreeView } from '@ark-ui/react/tree-view'
import { treeView } from 'styled-system/recipes'

export const TreeView = () => {
  const styles = treeView()
  return (
    <ArkTreeView.Root className={styles.root}>
      <ArkTreeView.Label className={styles.label}>My Documents</ArkTreeView.Label>
      <ArkTreeView.Tree className={styles.tree}>
        <ArkTreeView.Branch id="node_modules" depth={1}>
          <ArkTreeView.BranchControl id="node_modules" depth={1}>
            <ArkTreeView.BranchText id="node_modules" depth={1}>
              Item 1
            </ArkTreeView.BranchText>
          </ArkTreeView.BranchControl>

          <ArkTreeView.BranchContent id="node_modules" depth={1}>
            <ArkTreeView.Item id="node_modules/zag-js" depth={2}>
              Item 1.1
            </ArkTreeView.Item>
          </ArkTreeView.BranchContent>
        </ArkTreeView.Branch>
        <ArkTreeView.Item id="1" depth={1} className={styles.item}>
          Item 2
        </ArkTreeView.Item>
        {/* <ArkTreeView.Branch id="node_modules" depth={1}>
          <ArkTreeView.BranchControl id="node_modules" depth={1}>
            <ArkTreeView.BranchText id="node_modules" depth={1}>
              📂 node_modules
            </ArkTreeView.BranchText>
          </ArkTreeView.BranchControl>

          <ArkTreeView.BranchContent id="node_modules" depth={1}>
            <ArkTreeView.Item id="node_modules/zag-js" depth={2}>
              📄 zag-js
            </ArkTreeView.Item>
            <ArkTreeView.Item id="node_modules/pandacss" depth={2}>
              📄 panda
            </ArkTreeView.Item>

            <ArkTreeView.Branch id="node_modules/@types" depth={2}>
              <ArkTreeView.BranchControl id="node_modules/@types" depth={2}>
                <ArkTreeView.BranchText id="node_modules/@types" depth={2}>
                  📂 @types
                </ArkTreeView.BranchText>
              </ArkTreeView.BranchControl>

              <ArkTreeView.BranchContent id="node_modules/@types" depth={2}>
                <ArkTreeView.Item id="node_modules/@types/react" depth={3}>
                  📄 react
                </ArkTreeView.Item>
                <ArkTreeView.Item id="node_modules/@types/react-dom" depth={3}>
                  📄 react-dom
                </ArkTreeView.Item>
              </ArkTreeView.BranchContent>
            </ArkTreeView.Branch>
          </ArkTreeView.BranchContent>
        </ArkTreeView.Branch>

        <ArkTreeView.Branch id="src" depth={1}>
          <ArkTreeView.BranchControl id="src" depth={1}>
            <ArkTreeView.BranchText id="src" depth={1}>
              📂 src
            </ArkTreeView.BranchText>
          </ArkTreeView.BranchControl>

          <ArkTreeView.BranchContent id="src" depth={1}>
            <ArkTreeView.Item id="src/app.tsx" depth={2}>
              📄 app.tsx
            </ArkTreeView.Item>
            <ArkTreeView.Item id="src/index.ts" depth={2}>
              📄 index.ts
            </ArkTreeView.Item>
          </ArkTreeView.BranchContent>
        </ArkTreeView.Branch>

        <ArkTreeView.Item id="panda.config" depth={1}>
          📄 panda.config.ts
        </ArkTreeView.Item>
        <ArkTreeView.Item id="package.json" depth={1}>
          📄 package.json
        </ArkTreeView.Item>
        <ArkTreeView.Item id="renovate.json" depth={1}>
          📄 renovate.json
        </ArkTreeView.Item>
        <ArkTreeView.Item id="readme.md" depth={1}>
          📄 README.md
        </ArkTreeView.Item> */}
      </ArkTreeView.Tree>
    </ArkTreeView.Root>
  )
}
