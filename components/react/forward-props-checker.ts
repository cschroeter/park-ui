import { Effect, pipe } from 'effect'
import { isCssProperty, styled } from './styled-system/jsx'

const fetchComponent = (component: string) =>
  pipe(
    Effect.tryPromise({
      try: () => fetch(`https://ark-ui.com/api/types/react/${component}`),
      catch: () => new Error(),
    }),
    Effect.flatMap((response) =>
      Effect.tryPromise({
        try: () => response.json(),
        catch: () => new Error(),
      }),
    ),
  )

const fetchAllComponents = (framework: string) =>
  pipe(
    Effect.tryPromise({
      try: () => fetch(`https://ark-ui.com/api/types/${framework}`),
      catch: () => new Error(),
    }),
    Effect.flatMap((response) =>
      Effect.tryPromise({
        try: () => response.json() as Promise<string[]>,
        catch: () => new Error(),
      }),
    ),
    Effect.map((components) =>
      components.filter(
        (component) =>
          !['environment', 'format', 'locale', 'portal', 'presence', 'toast', 'highlight'].includes(
            component,
          ),
      ),
    ),
    Effect.catchAll(() => Effect.succeed<string[]>([])),
    Effect.flatMap((components) =>
      Effect.forEach(components, (component) =>
        pipe(
          fetchComponent(component),
          Effect.tap((a) =>
            Object.entries(a).map(([part, value]) => {
              // @ts-expect-error
              const props = Object.keys(value.props)
                .filter((prop) => prop !== 'asChild')
                .filter(isCssProperty)
              if (props.length > 0) {
                console.log(component, part, props)
              }
            }),
          ),
        ),
      ),
    ),
  )

const programm = () => pipe(fetchAllComponents('react'))

Effect.runPromise(programm())
