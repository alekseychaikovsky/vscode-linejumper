'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "line-jumper" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var moveUp = vscode.commands.registerCommand('extension.moveUp', function () {
        for (let i = 0; i < 10; i++) {
            vscode.commands.executeCommand("cursorUp");
        }
    });

    var moveDown = vscode.commands.registerCommand('extension.moveDown', function () {
        for (let i = 0; i < 10; i++) {
            vscode.commands.executeCommand("cursorDown");
        }
    });

    var selectUp = vscode.commands.registerCommand('extension.selectUp', function () {
        for (let i = 0; i < 10; i++) {
            vscode.commands.executeCommand("cursorUpSelect");
        }
    });

    var selectDown = vscode.commands.registerCommand('extension.selectDown', function () {
        for (let i = 0; i < 10; i++) {
            vscode.commands.executeCommand("cursorDownSelect");
        }
    });

    context.subscriptions.push(moveUp);
    context.subscriptions.push(moveDown);
    context.subscriptions.push(selectUp);
    context.subscriptions.push(selectDown);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;