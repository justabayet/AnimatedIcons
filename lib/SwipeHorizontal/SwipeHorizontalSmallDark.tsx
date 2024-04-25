/**
 * Original icon reference: https://www.flaticon.com/free-animated-icons/buy Buy animated icons created by Freepik - Flaticon
 */
import small_dark from './swipe_horizontal_small_dark.gif'
import { AnimatedIconProps } from '../interface'

function SwipeHorizontalSmallDark(props: AnimatedIconProps): JSX.Element {
  return (<img src={small_dark} alt="loading..." {...props} />)
}

export default SwipeHorizontalSmallDark