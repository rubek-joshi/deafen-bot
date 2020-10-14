# deafen-bot
A simple discord bot that silences everyone present in the voice channel the user is in.

## Default prefix
`shh!` | `s!`

## Commands
Command | What it does?
------------ | -------------
`mute` or `m` | mutes everyone in the voice channel the user is present in
`unmute` or `u` | unmutes everyone in the voice channel the user is present in
`timer` or `t` | mutes everyone in the voice channel the user is present in for the specified duration

## Example
```
s!m
s!u
shh!m
shh!u
ssh!timer 30s
ssh!timer 2min
```
For further info on setting duration of timer, please refer to this [repo](https://github.com/vercel/ms).

## Want to invite this bot?
[Bot Invite Link](https://discord.com/api/oauth2/authorize?client_id=765588360605204512&permissions=549657648&scope=bot)
