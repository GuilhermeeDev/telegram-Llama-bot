#!/bin/bash
# Deixando seu deploy mais leve, removendo arquivos desnecessários.
# RODE APENAS PARA DEPLOY, pois apagara arquivos importantes para desenvolvimento do projeto.
rm -rf dist/ packages.txt setup.sh .gitignore README.md pre-deploy.sh
