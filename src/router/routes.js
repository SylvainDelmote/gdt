
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HS/IndexPage.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/HS/ErrorNotFound.vue')
  }
]

// Get all the files in the pages directory
const pages = import.meta.globEager('pages/*.vue')
// For each page file, add a new route to the routes array
Object.keys(pages).forEach(path => {
  const name = path.split('/').pop().split('.')[0].replace('Page', '')
  console.log(name)
  routes[0].children.push({
    path: `/${name}`,
    component: pages[path].default
  })
})

export default routes
