/**
 * Original icon reference: https://www.flaticon.com/free-animated-icons/finger Finger animated icons created by Freepik - Flaticon
 */
import small_light from './swipe_vertical_small_light.gif'
import { AnimatedIconProps } from '../interface'

function SwipeVerticalSmallLight(props: AnimatedIconProps): JSX.Element {
  return (<img src={small_light} alt="loading..." {...props} />)
}

export default SwipeVerticalSmallLight