export interface NinComponent {
  use: Array<string> | undefined
  props: Array<{key: string, type: string}>
  state: Array<{key: string, type: string}>
  actions: {[actions: string]: ComponentAction}
  path: string;
  name: string;
  isInline: boolean;
  isFrame: boolean;
  allowChild: boolean;
  parent: string;
  node: Array<NinComponentNode>
  id: string;
  editable: {}
}

export interface NinComponentNode {
  tag: string
  id: string
  parent: string
  children: Array<string>
  className: Array<string>
  attribute: any
}

export type ComponentAction = {[params: string]: string }