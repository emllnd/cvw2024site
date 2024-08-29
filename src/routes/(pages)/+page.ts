export async function load({ params, fetch }){
    const response = await fetch(`/api/content`)
    const navbarPosts = await response.json()

    const post = await import(`../../content/landing.md`)
    const { title, date } = post.metadata
    const content = post.default

    return {
        navbarPosts,
        content,
        title,
        date,
    }
}
