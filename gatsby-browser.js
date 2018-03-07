exports.onClientEntry = () => {
  // Check for a custom pathname
  const pathname = global.___pathname
  if (!pathname) return

  // Override the history location
  const history = global.___history
  history.location.pathname = pathname

  // Patch the resource loader
  const loader = global.___loader
  const { getResourcesForPathname } = loader

  loader.getResourcesForPathname = (path, ...args) => {
    return getResourcesForPathname(path === location.pathname ? pathname : path, ...args)
  }
}
