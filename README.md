# reaction_bot
Automated reaction bot for slack groups!

This bot automatically adds a reaction to every message by a single user. Custom emojis are supported!

# Installation

Requirements:
* git
* npm
* node.js

## Instructions (Unix Systems)
Navigate to whatever directory you want with
```
cd ./.../... 
```
Clone this repository
```
git clone https://github.com/AroundTheLines/reaction_bot
```
Open up ```routes/reactions.js``` and edit ```slackToken, nameFor, emoji``` to be your slack token, the name of the person you want the bot to react to, and the emoji to react with respectively.

From the reactionBot folder, start the server with
```
node app.js
```
Congrats! You've got your own reaction bot now. Have fun with it!
