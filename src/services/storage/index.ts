interface ObjectReference {
  bucket: string
  name: string
}

interface StorageObject {
  name: string
  size: number
  lastModified: Date
}

type objectPayload = string | Buffer | NodeJS.ReadableStream

interface ObjectData {
  data: NodeJS.ReadableStream
}

interface DirectoryListingParams {
  startAfter?: string
  limit?: number
}

interface DirectoryContents {
  files: StorageObject[]
  directories: string[]
}

interface Adapter {
  getObject: (reference: ObjectReference) => Promise<ObjectData>
  getSignedURL: (reference: ObjectReference, expires: Date) => Promise<string>
  getPublicURL: (reference: ObjectReference) => Promise<string>
  uploadObject: (reference: ObjectReference, data: objectPayload) => Promise<void>
  deleteObject: (reference: ObjectReference) => Promise<void>
  listDirectory: (reference: ObjectReference, params?: DirectoryListingParams) => Promise<DirectoryContents>
  createDirectory: (reference: ObjectReference) => Promise<void>
}

export type {
  ObjectReference,
  StorageObject,
  objectPayload,
  ObjectData,
  DirectoryListingParams,
  DirectoryContents,
  Adapter
}
