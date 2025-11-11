# Park UI: Framework-Specific Patterns

This guide covers advanced patterns, utilities, and implementation details specific to each framework.

## Icon Imports

When using icons from Lucide in examples, follow these framework-specific import patterns:

### React Icon Imports

```tsx
import { XIcon } from "lucide-react"

// Usage
;<TagsInput.ItemDeleteTrigger>
  <XIcon />
</TagsInput.ItemDeleteTrigger>
```

### Solid Icon Imports

```tsx
import { XIcon } from "lucide-solid"

// Usage
;<TagsInput.ItemDeleteTrigger>
  <XIcon />
</TagsInput.ItemDeleteTrigger>
```

### Vue Icon Imports

```vue
<script setup lang="ts">
import { XIcon } from "lucide-vue-next"
</script>

<template>
  <TagsInput.ItemDeleteTrigger>
    <XIcon />
  </TagsInput.ItemDeleteTrigger>
</template>
```

### Svelte Icon Imports

```svelte
<script lang="ts">
  import { XIcon } from 'lucide-svelte'
</script>

<TagsInput.ItemDeleteTrigger>
  <XIcon />
</TagsInput.ItemDeleteTrigger>
```

**Icon Naming Convention:**

- Always import icons with the `Icon` suffix (e.g., `XIcon`, `CheckIcon`, `ChevronDownIcon`)
- Use the full icon name directly from Lucide (don't rename with `as`)
- This maintains consistency across all framework examples

**Icon Usage:**

Icons are used as children or props in various components:

```tsx
// React - Button with icon
import { PhoneIcon, SendIcon } from "lucide-react"
import { Button } from "@/components/ui"
;<Button>
  <SendIcon />
  Send
</Button>
;<Button variant='outline'>
  Call us <PhoneIcon />
</Button>

// React - IconButton
import { SendIcon } from "lucide-react"
import { IconButton } from "@/components/ui"
;<IconButton aria-label='Send message'>
  <SendIcon />
</IconButton>

// React - Badge with icon
import { StarIcon } from "lucide-react"
import { Badge } from "@/components/ui"
;<Badge variant='solid' colorPalette='blue'>
  <StarIcon /> New
</Badge>

// React - Icon component wrapper
import { HeartIcon } from "lucide-react"
import { Icon } from "@/components/ui"
;<Icon size='lg' color='colorPalette.solid.bg'>
  <HeartIcon />
</Icon>

// React - Checkbox indicator
import { PlusIcon } from "lucide-react"
import { Checkbox } from "@/components/ui"
;<Checkbox.Root>
  <Checkbox.Control>
    <Checkbox.Indicator>
      <PlusIcon />
    </Checkbox.Indicator>
  </Checkbox.Control>
</Checkbox.Root>

// React - FileUpload delete trigger
import { XIcon } from "lucide-react"
import { FileUpload, IconButton } from "@/components/ui"
;<FileUpload.ItemDeleteTrigger asChild>
  <IconButton size='2xs'>
    <XIcon />
  </IconButton>
</FileUpload.ItemDeleteTrigger>

// React - InputGroup with icon
import { FileUpIcon } from "lucide-react"
import { InputGroup } from "@/components/ui"
;<InputGroup startElement={<FileUpIcon />}>
  <Input />
</InputGroup>

// React - RatingGroup custom icon
import { HeartIcon } from "lucide-react"
import { RatingGroup } from "@/components/ui"
;<RatingGroup.Root>
  <RatingGroup.Control>
    <RatingGroup.Items icon={<HeartIcon />} />
  </RatingGroup.Control>
</RatingGroup.Root>

// Solid - Button with icon
import { PhoneIcon, SendIcon } from "lucide-solid"
import { Button } from "@/components/ui"
;<Button>
  <SendIcon />
  Send
</Button>
;<Button variant='outline'>
  Call us <PhoneIcon />
</Button>

// Solid - IconButton
import { SendIcon } from "lucide-solid"
import { IconButton } from "@/components/ui"
;<IconButton aria-label='Send message'>
  <SendIcon />
</IconButton>

// Solid - Badge with icon
import { StarIcon } from "lucide-solid"
import { Badge } from "@/components/ui"
;<Badge variant='solid' colorPalette='blue'>
  <StarIcon /> New
</Badge>

// Solid - Icon component wrapper
import { HeartIcon } from "lucide-solid"
import { Icon } from "@/components/ui"
;<Icon size='lg' color='colorPalette.solid.bg'>
  <HeartIcon />
</Icon>
```

**Key Patterns:**

- Icons are typically used as **children** of components
- For compound components with triggers, use `asChild` pattern with IconButton
- Some components accept icons as **props** (e.g., `RatingGroup.Items` with `icon` prop)
- Icons can be placed before or after text content
- Always use the `Icon` suffix naming convention
- Same patterns apply across React and Solid (just different import sources: `lucide-react` vs `lucide-solid`)

## Ref Synchronization Strategies

Each framework handles refs differently, requiring specific synchronization patterns:

### React Pattern

React components use `forwardRef` for direct ref forwarding:

```tsx
// Common pattern: Direct ref forwarding with forwardRef
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    return <BaseButton ref={ref} {...props} />
  }
)

// Complex pattern: Manual ref synchronization (for advanced cases)
const ref = useRef<HTMLElement>(null)
useEffect(() => {
  if (ref.current) {
    component.setRootRef(ref.current)
  }
}, [component])

return <div ref={ref} {...component.getRootProps()} />
```

**Key Points:**

- Most components use `forwardRef` for simple ref forwarding
- Manual ref synchronization is only needed for complex cases where refs need to be set on component instances
- `forwardRef` is the standard React pattern for ref forwarding

### Solid Pattern

Solid components use direct variable assignment for refs:

```tsx
// Common pattern: Direct ref assignment
let ref: HTMLTextAreaElement | undefined
return <Textarea ref={ref} />

// Complex pattern: Manual ref synchronization (for advanced cases)
let ref: HTMLElement | undefined
createEffect(() => {
  if (ref) {
    component().setRootRef(ref)
  }
})

return <div ref={ref} {...component().getRootProps()} />
```

**Key Points:**

- Solid uses direct variable assignment for refs (no `useRef` hook)
- Refs are typed as `HTMLElement | undefined` or more specific element types
- Manual ref synchronization with `createEffect` is only needed for complex cases

#### Conditional Rendering

Solid.js uses the `<Show>` component for conditional rendering instead of boolean expressions:

```tsx
import { Show } from "solid-js"

// Preferred: Use Show component
;<Show when={isVisible()}>
  <div>Content to show conditionally</div>
</Show>

// Avoid: Boolean expression rendering
{
  isVisible() && <div>Content</div>
}
```

**Benefits of `<Show>`:**

- Better performance with reactive updates
- Proper cleanup of nested reactive computations
- More explicit conditional rendering semantics
- Consistent with Solid.js reactive patterns

### Vue Pattern

```vue
<script setup lang="ts">
const component = useComponent(props, emits)
ComponentProvider(component)
useForwardExpose() // Handles complex ref forwarding
</script>

<template>
  <ark.div v-bind="component.getRootProps()" :ref="component.refs.rootRef">
    <slot />
  </ark.div>
</template>
```

### Svelte Pattern

```svelte
<script lang="ts">
  let { ref = $bindable(null), ...props } = $props()

  function setNode(node: Element | null) {
    component().setRootRef(node)
  }
</script>

<Ark as="div" bind:ref {...mergedProps} {@attach setNode} />
```

## Styled System Integration Pattern

Park UI components use `createStyleContext` from `styled-system/jsx` to wrap Ark UI components with styling. This pattern is essential for compound components that need style context sharing.

### React Pattern

```tsx
"use client"
import { Dialog, useDialogContext } from "@ark-ui/react/dialog"
import { ark } from "@ark-ui/react/factory"
import { type ComponentProps, forwardRef } from "react"
import { createStyleContext, styled } from "styled-system/jsx"
import { dialog } from "styled-system/recipes"

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const RootProvider = withRootProvider(Dialog.RootProvider, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const Backdrop = withContext(Dialog.Backdrop, "backdrop")
export const Content = withContext(Dialog.Content, "content")
export const Title = withContext(Dialog.Title, "title")
export const Trigger = withContext(Dialog.Trigger, "trigger")
export const Body = withContext(ark.div, "body")
export const Header = withContext(ark.div, "header")
export const Footer = withContext(ark.div, "footer")

// Custom styled components
const StyledButton = styled(ark.button)

export const ActionTrigger = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof StyledButton>
>(function ActionTrigger(props, ref) {
  const dialog = useDialogContext()
  return (
    <StyledButton {...props} ref={ref} onClick={() => dialog.setOpen(false)} />
  )
})

export { DialogContext as Context } from "@ark-ui/react/dialog"
```

### Solid Pattern

```tsx
import { Dialog, useDialogContext } from "@ark-ui/solid/dialog"
import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, splitProps } from "solid-js"
import { createStyleContext, styled } from "styled-system/jsx"
import { dialog } from "styled-system/recipes"

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const Backdrop = withContext(Dialog.Backdrop, "backdrop")
export const Content = withContext(Dialog.Content, "content")
export const Title = withContext(Dialog.Title, "title")
export const Trigger = withContext(Dialog.Trigger, "trigger")
export const Body = withContext(ark.div, "body")
export const Header = withContext(ark.div, "header")
export const Footer = withContext(ark.div, "footer")

// Custom styled components
const StyledButton = styled(ark.button)

export const ActionTrigger = (props: ComponentProps<typeof StyledButton>) => {
  const dialog = useDialogContext()
  const [local, rest] = splitProps(props, ["onClick"])

  return (
    <StyledButton
      {...rest}
      onClick={(e) => {
        local.onClick?.(e)
        dialog.setOpen(false)
      }}
    />
  )
}

export { DialogContext as Context } from "@ark-ui/solid/dialog"
```

**Key Points:**

- `createStyleContext(recipe)` returns `{ withRootProvider, withContext }` helpers
- `withRootProvider(Component, options?)` wraps root components that provide style context
  - Second parameter can include `defaultProps` for default values
- `withContext(Component, partName, options?)` wraps child components that consume style context
  - `partName` is the recipe part name (e.g., 'backdrop', 'content', 'trigger')
  - Can also include `defaultProps` for default children or props
- `styled(Component)` creates styled components for custom elements
- Context is exported from Ark UI for advanced usage patterns
- This pattern enables style variant sharing across compound component parts

## asChild Pattern Implementation

The `asChild` pattern allows replacing a component's root element with a custom element while preserving the component's
functionality and props. Each framework implements this pattern differently.

### React asChild Pattern

```tsx
import { Menu } from "@ark-ui/react/menu"
;<Menu.Item value='docs' asChild>
  <a href='https://ark-ui.com'>Documentation</a>
</Menu.Item>
```

- **Type**: `boolean`
- **Prop Name**: `asChild`
- **Pattern**: Boolean flag with child element wrapping
- **Notes**: Must have exactly one child element

### Solid asChild Pattern

```tsx
import { Menu } from "@ark-ui/solid/menu"
;<Menu.Item
  value='docs'
  asChild={(itemProps) => (
    <a href='https://ark-ui.com' {...itemProps()}>
      Documentation
    </a>
  )}
/>
```

- **Type**: `(props: PropsFn) => JSX.Element`
- **Prop Name**: `asChild`
- **Pattern**: Render prop function that receives props function
- **Notes**: Always requires function pattern, call `itemProps()` to spread component props

### Vue asChild Pattern

```vue
<script setup lang="ts">
import { Menu } from "@ark-ui/vue/menu"
</script>

<template>
  <Menu.Item value="docs" as-child>
    <a href="https://ark-ui.com">Documentation</a>
  </Menu.Item>
</template>
```

- **Type**: `boolean`
- **Prop Name**: `as-child` (kebab-case in templates), `asChild` (camelCase in script)
- **Pattern**: Boolean flag with default slot content
- **Notes**: Uses Vue's `Dynamic` component internally

### Svelte asChild Pattern

```svelte
<script lang="ts">
  import { Menu } from '@ark-ui/svelte/menu'
</script>

<Menu.Item value="docs">
  {#snippet asChild(itemProps)}
    <a href="https://ark-ui.com" {...itemProps()}>Documentation</a>
  {/snippet}
</Menu.Item>
```

- **Type**: `Snippet<[PropsFn]>`
- **Prop Name**: `asChild`
- **Pattern**: Svelte 5 snippet that receives props function
- **Notes**: Use `{#snippet asChild(itemProps)}` block, call `itemProps()` to spread component props

### asChild Pattern Summary

| Framework  | Prop Name  | Prop Type                         | Usage Pattern                             |
| ---------- | ---------- | --------------------------------- | ----------------------------------------- |
| **React**  | `asChild`  | `boolean`                         | Boolean flag with children wrapping       |
| **Solid**  | `asChild`  | `(props: PropsFn) => JSX.Element` | Function that receives props function     |
| **Vue**    | `as-child` | `boolean`                         | Boolean flag (kebab-case in templates)    |
| **Svelte** | `asChild`  | `Snippet<[PropsFn]>`              | Snippet/template slot with props function |

### Common Use Cases for asChild

1. **Rendering links instead of buttons**: Menu items, navigation items
2. **Custom interactive elements**: Tooltips on custom triggers
3. **Composition with routing libraries**: Next.js Link, Vue Router RouterLink, SvelteKit Link
4. **Preserving component functionality**: Keeping accessibility and state while changing the underlying element

## Context Provider Patterns

### React

React uses `createContext` from `@ark-ui/react/utils`, not React's built-in `createContext`:

```tsx
import { createContext, mergeProps } from "@ark-ui/react/utils"

const [ButtonPropsProvider, useButtonPropsContext] =
  createContext<ButtonVariantProps>({
    name: "ButtonPropsContext",
    hookName: "useButtonPropsContext",
    providerName: "<PropsProvider />",
    strict: false,
  })

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(props, ref) {
    const [variantProps, otherProps] = useMemo(
      () => button.splitVariantProps(props),
      [props]
    )
    return (
      <ButtonPropsProvider value={variantProps}>
        <Group ref={ref} {...otherProps} />
      </ButtonPropsProvider>
    )
  }
)
```

**Key Points:**

- Always import `createContext` from `@ark-ui/react/utils`
- The context creator requires configuration object with `name`, `hookName`, `providerName`, and `strict` options
- Returns a tuple: `[Provider, useContextHook]`
- Used for prop context sharing in compound components

### Solid

Solid uses `createContext` from `@ark-ui/solid/utils`:

```tsx
import { createContext, mergeProps } from "@ark-ui/solid/utils"

const [ButtonPropsProvider, useButtonPropsContext] =
  createContext<ButtonVariantProps>({
    name: "ButtonPropsContext",
    hookName: "useButtonPropsContext",
    providerName: "<PropsProvider />",
    strict: false,
  })

export const ButtonGroup = (props: ButtonGroupProps) => {
  const [variantProps, otherProps] = createMemo(() =>
    button.splitVariantProps(props)
  )
  return (
    <ButtonPropsProvider value={variantProps()}>
      <Group {...otherProps()} />
    </ButtonPropsProvider>
  )
}
```

### Vue

```ts
// Context through provide/inject with composables
export const ComponentProvider = (value: ComponentApi) => {
  provide(ComponentContext, value)
}

export const useComponentContext = () => {
  return inject(ComponentContext)
}
```

### Svelte

```ts
// Context through setContext/getContext
export const ComponentProvider = (component: ComponentApi) => {
  setContext("component", component)
}

export const useComponentContext = (): ComponentApi => {
  return getContext("component")
}
```

## Boolean Prop Handling

### Three-State Boolean Logic

```ts
// Correct: undefined allows Zag.js to use defaults
disabled?: boolean | undefined

// Incorrect: false overrides Zag.js defaults
disabled?: boolean = false
```

### Framework-Specific Defaults

```ts
// Vue: Explicit undefined defaults
withDefaults(defineProps<Props>(), {
  disabled: undefined,
} satisfies BooleanDefaults<Props>)

// Svelte: $bindable with undefined
let { disabled = $bindable(undefined) } = $props()

// React/Solid: Optional props default to undefined
interface Props {
  disabled?: boolean // Already defaults to undefined
}
```

## Emit vs Callback Patterns

### Vue Emit Pattern

```ts
export type RootEmits = {
  "update:checked": [checked: boolean] // v-model integration
  checkedChange: [details: ChangeDetails] // Callback pattern
}

const emits = defineEmits<RootEmits>()
emits("update:checked", newValue)
emits("checkedChange", details)
```

### Other Frameworks Callback Pattern

```ts
interface Props {
  onCheckedChange?: (details: ChangeDetails) => void
}
```

## Component Export Patterns

Each component follows a consistent export structure with framework-specific variations:

### React - Component File Structure

Components are structured as styled wrappers around Ark UI components:

```tsx
// dialog.tsx
"use client"
import { Dialog, useDialogContext } from "@ark-ui/react/dialog"
import { ark } from "@ark-ui/react/factory"
import { type ComponentProps, forwardRef } from "react"
import { createStyleContext, styled } from "styled-system/jsx"
import { dialog } from "styled-system/recipes"

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const RootProvider = withRootProvider(Dialog.RootProvider, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const Backdrop = withContext(Dialog.Backdrop, "backdrop")
export const CloseTrigger = withContext(Dialog.CloseTrigger, "closeTrigger")
export const Content = withContext(Dialog.Content, "content")
export const Description = withContext(Dialog.Description, "description")
export const Positioner = withContext(Dialog.Positioner, "positioner")
export const Title = withContext(Dialog.Title, "title")
export const Trigger = withContext(Dialog.Trigger, "trigger")
export const Body = withContext(ark.div, "body")
export const Header = withContext(ark.div, "header")
export const Footer = withContext(ark.div, "footer")

// Custom components
const StyledButton = styled(ark.button)
export const ActionTrigger = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof StyledButton>
>(function ActionTrigger(props, ref) {
  const dialog = useDialogContext()
  return (
    <StyledButton {...props} ref={ref} onClick={() => dialog.setOpen(false)} />
  )
})

// Export context for advanced usage
export { DialogContext as Context } from "@ark-ui/react/dialog"
```

### React - Index Exports (index.ts)

```ts
// Compound components: Namespace exports
export * as Dialog from "./dialog"
export * as Accordion from "./accordion"
export * as Field from "./field"
export * as Menu from "./menu"

// Simple components: Individual exports with types
export {
  Button,
  ButtonGroup,
  type ButtonGroupProps,
  type ButtonProps,
} from "./button"
export { Badge, type BadgeProps } from "./badge"
export { Input, type InputProps } from "./input"
export { Textarea, type TextareaProps } from "./textarea"
export { Icon, type IconProps } from "./icon"
```

**Key Points:**

- Compound components (Dialog, Accordion, etc.) are exported as namespaces for `Component.Part` syntax
- Simple components are exported individually with their prop types
- All components wrap Ark UI components with styled-system styling
- Context is exported from component files for advanced usage

### Solid - Component File Structure

Solid components follow a similar pattern to React:

```tsx
// dialog.tsx
import { Dialog, useDialogContext } from "@ark-ui/solid/dialog"
import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, splitProps } from "solid-js"
import { createStyleContext, styled } from "styled-system/jsx"
import { dialog } from "styled-system/recipes"

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const Backdrop = withContext(Dialog.Backdrop, "backdrop")
export const Content = withContext(Dialog.Content, "content")
export const Title = withContext(Dialog.Title, "title")
export const Trigger = withContext(Dialog.Trigger, "trigger")

// Custom components
const StyledButton = styled(ark.button)
export const ActionTrigger = (props: ComponentProps<typeof StyledButton>) => {
  const dialog = useDialogContext()
  const [local, rest] = splitProps(props, ["onClick"])
  return (
    <StyledButton
      {...rest}
      onClick={(e) => {
        local.onClick?.(e)
        dialog.setOpen(false)
      }}
    />
  )
}

export { DialogContext as Context } from "@ark-ui/solid/dialog"
```

### Solid - Index Exports (index.ts)

```ts
// Compound components: Namespace exports
export * as Dialog from "./dialog"
export * as Accordion from "./accordion"
export * as Field from "./field"

// Simple components: Individual exports with types
export {
  Button,
  ButtonGroup,
  type ButtonGroupProps,
  type ButtonProps,
} from "./button"
export { Badge, type BadgeProps } from "./badge"
export { Input, type InputProps } from "./input"
```

### Vue - Individual Exports (index.ts)

```ts
// Vue exports components as default exports from .vue files
export {
  default as FieldRoot,
  type FieldRootBaseProps,
  type FieldRootProps,
} from "./field-root.vue"
export {
  default as FieldLabel,
  type FieldLabelBaseProps,
  type FieldLabelProps,
} from "./field-label.vue"
export {
  default as FieldRootProvider,
  type FieldRootProviderBaseProps,
  type FieldRootProviderProps,
} from "./field-root-provider.vue"

// Hooks and utilities
export { useField, type UseFieldProps, type UseFieldReturn } from "./use-field"
export { fieldAnatomy } from "./field.anatomy"

// Namespace export for dot notation
export * as Field from "./field"
```

### Vue Types Pattern ({component}.types.ts)

Vue components use dedicated types files for prop definitions:

```ts
// field.types.ts - Shared prop interfaces
export interface RootProps {
  disabled?: boolean
  invalid?: boolean
  required?: boolean
  // ... other props
}

export type RootEmits = {
  "update:value": [value: string]
  // ... other emits
}
```

### Vue Component Pattern (.vue files)

```vue
<script lang="ts">
import type { HTMLAttributes } from "vue"
import type { PolymorphicProps } from "../factory"
import type { RootProps, RootEmits } from "./component.types"

export interface ComponentRootBaseProps extends RootProps, PolymorphicProps {}
export interface ComponentRootProps
  extends ComponentRootBaseProps,
    HTMLAttributes {}
export interface ComponentRootEmits extends RootEmits {}
</script>

<script setup lang="ts">
import { ark } from "../factory"
import { useComponent } from "./use-component"
import { ComponentProvider } from "./use-component-context"
import { useForwardExpose } from "../../utils/use-forward-expose"

const props = withDefaults(defineProps<ComponentRootProps>(), {
  disabled: undefined,
  invalid: undefined,
})
const emits = defineEmits<ComponentRootEmits>()

// Initialize component logic with Zag.js
const component = useComponent(props, emits)
ComponentProvider(component)

// Forward template refs and expose component instance
useForwardExpose()
</script>

<template>
  <ark.div v-bind="component.getRootProps()" :as-child="asChild">
    <slot />
  </ark.div>
</template>
```

### Vue-Specific Utilities

**useForwardExpose()** - Vue ref forwarding utility:

- Forwards template refs to parent components
- Exposes component props and methods to parent
- Handles Vue's complex ref forwarding for compound components
- Credit to Radix Vue team for the implementation pattern
- Essential for proper Vue component composition and template refs

### Svelte Component Pattern (.svelte files)

Svelte 5 uses the new runes syntax for component development:

```svelte
<script module lang="ts">
  import type { Assign, HTMLProps, PolymorphicProps, RefAttribute } from '$lib/types'
  import type { UseComponentProps } from './use-component.svelte'

  export interface ComponentRootBaseProps extends UseComponentProps, PolymorphicProps<'div'>, RefAttribute {}
  export interface ComponentRootProps extends Assign<HTMLProps<'div'>, ComponentRootBaseProps> {}
</script>

<script lang="ts">
  import { createSplitProps } from '$lib/utils/create-split-props'
  import { mergeProps } from '@zag-js/svelte'
  import { Ark } from '../factory'
  import { ComponentProvider } from './use-component-context'
  import { useComponent } from './use-component.svelte'

  // Svelte 5 props with $bindable refs
  let { ref = $bindable(null), ...props }: ComponentRootProps = $props()

  // Split props for component logic
  const [useComponentProps, localProps] = $derived(
    createSplitProps<UseComponentProps>()(props, ['disabled', 'invalid', 'required']),
  )

  const id = $props.id()

  // Reactive machine props with $derived
  const machineProps = $derived.by(() => ({
    ...useComponentProps,
    id: useComponentProps.id ?? id,
  }))

  // Initialize component logic with Zag.js
  const component = useComponent(() => machineProps)
  const mergedProps = $derived(mergeProps(component().getRootProps(), localProps))

  // Provide context for child components
  ComponentProvider(component)

  // Function for @attach directive
  function setNode(node: Element | null) {
    component().setRootRef(node)
  }
</script>

<!-- Ark component with bind:ref and @attach -->
<Ark as="div" bind:ref {...mergedProps} {@attach setNode} />
```

**IMPORTANT: Svelte useComponent ID Requirement**

When using `useComponent` hooks in Svelte examples, you must **always** provide an explicit `id` prop:

```svelte
<script lang="ts">
  import { Dialog, useDialog } from '@ark-ui/svelte/dialog'

  // ✅ CORRECT - Get id from props explicitly
  const id = $props.id()
  const dialog = useDialog({ id })

  // ❌ WRONG - No fallback ID generation in Svelte
  const dialog = useDialog()
</script>
```

For examples with multiple component instances, use suffixes:

```svelte
<script lang="ts">
  const id = $props.id()

  const parentDialog = useDialog({ id: `${id}-parent` })
  const childDialog = useDialog({ id: `${id}-child` })
</script>
```

### Svelte 5 Specific Patterns

**Props and Refs:**

- `let { ref = $bindable(null), ...props }: ComponentProps = $props()` - Svelte 5 props destructuring with bindable refs
- `$bindable()` - Makes props bindable to parent components
- `ref` defaults to `null` and is automatically typed

**Reactivity:**

- `$derived()` - Create derived reactive values
- `$derived.by()` - Create derived values with explicit dependencies
- Replaces Svelte 4's `$:` reactive statements for complex derivations

**Ark Component:**

- `<Ark as="div" />` - Polymorphic component factory (void elements only)
- `bind:ref` - Bind template ref to variable (works with $bindable)
- `{...mergedProps}` - Spread Zag.js props
- `{@attach setNode}` - Attach additional refs for complex components

**Context and State:**

- `createSplitProps()` - Utility to split component and DOM props
- `mergeProps()` - Merge Zag.js props with local props
- Provider pattern for compound components

**Self-Closing Tags:**

Svelte requires proper closing tags for non-void HTML elements to avoid ambiguity:

```svelte
<!-- ✅ CORRECT - Non-void elements need closing tags -->
<textarea placeholder="Enter text..."></textarea>
<div></div>
<span></span>

<!-- ❌ WRONG - Self-closing non-void elements are ambiguous -->
<textarea placeholder="Enter text..." />
<div />
<span />

<!-- ✅ CORRECT - Void elements can be self-closing -->
<input />
<img />
<br />
```

**Non-void elements that require closing tags:**

- `<textarea>`, `<div>`, `<span>`, `<button>`, `<a>`, `<form>`, etc.

**Void elements that can be self-closing:**

- `<input>`, `<img>`, `<br>`, `<hr>`, `<meta>`, `<link>`, etc.

## Framework-Specific Utilities

Each framework has specialized utilities for handling common component development patterns:

### Svelte Utilities

**createSplitProps()** - Prop separation utility:

```ts
const [useComponentProps, localProps] = $derived(
  createSplitProps<UseComponentProps>()(props, [
    "disabled",
    "invalid",
    "required",
  ])
)
```

- Separates component logic props from DOM attributes
- First array contains props for Zag.js component logic
- Second array contains remaining props for DOM elements

**mergeProps()** - Zag.js integration:

```ts
import { mergeProps } from "@zag-js/svelte"
const mergedProps = $derived(mergeProps(component().getRootProps(), localProps))
```

- Combines Zag.js state props with local component props
- Handles prop precedence and conflicts automatically

### Vue Utilities

**BooleanDefaults Pattern** - Proper undefined handling:

```ts
const props = withDefaults(defineProps<ComponentProps>(), {
  disabled: undefined,
  invalid: undefined,
  required: undefined,
} satisfies BooleanDefaults<RootProps>)
```

- Prevents unwanted `false` values for boolean props
- Allows proper three-state handling (true/false/undefined)
- Essential for Zag.js boolean prop handling

**useForwardExpose()** - Advanced ref forwarding:

```ts
import { useForwardExpose } from "../../utils/use-forward-expose"
useForwardExpose()
```

- Handles complex ref forwarding scenarios
- Exposes component props and methods to parent
- Deals with Vue's text/comment node edge cases

### React Utilities

**createContext from @ark-ui/react/utils:**

```tsx
import { createContext, mergeProps } from "@ark-ui/react/utils"

const [ButtonPropsProvider, useButtonPropsContext] =
  createContext<ButtonVariantProps>({
    name: "ButtonPropsContext",
    hookName: "useButtonPropsContext",
    providerName: "<PropsProvider />",
    strict: false,
  })
```

**mergeProps for prop merging:**

```tsx
import { mergeProps } from "@ark-ui/react/utils"

const buttonProps = useMemo(
  () => mergeProps<ButtonProps>(propsContext, props),
  [propsContext, props]
)
```

**Standard Patterns:**

- Direct ref forwarding with `forwardRef()`
- Context providers with `createContext` from `@ark-ui/react/utils`
- `useMemo` for prop merging and derived values
- Hook-based state management integration

### Solid Utilities

**createContext from @ark-ui/solid/utils:**

```tsx
import { createContext, mergeProps } from "@ark-ui/solid/utils"

const [ButtonPropsProvider, useButtonPropsContext] =
  createContext<ButtonVariantProps>({
    name: "ButtonPropsContext",
    hookName: "useButtonPropsContext",
    providerName: "<PropsProvider />",
    strict: false,
  })
```

**mergeProps for prop merging:**

```tsx
import { mergeProps } from "@ark-ui/solid/utils"

const buttonProps = createMemo(() =>
  mergeProps<ButtonProps>(propsContext, props)
)
```

**splitProps for prop separation:**

```tsx
import { splitProps } from "solid-js"

const [local, rest] = splitProps(props, ["onClick", "disabled"])
```

**Standard Patterns:**

- Direct ref assignment (no hooks needed)
- Context providers with `createContext` from `@ark-ui/solid/utils`
- `createMemo` for reactive prop merging and derived values
- `splitProps` for separating local props from rest props
