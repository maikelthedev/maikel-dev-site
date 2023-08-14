---
title: Elixir and Phoenix Course
image: "/posts/phoenix-elixir.webp"
excerpt: "Notes on a course web developer course that I'm doing"
date: "2023-08-14"
---
## Notes

### Section 1: Elixir Warmup
Installing is as simple as 

```bash
sudo apt install elixir
```

Elixir uses functional programming. 
Let's see how he tries to explain something no one has been able to explain properly without saying at lot of half-arsed bullshit. 

Mix is the thing you use same as NPM in Javascript world or CARGO in the Rust world. 

```bash
mix new cards
```

to create a new project. 

With 

```bash
iex -S mix
```
 on the folder you can run any project with a terminal-like thing, to update it to the latest version of the code type "recompile"


 arity is the number of arguments a function accepts, arity of 1 is it accepts 1, arity of 2 is it accepts two. 

 immutability: Eveyrthing that changes a data structure in Elixir returns a new variable. 

 Method with question at the end returns a tru or value. So contains? you know it rerturns true or false, uis just a convention though. Notice that when you call the funciton the ? is also part of the name, you don't Card.contains but Card.contains?

 Is this like....Haskell? It is reminding me to Haskell

 Is nice that I don't have to write "return" anywhere.

List comprehension looks a lot like in Python with zip()

MOst common operations in Elixir have their own methods in the standard library

### Section 2: Elixir's Amazing Pattern Matching

TBC