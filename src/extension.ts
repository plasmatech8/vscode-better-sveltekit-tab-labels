import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "Better SvelteKit Tab Labels" is now active!');

  // Dummy code
  const openTextDoc = vscode.workspace.onDidOpenTextDocument(
    async (textDocument) => {
      // Config Variable
      const x = vscode.workspace.getConfiguration("betterSveltekitTabLabels");
      const y = x.get("someVariable");
      vscode.window.showInformationMessage("Variable is: " + y);

      // Text Document
      const docData = { ...textDocument };
      console.log("Opened document", docData);
      if (docData.uri.path.endsWith("/hello.py")) {
        console.log(docData.uri.path);
        const newUri = docData.uri.with({
          path: docData.uri.path.replace("/hello.py", "/world.py"),
        });
        try {
          await vscode.workspace.fs.rename(docData.uri, newUri);
        } catch (e: any) {
          vscode.window.showErrorMessage("Failed to rename file");
        }
      }
    }
  );

  // Add subscriptions
  context.subscriptions.push(openTextDoc);
}

export function deactivate() {}
