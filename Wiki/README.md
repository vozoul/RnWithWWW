# React-native-web

## Links Support:

- [BeTomorrow.com](https://blog.betomorrow.com/mutualisez-le-d%C3%A9veloppement-de-votre-site-web-et-de-votre-application-mobile-avec-react-native-web-acae9e15e383)
- [React Native for Web](https://github.com/necolas/react-native-web) Github link

## Working helpers

- official link [esdoc.org](https://esdoc.org/)
- config file exemple: [.esdocs.json](./Sources/.esdoc.json) Must be in root folder
- [Markdown editing](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) Github link
- [ESDocs](https://github.com/esdoc/esdoc-plugins/tree/master/esdoc-react-plugin) Github link

### create project first
` react-native init <project_name> `<br>
` cd <project_name> `<br>

### Install dependencies

#### ESDOC (code documentation help for developpement)

- using yarn<br>
    * yarn add esdoc
    * yarn add esdoc-standard-plugin
    * yarn add esdoc-react-plugin
    * yarn add esdoc-jsx-plugin
    * yarn add esdoc-ecmascript-proposal-plugin
    * yarn

- using npm<br>
    * npm i --save esdoc
    * npm i --save esdoc-standard-plugin
    * npm i --save esdoc-react-plugin
    * npm i --save esdoc-jsx-plugin
    * npm i --save esdoc-ecmascript-proposal-plugin
    * npm i

### configure esdoc

create file .esdoc.json in your root folder

---
` { `<br>
// source folder of your react-native app<br>
` "source": "./<app_folder>", `<br>
// docs folder is by default you can rename it, as you want<br>
` "destination": "./docs", `<br>
` "plugins": [ `<br>
` {"name": "esdoc-standard-plugin"}, `<br>
//exemple line if you add an other plugin <br>
` {"name": "esdoc-<plugin_name>", "option": {"<plugin_options_params>": "value"}} `<br>
` ] `<br>
` } `

### Document your code ...

### Use Esdoc

run ESDoc in your command line prompt

> ./node_modules/.bin/esdoc

### Documentation is done

see it in "./docs/index.html"
