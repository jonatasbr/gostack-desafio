# OBS.: desenvolvido em Windows, utilizando Docker Toolbox e o Genymotion como emulador de Android

# criar um container postgresdocker run --name dbmeetapp -e POSTGRES_PASSWORD=<SET_PASSWORD> -p 5432:5432 -d postgres

# criar um container redisdocker run --name redismeetapp -p 6379:6379 -d -t redis:alpine

# para instalar dependências e executar aplicação backend
cd gostack-desafio\backend
yarn
yarn dev

# para executar fila de e-mails
cd gostack-desafio\backend
yarn queue

# para instalar dependências e iniciar aplicação frontend web
cd gostack-desafio\frontend
yarn yarn start

# para instalar dependências e iniciar aplicação mobile
cd gostack-desafio\mobile
yarn react-native run-android
