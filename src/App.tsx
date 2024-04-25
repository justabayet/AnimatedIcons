import { PropsWithChildren } from "react"
import { ClickOneFingerBigDark, ClickOneFingerBigLight, ClickOneFingerSmallDark, ClickOneFingerSmallLight } from "../lib/ClickOneFinger"
import { SwipeHorizontalBigDark, SwipeHorizontalBigLight, SwipeHorizontalSmallDark, SwipeHorizontalSmallLight } from "../lib/SwipeHorizontal"
import { SwipeVerticalBigDark, SwipeVerticalBigLight, SwipeVerticalSmallDark, SwipeVerticalSmallLight } from "../lib/SwipeVertical"

function Row({ children, isDark = false }: PropsWithChildren & { isDark?: boolean }): JSX.Element {
  return (
    <div style={{
      backgroundColor: isDark ? "#000" : "#FFF",
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      {children}
    </div>
  )
}

function App(): JSX.Element {
  return (
    <div id="table">
      <h1>ClickOneFinger</h1>
      <Row isDark>
        <ClickOneFingerBigLight />
        <ClickOneFingerSmallLight />
      </Row>
      <Row>
        <ClickOneFingerBigDark />
        <ClickOneFingerSmallDark />
      </Row>
      <h1>SwipeHorizontal</h1>
      <Row isDark>
        <SwipeHorizontalBigLight />
        <SwipeHorizontalSmallLight />
      </Row>
      <Row>
        <SwipeHorizontalBigDark />
        <SwipeHorizontalSmallDark />
      </Row>
      <h1>SwipeVertical</h1>
      <Row isDark>
        <SwipeVerticalBigLight />
        <SwipeVerticalSmallLight />
      </Row>
      <Row>
        <SwipeVerticalBigDark />
        <SwipeVerticalSmallDark />
      </Row>
    </div>
  )
}

export default App
