import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

type HTMLImageElementProps = Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src'>

export interface AnimatedIconProps extends HTMLImageElementProps {}