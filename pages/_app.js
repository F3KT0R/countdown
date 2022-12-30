import '../styles/globals.scss'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export default function App({ Component, pageProps }) {
  return ( 
    <DndProvider backend={HTML5Backend}>
      <Component {...pageProps} />
    </DndProvider>
  )
}
