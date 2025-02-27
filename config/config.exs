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


  defmodule Blog do
    @moduledoc """
    Documentation for `Blog`.
    """

    @doc """
    Hello world.

    ## Examples

        iex> Blog.hello()
        :world

    """
    def hello do
      :world
    end

    def sorted_posts(collections, url) do

      %{posts: %{public: posts_in_yes}} = collections

      # Sort posts by the `page.date` in descending order (latest first)
      sorted_posts = Enum.sort_by(posts_in_yes, fn post ->
        # Parse the date string into DateTime
        post.page.date
      end, :desc)

      case url do
        "/blog/" -> sorted_posts
        _ -> Enum.take(sorted_posts, 8)
      end
    end

    def sorted_projects(collections, url) do

      %{posts: %{projects: posts_in_yes}} = collections

      # Sort posts by the `page.date` in descending order (latest first)
      sorted_posts = Enum.sort_by(posts_in_yes, fn post ->
        # Parse the date string into DateTime
        post.page.date
      end, :desc)

      case url do
        "/projects/" -> sorted_posts
        _ -> Enum.take(sorted_posts, 8)
      end
    end

    def get_image(data) do
        if Map.has_key?(data, :image) do
          "/assets/img/" <> data.image
        else
          "/assets/img/default.png"

        end
    end
  end
