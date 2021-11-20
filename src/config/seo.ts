import SERVER_URL from './serverUrl'

export const SITE_DATA = {
  title: 'Your Site',
  description: 'Killer Description',
  url: SERVER_URL,
}

export const OPEN_GRAPH = {
  ...SITE_DATA,
  images: [{ url: SERVER_URL + '/og-image.png' }],
  site_name: SITE_DATA.title,
}
