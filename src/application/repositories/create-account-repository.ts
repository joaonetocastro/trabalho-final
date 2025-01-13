import { User } from "@/domain/entities";
import { AccountProps } from "@/domain/@types/account";

export interface CreateAccountRepository {
  createAccount(input: AccountProps): Promise<User>
}
