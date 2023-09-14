// import {
//   Select,
//   SelectContent,
//   SelectLabel,
//   SelectOption,
//   SelectPositioner,
//   SelectTrigger,
// } from '~/components/ui/select'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const FontFamilySelect = () => {
  const { currentFontFamily, fontFamilies, updateFontFamily } = useThemeGenerator()

  return null
  // <Select
  //   selectedOption={currentFontFamily}
  //   onChange={(e: any) => updateFontFamily(e)}
  //   positioning={{ sameWidth: true }}
  //   size="sm"
  // >
  //   {({ selectedOption }) => (
  //     <Stack gap="1.5">
  //       <SelectLabel>Font Family</SelectLabel>
  //       <SelectTrigger>
  //         {selectedOption?.label} <BiExpandVertical />
  //       </SelectTrigger>
  //       <Portal>
  //         <SelectPositioner zIndex="toast">
  //           <SelectContent>
  //             {fontFamilies.map((fontFamily) => (
  //               <SelectOption
  //                 key={fontFamily.value}
  //                 value={fontFamily.value}
  //                 label={fontFamily.label}
  //               />
  //             ))}
  //           </SelectContent>
  //         </SelectPositioner>
  //       </Portal>
  //     </Stack>
  //   )}
  // </Select>
}
