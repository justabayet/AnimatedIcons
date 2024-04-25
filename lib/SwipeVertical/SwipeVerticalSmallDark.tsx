/**
 * Original icon reference: https://www.flaticon.com/free-animated-icons/finger Finger animated icons created by Freepik - Flaticon
 */
import small_dark from './swipe_vertical_small_dark.gif'
import { AnimatedIconProps } from '../interface'

function SwipeVerticalSmallDark(props: AnimatedIconProps): JSX.Element {
  return (<img src={small_dark} alt="loading..." {...props} />)
}

export default SwipeVerticalSmallDark