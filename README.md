# Next.js + Feature-Sliced Design

## Folders description
| Folder       | Description                                                                                                     |
|--------------|-----------------------------------------------------------------------------------------------------------------|
| app          | Next App folder for [App Routing](https://nextjs.org/docs/app/building-your-application/routing#the-app-router) |
| public       | Public files                                                                                                    |
| src/app      | App FSD Layer                                                                                                   |
| src/pages    | Pages FSD Layer                                                                                                 |
| src/widgets  | Widgets FSD Layer                                                                                               |
| src/features | Features FSD Layer                                                                                              |
| src/entities | Entities FSD Layer                                                                                              |
| src/shared   | Shared FSD Layer                                                                                                |


## Remove junk _.gitkeep_ files

### UNIX
```bash
rm -rf .src/app/.gitkeep .src/entities/.gitkeep .src/features/.gitkeep .src/shared/.gitkeep .src/widgets/.gitkeep ./public/.gitkeep
```

### WINDOWS
```bash
del .\src\app\.gitkeep 
del .\src\entities\.gitkeep
del .\src\features\.gitkeep
del .\src\shared\.gitkeep
del .\src\widgets\.gitkeep
del .\public\.gitkeep
```

This repo uses such development assistants

* Eslint
* Prettier
* Stylelint