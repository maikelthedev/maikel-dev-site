---
title: Elixir and Phoenix Course
image: "/posts/phoenix-elixir.webp"
excerpt: "Notes on an Elixir course that I'm doing"
date: "2023-08-14"
---

## Section 1: Elixir Warmup
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

## Section 2: Elixir's Amazing Pattern Matching

Pattern matching is elixir replacement for variable assignment???? That's what he says

Is a bit like destructuring with Javascript so if Cards.deal() returns a bunch of cards AND another bunch of cards you cal name it

```bash
{bunch_of_cards, another_bunch_of_cards} = Cards.deal(deck,2)
```

Oh this section is only 57 minutes, I should be fast going through it. 

UNRELATED NOTE: I need to set feeding timers now that I'm back in bulking

BEAM = Bogdan's Erlang Abstract Machine. Like the JVM. 

The reason to knwo the relationship between Elixir and Erlang is that some exceptional times you might need to call Erlang code, his example is to save stuff. 

Atom are like values that are like, kind of strings. I'm not really getting what he means with this. Two most commons are :ok and :error. 
I think I need to figure this atom thing out of this course. 

If you hard code a value on the left hand side, elixir is going to require the same one on the left

e.g.

```bash
["red", colour] = ["red", "blue"] # YES
["red", colour] = ["green", "blue"] # NO, won't compile
```

To ignore an element use _element. So that the compilter (eg: _reason) doesn't alert you you're not using that variable. You still need it for pattern, matching. 

Pipe operator needs very consistent first arguments as they will be replaced with the result of the previous code. 

## Section 3: Testing and Documentation

Install the Xdoc? package. Go to mix.exs, inside deps add {:ex_doc} then 

```bash
mix deps.get
```

For some reason mix docs doesn't work. I get this error
/usr/lib/erlang/lib/parsetools-2.3.2/include/yeccpre.hrl: no such file or directory

But as someone metions goes away with sudo apt install erlang

Fuck me, that's beautiful docs. 

If you want to add examples, use ## examples and add 3 tabs to separate it. Then it'll show formated. 

Testing comes already from Elixir, not additional library needed (same a Rust)

You use "mix test" for that

Anything you put as ## Examples becomes a test too. 
When you write those examples, which happen to become tests, ensure you only paste the code result of the end one, there's no point on pasting the code of the middle or first part fo the example. Otherwise you're creatin assertions for no reason (retesting what should have been tested before). 

Is important to follow the right formating (pound pound exmaples, 3 tabs for the first command)

Example of a test inside a test file like cardS_test.ex

```elixir
defmodule CardsTest do
  use ExUnit.Case
  doctest Cards

  test "create_deck_makes 20 cards" do
    deck_length = length(Cards.create_deck)
    assert deck_length == 20
  end
end
```

You can use two keywords for **testing** assert and **refute**

## Section 4: Side topics

Maps are like javascript objects. 

Youc reate them with % like colors = ${primary: "red"} would be equivalent to javascript const colours = {primary: "red"}

Imagine you use Map.put(colors, :primary, "blue") to update a map called colors, a key on it called primary (not explanation of why it has to be an atom), to the colour blue. What you get is NOT EVER a modified original colors map, but a new map. As usual, sstructures an immutable. Is like every structure in Elixir is like a String in Java. 

Keyboards list is a list with tuples with atoms, but name, like colors = [{:primary, "red"}, {:secondary, "green"}] to get the value of primary you'd use

colors[:primary]

he's really bad at explaining atoms. 

## Section 5: Image manipulation with Elixir

You really need to figure this ":" atom thing. 

He's now using :crypto.hash() library with a half-arsed explanation of what does that : <-- do. 

## Section 6: Struts - Elixir's Data Modelling Tool. 

Not sure why he divided these two sections. 

structs are maps with advantages (default values, compile check properties)

To create a struct use defstruct , example

```elixir
defmodule Identicon.Image do
  defstruct hex: nil
end
```

nil is nothing in Elixir?

You cannot attach functions into a struct (unlike a class in other languages), this is a lot like Rust. 

For parttiern matching with arbitrarily long use tail as in 

[r,g,b | tail] = hex_list

This is how you call a function from another one, you use the ampersand and also the arithwahtever it has to identify it from the other versions. 

|> Enum.map(&mirror_row/1)

Notice one thing in the code below

The first thing you pass is the input but since that has been transformed time and time again, you pass it again to the last one save_image because what it is reciveing is not anymore the input as first argument, so is like (what_others_have_done, input)

```bash
  def main(input) do
    input
    |> hash_input
    |> pick_color
    |> build_grid
    |> filter_odd_squares
    |> build_pixel_map
    |> draw_image
    |> save_image(input)
  end
```

## Review notes FOR LATER once I finish the course. 

The course is dated, here https://www.udemy.com/course/the-complete-elixir-and-phoenix-bootcamp-and-tutorial/learn/lecture/5911740#questions/10868796

you cannot know what's missing unless you search for what other users of this course put there, he doesn't explain you need egb and is not in standard lib. 

