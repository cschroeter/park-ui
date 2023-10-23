import { mapObject } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const containerConfig = {
transform(props) {
  return {
    position: "relative",
    width: "100%",
    mx: "auto",
    px: { base: "4", md: "6" },
    ...props
  };
}}

export const getContainerStyle = (styles = {}) => containerConfig.transform(styles, { map: mapObject })

export const container = (styles) => css(getContainerStyle(styles))
container.raw = getContainerStyle