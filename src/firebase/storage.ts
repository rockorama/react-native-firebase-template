import { getDownloadURL, getStorage, ref, uploadBytes } from '@firebase/storage'

import { getAuthenticatedUser } from './authentication'
import { app } from './client'

export const storage = getStorage(app)
export const uploadFile = async (file: File, path: string): Promise<string> => {
  const fileRef = ref(storage, path)
  await uploadBytes(fileRef, file)
  return getDownloadURL(fileRef)
}

export const uploadUserFile = async (
  file: File,
  folder: string,
): Promise<string> => {
  const user = getAuthenticatedUser()
  const path = `${user.uid}/${folder}/${file.name}`
  return uploadFile(file, path)
}
