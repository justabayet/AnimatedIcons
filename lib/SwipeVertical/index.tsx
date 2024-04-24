/**
 * Original icon reference: https://www.flaticon.com/free-animated-icons/finger Finger animated icons created by Freepik - Flaticon
 */
import { AnimatedIconProps, VariationList } from '../interface'

const variations: VariationList = {
  big_dark: 'swipe_vertical_big_dark.gif',
  small_dark: 'swipe_vertical_small_dark.gif',
  big_light: 'swipe_vertical_big_light.gif',
  small_light: 'swipe_vertical_small_light.gif'
}

function SwipeVertical({ size = 'big', theme = 'dark', ...props }: AnimatedIconProps): JSX.Element {
  return (
    <img src={variations[`${size}_${theme}`]} alt="swipe vertical" {...props} />
  )
}

export default SwipeVertical