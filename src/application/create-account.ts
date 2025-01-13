import { v4 as uuidv4 } from 'uuid' // For generating unique IDs

interface Account {
  id: string
  name: string
  email: string
  cpf: string
  password: string
  car_plate?: string | null
  is_passenger?: boolean
  is_driver?: boolean
  password_algorithm?: string
}

interface AccountRepository {
  findByEmail(email: string): Promise<Account | null>
  save(account: Account): Promise<void>
}

interface CreateAccountInput {
  name: string
  email: string
  cpf: string
  password: string
  car_plate?: string | null
  is_passenger?: boolean
  is_driver?: boolean
  password_algorithm?: string
}

export class CreateAccount {
  constructor (private accountRepository: AccountRepository) {}

  async execute (input: CreateAccountInput): Promise<Account> {
    const {
      name,
      email,
      cpf,
      password,
      car_plate = null,
      is_passenger = true,
      is_driver = false,
      password_algorithm = 'bcrypt'
    } = input

    // Check if the email is already in use
    const existingAccount = await this.accountRepository.findByEmail(email)
    if (existingAccount) {
      throw new Error('Email already in use')
    }

    // Create a new account object
    const account: Account = {
      id: uuidv4(),
      name,
      email,
      cpf,
      password,
      car_plate,
      is_passenger,
      is_driver,
      password_algorithm
    }

    // Save the account to the repository
    await this.accountRepository.save(account)

    return account
  }
}
