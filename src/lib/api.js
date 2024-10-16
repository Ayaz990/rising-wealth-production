const BLOG_URL = process.env.BLOG_URL;

export async function getPosts() {
  try {
    const preReq = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts`, {
      method: "GET",
    });

    const numberOfPages = Number(preReq.headers.get("x-wp-totalpages")) || 1; // Default to 1 if not available

    const pagesArr = Array.from({ length: numberOfPages }, (_, i) => i + 1); // Create array based on total pages

    const postsArr = await Promise.all(
      pagesArr.map(async (index) => {
        const data = await fetch(
          `${BLOG_URL}/wp-json/wp/v2/posts?page=${index}`,
          {
            method: "GET",
          }
        );

        const posts = await data.json();

        return await Promise.all(
          posts.map(async (post) => {
            const mediaUrl = post.featured_media ? 
              `${BLOG_URL}/wp-json/wp/v2/media/${post.featured_media}` : null;
            const media = mediaUrl ? await fetch(mediaUrl).then(res => res.json()) : null;

            const categoriesData = await fetch(
              `${BLOG_URL}/wp-json/wp/v2/categories?include=${post.categories}`,
              {
                method: "GET",
              }
            );

            const categories = await categoriesData.json();

            return {
              ...post,
              featured_media: media ? media.source_url : null,
              categories,
            };
          })
        );
      })
    );

    return {
      message: "Hello",
      posts: postsArr.flat(),
      numberOfPages,
    };
  } catch (error) {
    console.log("Error in getPosts:", error.message);
    throw error;
  }
}

export async function getData(postSlug) {
  try {
    const data = await fetch(
      `${BLOG_URL}/wp-json/wp/v2/posts?slug=${postSlug}`,
      {
        method: "GET",
      }
    );

    const postArr = await data.json();
    const post = postArr[0];

    if (!post) return { status: 404, message: "Post Not Found" };

    const mediaData = post.featured_media
      ? await fetch(`${BLOG_URL}/wp-json/wp/v2/media/${post.featured_media}`)
      : null;

    const featured_media = mediaData ? await mediaData.json() : null;

    return {
      ...post,
      featured_media: featured_media ? featured_media.source_url : null,
    };
  } catch (error) {
    console.log("Error in getData:", error);
    throw error;
  }
}
