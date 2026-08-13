# Plomero San Juan website handoff

This is the editable source project for the Plomero San Juan website.

## Editing the website

- Main page content: `app/page.tsx`
- Styling: `app/globals.css`
- Images and logos: `public/`

## Previewing changes

1. Install Node.js 22 or later.
2. In the project folder, run `npm install`.
3. Run `npm run dev`.
4. Open the local address shown in the terminal.

## Publishing

The project is configured as a modern web app. The simplest route is to upload this folder to a GitHub repository and connect it to a hosting provider that supports Node.js/Cloudflare Workers. Set the build command to `npm run build`.

## Important

The original saved `.htm` file is only a browser snapshot and depends on its companion assets folder. Use this project folder for all future edits and publishing.
