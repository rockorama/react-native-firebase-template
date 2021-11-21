export default async function readFile(
  content: string,
  name: string,
  mime: string,
): Promise<File> {
  const response = await fetch(content)
  let buffer
  if (content.startsWith('data:')) {
    buffer = await response.arrayBuffer()
  } else {
    buffer = await response.blob()
  }
  return new File([buffer], name, { type: mime })
}
