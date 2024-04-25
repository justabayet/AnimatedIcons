/**
 * Original icon reference: https://www.flaticon.com/free-animated-icons/buy Buy animated icons created by Freepik - Flaticon
 */
import big_light from './swipe_horizontal_big_light.gif'
import { AnimatedIconProps } from '../interface'

function SwipeHorizontalBigLight(props: AnimatedIconProps): JSX.Element {
  return (<img src={big_light} alt="loading..." {...props} />)
}

export default SwipeHorizontalBigLight