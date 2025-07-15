## NodeJS install prerequisites

Before attempting to compile and show the website locally, please ensure that:

- NodeJS is installed on your system
- `pnpm` is available and in your path
  - with NodeJS installed, you can run the following from your ${HOME} directory:
    ```
    npm install pnpm@latest-10
    ```
  - Make sure you add `${HOME}/node_modules/.bin` to your shell ${PATH}
- With the above prerequisites satisfied, clone the present repo and cd into the root of it.
- Then run:
  ``` 
  pnpm install
  ```

## How to build and show the site locally in your browser

After the above import and install operations have completed successfully on your system, run:

    pnpm run dev

... and follow the instructions shown.

At this point, any time you edit a page, the changes should show up live in your browser.
