// if you want to generate a static html file
// for your page.
// Documentation: https://kit.svelte.dev/docs/page-options#prerender
export const prerender = true;

// if you want to Generate a SPA
// you have to set ssr to false.
// This is not the case (so set as true or comment the line)
// Documentation: https://kit.svelte.dev/docs/page-options#ssr

export const ssr = true; // server side rendering

// Ordinarily, SvelteKit hydrates your server-rendered HTML
// into an interactive client-side-rendered (CSR) page. Some
// pages don't require JavaScript at all — many blog posts
// and 'about' pages fall into this category. In these cases
// you can disable CSR
// // Documentation: https://kit.svelte.dev/docs/page-options#csr

export const csr = true; // client side rendering

// How to manage the trailing slashes in the URLs
// the URL for about page will be /about with 'ignore' (default)
// the URL for about page will be /about/ with 'always'
// https://kit.svelte.dev/docs/page-options#trailingslash
export const trailingSlash = 'always';
