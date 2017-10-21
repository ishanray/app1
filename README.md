dev:
=====
- brew install yarn
- mkdir app
- cd app
- yarn add next react react-dom
- yarn run dev

prod:
======
- curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
- echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
- sudo apt-get update && sudo apt-get install yarn
- yarn global add pm2
- pm2 start npm -- start
