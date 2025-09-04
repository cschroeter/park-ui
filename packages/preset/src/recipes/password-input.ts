import { passwordInputAnatomy } from '@ark-ui/react/password-input'
import { defineSlotRecipe } from '@pandacss/dev'

export const passwordInput = defineSlotRecipe({
  className: 'password-input',
  slots: passwordInputAnatomy.keys(),
  base: {},
})
