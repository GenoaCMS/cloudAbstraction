import type { Adapter } from './adapter.d'

type AuthenticationProvider<Extension extends object = object> = Extension & {
  name: string
  adapterPath: string
  adapter: Promise<typeof Adapter>
}

export type {
  Adapter,
  AuthenticationProvider
}
