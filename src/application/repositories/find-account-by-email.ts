import { User } from "@/domain/entities";

export interface FindAccountByEmail {
  findAccountByEmail(email: string): Promise<User | null>
}