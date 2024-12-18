

# Express - Sample

## 📖 Sobre o Projeto
Este projeto é um repositório base para criação de api usando node-express, utilizando Docker para facilitar a hospedagem e isolamento do ambiente.

## 🚀 Tecnologias e Ferramentas
#### Bibliotecas e Tecnologias Utilizadas:
| Tecnologia           | Versão    |
|----------------------|-----------|
| **Runtime**           |           |
| Node                  | v23.x     |
| **Desenvolvimento**   |           |
| Docker Engine         | vXX.X.X   |
| Bundler               | v2.6.0    |


### Organização do projeto
```
/
├─📁 .devcontainer          ->  Configurações do devcontainer
├─📁 .vscode                ->  Definições de ambiente para o VSCode
├─📁 docs                   ->  Artefatos para documentação do repo
├─📁 src                    ->  Entrypoint da aplicação
│ │ ├─ 📁 config            ->  configurações usadas na api
│ │ │  ├─ 🇹 prisma.ts         ->  conexão com o prisma ORM
│ │ │  ├─ 🇹 serverconfig.ts   ->  configurações padrão para o servidor(logs)
│ │ │       ...
│ │ ├─📁 Api                    ->  Entrypoint da aplicação
│ │ │ │ ├─ 📁 exemple           ->  configurações usadas na api
│ │ │ │ │  ├─ 🇹 controller.ts  ->  responsáveis por lidar com as requisições e respostas HTTP
│ │ │ │ │  ├─ 🇹 index.ts       ->  responsavel por implementar a interface da Api
│ │ │ │ │  ├─ 🇹 middleware.ts  ->  função que está entre um pedido HTTP e a resposta final que o servidor envia de volta para o cliente.
│ │ │ │ │       ...
│ │        ├─ 🇹 index.ts       ->  interface
│ │            ...
│ ├─ 📁 lifecycle-manager      ->  Modulo de controle de estado de execução
│ │    ├─ 🇹 index.ts                    ->  gerenciador de ciclo de vida
│ │         ...
│ ├─ 📁 Utils                            ->  Modulo de codigos utils para toda a aplicação
│ │    ├─ 🇹 exemple.ts                    ->  exemple
│ │         ...
│ │
│ ├─ 🇹 index.ts            ->  Entrypoint server
│   ...
├─📁 tests                   ->  Testes da aplicação
│   ├─ 🇹 ....ts             -> test1
    ├─🌐 routes.http         -> envia solicitações HTTP e visualiza a resposta diretamente no vscode
├─📄 .gitignore
├─📄 Makefile               ->  Automações para o ambiente
├─📄 package.json           ->  Definições para o projeto
├─📄 README.md

```

## Montando o ambiente

Este repositório esta organizando em um devcontainer.
E para instacia-lo no VSCODE é recomendado as seguintes configurações:

#### Extenções recomendadas

- Name: Remote Development
- Id: ms-vscode-remote.vscode-remote-extensionpack
- Description: An extension pack that lets you open any folder in a container, on a remote machine, or in WSL and take advantage of VS Code's full feature set.
- Version: 0.25.0
- Publisher: Microsoft
- VSCode Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

#### Docker Engine

É obrigatório ter o Docker Engine já instalado e cunfigurado. Para mais informações de como instalar o Docker Engine em seu SO, ver em:

- Instruções para instalação do Docker Engine: [Ver o link](https://docs.docker.com/engine/install/)

#### Procedimento para instanciar o projeto no VSCODE
1. Com o pack de extenções instalado,
1. Realize o clone/fork deste repositório,
1. Abra o diretorio deste repositorio no VSCODE como um projeto,
1. Use o Comando _Dev Containers: Reopen in Container_ da paleta de comandos do VSCODE. _(F1, Ctrl+Shift+P)_.

Depois da compilação do container o VSCode abrirá o repositório em um ambiente encapsulado e executando diretamente de dentro do container como configurado nas definições do **/.devconainer**.

#### Procedimento para iniciar

# Inicie o servidor 

```
$> npm run dev 
```
