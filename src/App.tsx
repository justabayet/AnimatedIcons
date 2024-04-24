import { PropsWithChildren } from "react"
import { ClickOneFinger, SwipeHorizontal, SwipeVertical } from "../lib/main"

function Row({ children, isDark = false }: PropsWithChildren & { isDark?: boolean }): JSX.Element {
  return (
    <div style={{
      backgroundColor: isDark ? "#FFF" : "#000",
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
        <ClickOneFinger />
        <ClickOneFinger size="small" />
      </Row>
      <Row>
        <ClickOneFinger theme="light" />
        <ClickOneFinger size="small" theme="light" />
      </Row>
      <h1>SwipeHorizontal</h1>
      <Row isDark>
        <SwipeHorizontal />
        <SwipeHorizontal size="small" />
      </Row>
      <Row>
        <SwipeHorizontal theme="light" />
        <SwipeHorizontal size="small" theme="light" />
      </Row>
      <h1>SwipeVertical</h1>
      <Row isDark>
        <SwipeVertical />
        <SwipeVertical size="small" />
      </Row>
      <Row>
        <SwipeVertical theme="light" />
        <SwipeVertical size="small" theme="light" />
      </Row>
    </div>
  )
}

export default App
