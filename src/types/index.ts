import type { ExtensionContext, Disposable } from "vscode";

export interface ExtensionModule {
  (ctx: ExtensionContext): Disposable | Disposable[];
}
