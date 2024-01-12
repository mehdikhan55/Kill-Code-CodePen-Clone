import { useState, useEffect } from 'react'
import './App.css'
import MyEditor from './components/MyEditor'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  // const [html, setHtml] = useLocalStorage('html','')
  // const [css, setCss] = useLocalStorage('css','')
  // const [js, setJs] = useLocalStorage('js','')
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script> 
      </html>
  `)
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js])



  return (
    <div className='app'>

      <div className="pane top-pane">
        <MyEditor
        language="html" 
        displayName="HTML"
        value={html}
        onchangefn={setHtml}
        />
        <MyEditor
        language="css" 
        displayName="CSS"
        value={css}
        onchangefn={setCss}
        />
        <MyEditor
        language="javascript" 
        displayName="JS"
        value={js}
        onchangefn={setJs}
        />
      </div>

      <div className="pane bottom-pane">
        <iframe
          className='our-canvas'
          srcDoc={srcDoc}
          title='output'
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
          />
      </div>

    </div>
  )
}

export default App
