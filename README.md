# sharp-assist-ai
SharpAssist.ai is a fast, intelligent AI assistant designed to give you a sharper edge in productivity, decision-making, and everyday tasks.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.19.

## Restore Git Repository to a specified commit
```bash
git reset --hard abc1234
git push origin HEAD --force
```

Developers
GitHub: wpbest      Gmail:wpbest@gmail.com
GitHub: senshi111   GMail:banenicovic@gmail.com

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Angular](https://angular.dev/)

[Angular CLI](https://cli.angular.io/)

[Angular Style Guide](https://angular.io/guide/styleguide)

[RxJS](https://rxjs-dev.firebaseapp.com/)

[Firebase](https://firebase.google.com/docs/)

[Firebase CLI](https://firebase.google.com/docs/cli/)

[AngularFire](https://github.com/angular/angularfire)

## install Node JS
```bash
nvm list
nvm install 20.19.5
nvm use 20.19.5
```

## Install NPM Check Updates
### NPM
```
npm install -g npm-check-updates
```
At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-updates, run ncu to see outdated packages, and then run ncu -u to update the packages.

```bash
ncu
ncu -u
npm install
```

## Clear NPM Cache
```bash
npm cache clean --force
```

## Install Angular lastest
```bash
npm install -g @angular/cli
```

## Uninstall Angular
```base
npm uninstall -g @angular/cli
npm cache clean --force
```

## Install Angular 19
```bash
npm install -g @angular/cli@19
```
## Install Firebase Tools and CLI
```bash
npm i -g firebase-tools
```

## Install Google Gemini CLI
```bash
npm install -g @google/gemini-cli
```

Firebase MCP Server
https://firebase.blog/posts/2025/10/firebase-mcp-server-ga

gemini extensions install https://github.com/gemini-cli-extensions/firebase

## Create new application
```bash
ng new sharp-assist-ai --routing --ssr --style scss --skip-install --skip-git --strict
```
✔ Would you like to use the Server Routing and App Engine APIs (Developer Preview) for this server application? No  
CREATE sharp-assist-ai/angular.json (3057 bytes)  
CREATE sharp-assist-ai/package.json (1255 bytes)  
CREATE sharp-assist-ai/README.md (1536 bytes)  
CREATE sharp-assist-ai/tsconfig.json (942 bytes)  
CREATE sharp-assist-ai/.editorconfig (331 bytes)  
CREATE sharp-assist-ai/.gitignore (629 bytes)  
CREATE sharp-assist-ai/tsconfig.app.json (508 bytes)  
CREATE sharp-assist-ai/tsconfig.spec.json (449 bytes)  
CREATE sharp-assist-ai/.vscode/extensions.json (134 bytes)  
CREATE sharp-assist-ai/.vscode/launch.json (490 bytes)  
CREATE sharp-assist-ai/.vscode/tasks.json (980 bytes)  
CREATE sharp-assist-ai/src/main.ts (256 bytes)  
CREATE sharp-assist-ai/src/index.html (312 bytes)  
CREATE sharp-assist-ai/src/styles.scss (81 bytes)  
CREATE sharp-assist-ai/src/main.server.ts (328 bytes)  
CREATE sharp-assist-ai/src/server.ts (1852 bytes)  
CREATE sharp-assist-ai/src/app/app.component.html (20239 bytes)  
CREATE sharp-assist-ai/src/app/app.component.spec.ts (972 bytes)  
CREATE sharp-assist-ai/src/app/app.component.ts (304 bytes)  
CREATE sharp-assist-ai/src/app/app.component.scss (0 bytes)  
CREATE sharp-assist-ai/src/app/app.config.ts (447 bytes)  
CREATE sharp-assist-ai/src/app/app.routes.ts (80 bytes)  
CREATE sharp-assist-ai/src/app/app.config.server.ts (362 bytes)  
CREATE sharp-assist-ai/public/favicon.ico (15086 bytes)  

## install Java (Firebase Emulators)
```bash
winget install --id Microsoft.OpenJDK.21
```

## Add Angular Fire Schematic
```bash
ng add @angular/fire
```
✔ Determining Package Manager  
  › Using package manager: npm  
✔ Searching for compatible package version  
  › Found compatible package version: @angular/fire@19.2.0.  
✔ Loading package information from registry  
✔ Confirming installation  
✔ Installing package  
UPDATE package.json (1287 bytes)  
✔ Packages installed successfully.  
? What features would you like to setup? Authentication, Data Connect, Cloud Functions (callable)  
Using firebase-tools version 14.26.0  
? Which Firebase account would you like to use? wpbest@gmail.com  
✔ Preparing the list of your Firebase projects  
? Please select a project: sharp-assist-ai  
✔ Preparing the list of your Firebase WEB apps  
? Please select an app: sharp-assist-ai  
✔ Downloading configuration data of your Firebase WEB app  
✔ Are you ready to proceed? Yes  
✔ Your project already has existing services. Which would you like to set up local files for? us-west4/sharp-assist-ai  
I1124 04:49:00.221268   34588 codegen.go:80] [connector "example" javascriptSdk] Generating sources into   "C:\\Users\\willi\\OneDrive\\Documents\\GitHub\\sharp-assist-ai\\src\\dataconnect-generated"  
I1124 04:49:00.230867   34588 collector.go:107] connector "example" javascriptSdk wrote into  "C:\\Users\\willi\\OneDrive\\Documents\\GitHub\\sharp-assist-ai\\src\\dataconnect-generated"  
Generated sources: package.json [864B] README.md [7053B] esm\package.json [17B] angular\index.d.ts [671B]   angular\esm\package.json [17B] angular\index.cjs.js [682B] angular\esm\index.esm.js [645B] .guides/usage.md [1517B] index.cjs.js [587B] angular\README.md [11198B] .guides/setup.md [1631B] index.d.ts [1315B]  esm\index.esm.js [503B] angular\package.json [653B] .guides/config.json [236B]
I1124 04:49:00.235255   34588 installsdk.go:86] Running command: C:\nvm4w\nodejs\npm.cmd install file:src\dataconnect-generated  
    Generated Angular SDK Disabled. Please add `angular: true` to your connector.yaml  
UPDATE package.json (1455 bytes)  
UPDATE .gitignore (683 bytes)  
UPDATE src/app/app.config.ts (1279 bytes)  
✔ Packages installed successfully.  

## Configure Firebase
```bash
firebase init
```

## Add Material Design Schematic
```bash
ng add @angular/material
```


## Add Internationalization Localization (i18n)
```bash
ng add @angular/localize
```

## Add Apollo GraphQL Client Schematic
```bash
ng add apollo-angular
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To install the required packages do:

```base
npm install
```

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.