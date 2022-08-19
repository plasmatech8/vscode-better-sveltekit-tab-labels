import * as vscode from "vscode";

export async function activate(context: vscode.ExtensionContext) {
  // Conditions for activation
  const svelteConfigSearch = await vscode.workspace.findFiles(
    "svelte.config.js"
  );
  if (!svelteConfigSearch.length) {
    console.log("Not activating - SvelteKit not detected");
    return;
  }
  const routesDirSearch = await vscode.workspace.findFiles("src/routes/**");
  if (!routesDirSearch.length) {
    console.log("Not activating - SvelteKit routes not found");
    return;
  }

  // Startup message
  console.log('Extension "Better SvelteKit Tab Labels" is now active!');

  // Option 1: On tab opened, check file, then change tab label
  const changeTabs = vscode.window.tabGroups.onDidChangeTabs((tabChangeEvent) =>
    tabChangeEvent.opened.forEach((tab) => {
      // console.log({ ...tab });
      // Need: tab file URI - for checking whether the tab is a valid sveltekit route file
      // Need: ability to override the tab label with a new string
    })
  );

  // Option 2: On text document open, check file, find tab, then change tab label
  const openTextDoc = vscode.workspace.onDidOpenTextDocument((textDocument) => {
    // check file
    const path = textDocument.uri.path;
    const fileName = textDocument.fileName;
    const languageId = textDocument.languageId;
    if (!path.includes("/src/routes/")) {
      console.log(fileName, "is not in routes folder");
      return;
    }
    if (!["svelte", "javascript", "typescript"].includes(languageId)) {
      console.log(fileName, "is not a JS/TS/Svelte file");
      return;
    }
    if (!fileName.startsWith("+")) {
      console.log(fileName, "is not a SvelteKit endpoint");
      return;
    }
    // TODO: find that SvelteKit routes Regex if applicable (that I think Rich showed us on GitHub somewhere)

    // Find tab and change label
    vscode.window.tabGroups.all.forEach((groups) =>
      groups.tabs.forEach((tab) => {
        if (tab.label === fileName) {
          // Need: ability to override the tab label with a new string
        }
      })
    );
  });

  // Add subscriptions
  context.subscriptions.push(changeTabs, openTextDoc);

  // Code for later reference
  /*
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
  */
}

export function deactivate() {}
