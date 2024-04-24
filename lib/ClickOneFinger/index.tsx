/**
 * Original icon reference: https://www.flaticon.com/free-animated-icons/click Click animated icons created by Freepik - Flaticon
 */
import { AnimatedIconProps, VariationList } from '../interface'

const variations: VariationList = {
  big_dark: 'click_touch_big_dark.gif',
  small_dark: 'click_touch_small_dark.gif',
  big_light: 'click_touch_big_light.gif',
  small_light: 'click_touch_small_light.gif',
}

function ClickOneFinger({ size = 'big', theme = 'dark', ...props }: AnimatedIconProps): JSX.Element {

  return (
    <img src={variations[`${size}_${theme}`]} alt="loading..." {...props} />
  )
}

export default ClickOneFinger