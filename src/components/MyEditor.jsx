import React, { useState } from 'react'
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-tomorrow_night'
import 'ace-builds/src-noconflict/ext-beautify'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript'
import { ExpandAltOutlined, ShrinkOutlined } from '@ant-design/icons'
export default function MyEditor(props) {

    const { language, displayName, value, onchangefn } = props;

    const [open,setOpen]=useState(true)

    const handleChange = (value, e) => {
        onchangefn(value);
    }

    return (
        <div className={`editor-container ${open ? "" : 'collapsed'  }`}>
            <div className="editor-title">
                {displayName}
                <button
                className='editorBtn'
                onClick={()=>setOpen(prevOpen=>!prevOpen)}
                >{open ? <ShrinkOutlined/> : <ExpandAltOutlined/>}</button>
            </div>
            <AceEditor
                value={value}
                className='codemirror-wrapper'
                onChange={handleChange}
                highlightActiveLine={true}
                // theme="tomorrow_night"
                theme="monokai"
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
                fontSize="12px"
            />


        </div>
    )
}
