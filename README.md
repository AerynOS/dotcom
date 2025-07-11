TODO: Create main landing site + blog (potentially Astro) for "welcoming site" / project at AerynOS.com

## How to install

    npm install astro@5.3.1
    pushd node_modules/starlight-blog
    patch -i ../../patches/starlight-blog.patch -p1

Example patch ouput:

    ermo@dante:~/repos/aos/dotcom/node_modules/starlight-blog [main* +0 ~2 -0 !]
    $ patch -i ../../patches/starlight-blog.patch -p1
    patching file components/Preview.astro
    patching file libs/content.ts
    patching file package.json

## How to build

    npm run dev
