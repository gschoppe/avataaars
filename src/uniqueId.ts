let idCounter = 0

export default function uniqueId(prefix = ''): string {
  idCounter += 1
  return `${prefix}${idCounter}`
}
