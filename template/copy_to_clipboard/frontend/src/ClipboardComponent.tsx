import React, { Component, ReactNode } from "react"

// import ContentPasteIcon from '@mui/icons-material/ContentPaste';

function copyAnswerToClipboard(el: Element | null, selector: string = "p") {
  console.log(el);
  let container = el?.parentNode;
  let textElement = container?.querySelector(selector);
//  debugger;
  let text = textElement?.textContent;
  if (text) {
      copyTextToClipboard(text);
  }
}

// we use a deprecated way of copying from clipboard as the modern version works with https only which we can not guarantee
function copyTextToClipboard(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      return 'Copy text command was ' + msg;
  } catch (err) {
      console.error('Unable to copy', err);
      return 
  } finally {
    document.body.removeChild(textarea);
  }
}

interface Props {
  text?: string,
  cssSelector?: string
}
class ClipboardComponent extends Component<Props> {
  private el: Element | null = null;

  constructor(props: Props) {
    super(props);
  }
  
  public render = (): ReactNode => {
    return <button ref={(el) => { this.el = el }} onClick={() => this.copy()}>Knöbb</button>;
  }

  public copy() {
    if (this.props.cssSelector) {
      copyAnswerToClipboard(this.el, this.props.cssSelector);
    } else if (this.props.text) {
      copyTextToClipboard(this.props.text);
    }
  }

}

export default ClipboardComponent