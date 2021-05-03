# deafen-bot
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/rubek-joshi/deafen-bot/discord.js?color=%237289da)
![GitHub all releases](https://img.shields.io/github/downloads/rubek-joshi/deafen-bot/total)
![GitHub last commit](https://img.shields.io/github/last-commit/rubek-joshi/deafen-bot)
[![Lines Of Code](https://tokei.rs/b1/github/rubek-joshi/deafen-bot?category=code)](https://github.com/rubek-joshi/deafen-bot)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/rubek-joshi/deafen-bot)
![GitHub repo size](https://img.shields.io/github/repo-size/rubek-joshi/deafen-bot)

A simple discord bot that silences everyone present in the voice channel the user is in.

### Default prefix
`shh!` | `s!`

### Commands
Command | What it does?
------------ | -------------
`ping` | ping the bot and check if bot is responding or not
`mute` or `m` | mutes everyone in the voice channel the user is present in
`unmute` or `u` | unmutes everyone in the voice channel the user is present in
`timer` or `t` | mutes everyone in the voice channel the user is present in for the specified duration

### Example
```
s!m
s!mute
s!u
shh!u
s!t 30s
ssh!t 1h
ssh!timer 2min
```
For further info on setting duration of timer, please refer to this [repo](https://github.com/vercel/ms).

### Want to invite this bot?
[~~Bot Invite Link~~](https://discord.com/api/oauth2/authorize?client_id=765588360605204512&permissions=549657648&scope=bot)

This bot is currently hosted at Heruko which is free upto a certain extent. Might host this bot on my own server in the future so hold up until then. :)

### TODO
- [ ] Roles and Permission Handling
- [x] Dynamic prefix checks
- [ ] Play music option when using timer
