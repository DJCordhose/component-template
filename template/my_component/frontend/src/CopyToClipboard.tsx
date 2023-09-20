import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import ClipboardComponent from "./ClipboardComponent"

class CopyToClipboard extends StreamlitComponentBase {
  public render = (): ReactNode => {
    const name = this.props.args["name"]
    return (
      <ClipboardComponent text={name} />
    )
  }
}

// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(CopyToClipboard)
