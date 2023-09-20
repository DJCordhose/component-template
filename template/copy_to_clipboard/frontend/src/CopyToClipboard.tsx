import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import ClipboardComponent from "./ClipboardComponent"

class CopyToClipboard extends StreamlitComponentBase {
  public render = (): ReactNode => {
    const text = this.props.args["text"]
    return (
      <ClipboardComponent text={text} />
    )
  }
}

// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(CopyToClipboard)
