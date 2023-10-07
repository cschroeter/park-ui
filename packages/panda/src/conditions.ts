export const conditions = {
  extend: {
    checked: '&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])',
    indeterminate:
      '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
    closed: '&:is([data-state=closed])',
    open: '&:is([open], [data-state=open])',
    hidden: '&:is([hidden])',
    current: '&:is([data-current])',
    today: '&:is([data-today])',
    placeholderShown: '&:is(:placeholder-shown, [data-placeholder-shown])',
    collapsed: '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
  },
}
