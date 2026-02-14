import * as vscode from 'vscode';

function shellEscape(arg: string): string {
  return "'" + arg.replace(/'/g, "'\\''") + "'";
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('nnnHere.open', (uri: vscode.Uri) => {
    const terminal = vscode.window.createTerminal();
    terminal.show();
    terminal.sendText(`n ${shellEscape(uri.fsPath)}`);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
