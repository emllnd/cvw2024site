import {fetchSortedNonDraftPosts} from '$lib/utils'
import {json} from '@sveltejs/kit'

export const GET = async () => {
    const posts = await fetchSortedNonDraftPosts()

    const formatDate = (input) => {
        const date = new Date(input)
        if (date instanceof Date) {
            const month = date
                .toLocaleString('default', { month: 'long' })
                .substring(0, 3);
            return `${date.getUTCDate()} ${month} ${date.getFullYear()}`
        }
        return 'publish date error'
    }

    const formatPath = (input) => {
        //console.log(`formatPath: ${input}`)
        /*const inputNoBlog = input.replace('/blog/', '')
        if (inputNoBlog[7] == "-") {
            const fixedPathNoBlog = replaceAt(inputNoBlog, 7, '/');
            return `/blog/${fixedPathNoBlog}`
        }
        return 'publish path error'*/
        return input
    }

    const formattedPosts = posts.map(x => {
        return {
            path: formatPath(x.path),
            meta: {
                title: x.meta.title,
                date: x.meta.date,
                formattedDate: formatDate(x.meta.date),
            }
        }
    })
    return json(formattedPosts)
}
