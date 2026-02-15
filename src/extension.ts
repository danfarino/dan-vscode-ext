import * as vscode from 'vscode';

function shellEscape(arg: string): string {
  return "'" + arg.replace(/'/g, "'\\''") + "'";
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('nnnHere.open', (uri?: vscode.Uri) => {
    if (!uri) {
      const activeEditor = vscode.window.activeTextEditor;
      if (!activeEditor) {
        return;
      }
      uri = activeEditor.document.uri;
    }
    const terminal = vscode.window.createTerminal({
      shellPath: process.env.SHELL || '/bin/bash',
      shellArgs: ['-ic', `n ${shellEscape(uri.fsPath)}`],
    });
    terminal.show();
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
