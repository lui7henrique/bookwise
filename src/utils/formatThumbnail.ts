export const formatThumbnail = (cover: string) => {
  return cover?.startsWith('public/') ? cover.replace('public/', '/') : cover
}
