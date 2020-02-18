# Antd Icons Fontawesome


This package can be used to replace the ant-design icons with fontawesome icons.

It can be used with antd4 and will reduce your bundle size. When somehow the tree shaking is not working as expected.

It contains all icons antd requires. The additional icons are not provided.


## Missing icons

If a icon is missing add it to `scripts/requiredIcons.csv`. And provide the name of the fontawesome icon one wants to replace the icon with and the style of the fontawesome icon.

## Usage

Add to your package.json this package as dependency:

```
"@ant-design/icons": "https://github.com/DavidSichau/antd-fa-icons.git",
```

This will then overwrite the `@ant-design/icons` package.

## Build

```
npm run build
```
