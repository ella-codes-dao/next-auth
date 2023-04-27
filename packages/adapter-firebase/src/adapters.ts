import type { AdapterUser } from "next-auth/adapters"

export interface RoleUser extends AdapterUser {
  role: string | null
}
