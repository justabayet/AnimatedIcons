/**
 * Original icon reference: https://www.flaticon.com/free-animated-icons/finger Finger animated icons created by Freepik - Flaticon
 */
import big_light from './swipe_vertical_big_light.gif'
import { AnimatedIconProps } from '../interface'

function SwipeVerticalBigLight(props: AnimatedIconProps): JSX.Element {
  return (<img src={big_light} alt="loading..." {...props} />)
}

export default SwipeVerticalBigLight