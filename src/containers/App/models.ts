import * as Models from 'models';

export namespace Payload {
  export interface SetDocumentTypes { }
}

export namespace Action {
  export interface InitApp extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type InitApp = () => Action.InitApp;
}
