import {createTab} from "./util";

export const createStore = (modules: Array<{name: string, path: string}>) => {
  return [createImport(modules),
      createCreateStore(modules),
      createState(modules),
      createAction(modules)
  ].join("\n\n");
};

const createImport = (modules: Array<{name: string, path: string}>) => {
  return "import {createStore, combineReducers, Action} from 'redux'" +
      modules.map(it => `import ${it.name}, {${it.name}Action, ${it.name}State} from "./${it.path}"` )
          .join("\n");
};

const createCreateStore = (modules: Array<{name: string, path: string}>) => {
  return "export default createStore(\n" +
      `${createTab(1)}combineReducers({\n` +
      `${modules.map(it => `${createTab(2)}${it.name},`).join("\n")}\n` +
      `${createTab(1)}})\n` +
      ");";
};

const createState = (modules: Array<{name: string, path: string}>) => {
  return "export type RootState = {\n" +
      `${createTab(1)}${modules.map(it => `${it.name}: ${it.name}State`).join("\n")}` +
      "}";

};

const createAction = (modules: Array<{name: string, path: string}>) => {
  return "export type RootAction = Action\n" +
      `${modules.map(it => `${createTab(1)}| ${it.name}Action`).join("\n")}`
};
