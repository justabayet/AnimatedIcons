/**
 * Original icon reference: https://www.flaticon.com/free-animated-icons/buy Buy animated icons created by Freepik - Flaticon
 */
import { AnimatedIconProps, VariationList } from '../interface'

const variations: VariationList = {
  big_dark: 'swipe_horizontal_big_dark.gif',
  small_dark: 'swipe_horizontal_small_dark.gif',
  big_light: 'swipe_horizontal_big_light.gif',
  small_light: 'swipe_horizontal_small_light.gif',
}

function SwipeHorizontal({ size = 'big', theme = 'dark', ...props }: AnimatedIconProps): JSX.Element {

  return (
    <img src={variations[`${size}_${theme}`]} alt="swipe horizontal" {...props} />
  )
}

export default SwipeHorizontal