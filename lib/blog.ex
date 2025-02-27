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

  def sorted_posts(collections) do
    %{posts: %{public: posts_in_yes}} = collections

    # Sort posts by the `page.date` in descending order (latest first)
    Enum.sort_by(posts_in_yes, fn post ->
      # Parse the date string into DateTime
      post.page.date
    end, :desc)
  end

  def get_image(data) do
      if Map.has_key?(data, :image) do
        "/assets/img/" <> data.image
      else
        "/assets/img/default.png"

      end
  end
end
