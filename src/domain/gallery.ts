export interface GalleryImage {
  id: string
  src: string
  alt: string
}

export interface Gallery {
  id: string
  title: string
  description?: string
  images: GalleryImage[]
}
