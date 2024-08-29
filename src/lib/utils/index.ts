export const fetchSortedNonDraftPosts = async () => {
    const allPosts = await fetchContentItems(false)
    const nonDraftPosts = allPosts.filter(x => x.meta.draft != true)
    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(a.meta.date) - new Date(b.meta.date)
    })
    return sortedPosts
}

export const fetchLanding = async () => {
  return await fetchContentItems(true)
}

const fetchContentItems = async (landing: boolean) => {
    const postFiles = landing ? await landingFile() : await allContentFiles()
    const contentDir = '/src/content/'
    const iterablePostFiles = Object.entries(postFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = '/' + path
                .replace(contentDir, '')
                .replace('.md', '')

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    return allPosts
}

const landingFile = async (): Promise<Record<string, () => Promise<unknown>>> => {
  return import.meta.glob('/src/content/landing.md')
}

const allContentFiles = async (): Promise<Record<string, () => Promise<unknown>>> => {
    return import.meta.glob('/src/content/**/*.md')
}
