import Config

config :griffin_ssg,
  passthrough_copies: ["assets"],
  collections: %{
    posts:  %{
      permalink: "/posts",
      list_layout: "list_posts",
      show_layout: "show_post"
    }
  }
