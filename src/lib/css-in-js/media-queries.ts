const breakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const sm = `@media (min-width: ${breakPoints.sm}px)`
const md = `@media (min-width: ${breakPoints.md}px)`
const lg = `@media (min-width: ${breakPoints.lg}px)`
const xl = `@media (min-width: ${breakPoints.xl}px)`

export { sm, md, lg, xl }
