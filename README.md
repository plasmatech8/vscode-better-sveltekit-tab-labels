# Better Sveltekit Tab Labels

Changes the label on a editor tab in your VS Code editor
if the file is a route in your SvelteKit application.

![Preview](img/rough_day_huh.jpg)

> TODO: Animated preview image

## Features

Extension will activate if a `svelte.config.js` file exists in the root directory,
followed by `src/routes/` which contains SvelteKit routes.

By default, the extension changes route files to the following format:


| Type                   | Filepath                                | New Label        |
| ---------------------- | --------------------------------------- | ---------------- |
| Page                   | `/app/about/+page.svelte`               | /app/about 📄     |
| Page Module            | `/app/about/+page.js` (or `.ts`)        | /app/about 📄 🫙   |
| Page Module (server)   | `/app/about/+page.server.js` (or `.ts`) | /app/about 📄 🫙 ⚡ |
| Error                  | `/app/about/+error.svelte`              | /app/about ❗     |
| Layout                 | `/app/about/+layout.svelte`             | /app/about 🖼️     |
| Layout Module          | `/app/about/+layout.js`                 | /app/about 🖼️ 🫙   |
| Layout Module (server) | `/app/about/+layout.server.js`          | /app/about 🖼️ 🫙 ⚡ |
| Server                 | `/api/users/+server.js` (or `.ts`       | /app/users ⚡     |

Emoji characters worth considering:
* Data 💽 💾 💿 📀 🏗 ⚙️ ⚙
* Error ❗ ❌ 🚫 🆘 🛟
* Server 📶 📡 ⚡ 💻 🖥
* Layout 🖼️ 🌄 🌋 🗻 🏔 🏞 🏜
* Module 🥛 🍾 🫙 🧑‍💻

## Extension Settings

This extension contributes the following settings:

* `betterSvelteKitTabLabels.tabLabelTemplate`: String that is used to format the new tab label. Defaults to `"{routepath}{page}{layout}{error}{module}{server}"`.
* `better-sveltekit-tab-labels.routeTypeString.*`: String (can contain emojis) for a type of route file. It will populate the `tabLabelTemplate` if the file is applicable (otherwise populates as an empty string).
  * `page`: Defaults to " 📄"
  * `module`: Defaults to " 🫙"
  * `server`: Defaults to " ⚡"
  * `error`: Defaults to " ❗"
  * `layout`: Defaults to " 🖼️"

## Release Notes

TODO: Release something. Eventually. Maybe.

> ### 1.0.0
>
> Initial release of the extension.

> TODO: See [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
