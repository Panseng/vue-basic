export function handleRoutes (routes) {
  let tem = []
  routes.forEach((route) => {
    tem.concat(route.children)
  })
  return tem
}
