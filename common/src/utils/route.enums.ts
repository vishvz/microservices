export enum COMMON_ROUTE {
  api = '/api',
  dashboard = '/dashboard',
}

export enum BANNER_SLIDER_ROUTE {
  createBannerSlider = '/banner-slider/create',
  deleteBannerSlider = '/banner-slider/delete/:id',
  inActiveBannerSlider = '/banner-slider/inactive/:id',
  editBannerSlider = '/banner-slider/edit/:id',
  listAll = '/banner-slider',
}
export enum FAQ_ROUTE {
  createFaq = '/faq/create',
  deleteFaq = '/faq/delete/:id',
  inActiveFaq = '/faq/inactive/:id',
  editFaq = '/faq/edit/:id',
  listAll = '/faq',
}
