TODO: Create main landing site + blog (potentially Astro) for "welcoming site" / project at AerynOS.com

## How to install

    npm install astro@5.3.1
    pushd node_modules/starlight-blog
    patch -i ../../patches/starlight-blog.patch -p1
    popd

Example patch ouput:

    $ patch -i ../../patches/starlight-blog.patch -p1
    patching file components/Preview.astro
    patching file libs/content.ts
    patching file package.json

## How to build

    npm run dev
