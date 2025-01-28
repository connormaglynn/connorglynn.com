export const pageview = (url) => {
  // @ts-ignore
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
