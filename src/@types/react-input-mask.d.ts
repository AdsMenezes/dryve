declare module 'react-input-mask' {
  import * as React from 'react'

  export interface Selection {
    start: number
    end: number
  }

  export interface InputState {
    value: string
    selection: Selection | null
  }

  export interface BeforeMaskedStateChangeStates {
    previousState: InputState
    currentState: InputState
    nextState: InputState
  }

  export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string | Array<string | RegExp>
    maskChar: string | null
    maskPlaceholder?: string | null
    alwaysShowMask?: boolean
    inputRef?: React.Ref<HTMLInputElement>
    beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState
  }

  export class ReactInputMask extends React.Component<Props> {}

  export default ReactInputMask
}
