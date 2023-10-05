import { defineTokens } from '@pandacss/dev'
import { amber } from './amber'
import { blue } from './blue'
import { bronze } from './bronze'
import { brown } from './brown'
import { crimson } from './crimson'
import { cyan } from './cyan'
import { gold } from './gold'
import { grass } from './grass'
import { gray } from './gray'
import { green } from './green'
import { indigo } from './indigo'
import { iris } from './iris'
import { jade } from './jade'
import { lime } from './lime'
import { mauve } from './mauve'
import { mint } from './mint'
import { olive } from './olive'
import { orange } from './orange'
import { pink } from './pink'
import { plum } from './plum'
import { purple } from './purple'
import { red } from './red'
import { ruby } from './ruby'
import { sage } from './sage'
import { sand } from './sand'
import { sky } from './sky'
import { slate } from './slate'
import { teal } from './teal'
import { tomato } from './tomato'
import { violet } from './violet'
import { yellow } from './yellow'

export const colors = defineTokens.colors({
  current: { value: 'currentColor' },
  black: { value: '#000' },
  white: { value: '#fff' },
  transparent: { value: 'rgb(0 0 0 / 0)' },
  amber,
  blue,
  bronze,
  brown,
  crimson,
  cyan,
  gold,
  grass,
  gray,
  green,
  indigo,
  iris,
  jade,
  lime,
  mauve,
  mint,
  olive,
  orange,
  pink,
  plum,
  purple,
  red,
  ruby,
  sage,
  sand,
  sky,
  slate,
  teal,
  tomato,
  violet,
  yellow,
})
