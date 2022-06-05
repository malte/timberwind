# Timberwind

Tags: wordpress, timber, tailwind, alpine, no tooling
License: MIT
License URI: https://opensource.org/licenses/mit-license.php

## Description

Timberwind is a Wordpress theme scaffolding, without any tooling, using
* Markup: Timber, the twig template language wp plugin from upstatement.com
* Styling: Tailwind css 3.* with Jit (Just in time), so no purging necessary. the css does not get minified (yet).
* Interaction: Alpine.js for all thing javascript

## Changelog

**0.9**
* added Timber
* added Tailwind 3.*
* added alpine.js
* responsive burger menu from wp-menu


## How to use

clone and run

node dev/build/watch script:
`npx tailwindcss -i ./src/input.css -o ./theme/style.css --watch`

when ready zip theme folder and use on your wp installation