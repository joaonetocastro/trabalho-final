import { AccountType } from "@/domain/@types/account";
import { CreateAccount, User } from "@/domain/entities";
import { CreateAccountController } from "@/presentation/controllers/create-account-controller"
import { mock } from 'jest-mock-extended';

it('should return an account if everything is ok', async () => {
  const stub = mock<CreateAccount>()
  const controller = new CreateAccountController(stub)
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

  stub.execute.mockResolvedValueOnce(new User(body))
  const response = await controller.execute(body)

  expect(response.id).toEqual(body.id)
})