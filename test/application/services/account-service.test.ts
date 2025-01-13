import { CreateAccountRepository } from "@/application/repositories/create-account-repository"
import { FindAccountByEmail } from "@/application/repositories/find-account-by-email"
import { AccountService } from "@/application/services/account-service"
import { AccountType } from "@/domain/@types/account"
import { User } from "@/domain/entities"
import { mock } from "jest-mock-extended"

it('should return new account if created', async () => {
  const stub = mock<CreateAccountRepository>()
  const findByEmailStub = mock<FindAccountByEmail>()
  const body = {
    id: '123',
    name: 'my name',
    email: 'example@example.com',
    cpf: '11111111111',
    password: 'any_password',
    car_plate: 'OCXD1212',
    type: AccountType.DRIVER,
    password_algorithm: 'bcrypt'
  }

  stub.createAccount.mockResolvedValueOnce(new User(body))
  const service = new AccountService(stub, findByEmailStub)
  const response = await service.createAccount(body)

  expect(response.id).toEqual(body.id)
})
it('should throw error if email is in use', async () => {
  const stub = mock<CreateAccountRepository>()
  const findByEmailStub = mock<FindAccountByEmail>()
  const body = {
    id: '123',
    name: 'my name',
    email: 'example@example.com',
    cpf: '11111111111',
    password: 'any_password',
    car_plate: 'OCXD1212',
    type: AccountType.DRIVER,
    password_algorithm: 'bcrypt'
  }
  findByEmailStub.findAccountByEmail.mockResolvedValue(new User(body))

  stub.createAccount.mockResolvedValueOnce(new User(body))
  const service = new AccountService(stub, findByEmailStub)

  expect(() => service.createAccount(body)).rejects.toThrow(new Error('Email in use.'))
})