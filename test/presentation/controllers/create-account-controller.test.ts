import { AccountType } from "@/domain/@types/account";
import { CreateAccount, User } from "@/domain/entities";
import { CreateAccountController } from "@/presentation/controllers/create-account-controller"
import { Validator } from "@/presentation/validator";
import { mock } from 'jest-mock-extended';

it('should return an account if everything is ok', async () => {
  const stub = mock<CreateAccount>()

  const validator = mock<Validator>()
  validator.validate.mockReturnValue(true)

  const controller = new CreateAccountController(stub, validator)
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

it('should throw error if validation fails', async () => {
  const stub = mock<CreateAccount>()

  const validator = mock<Validator>()
  validator.validate.mockReturnValue(false)

  const controller = new CreateAccountController(stub, validator)
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

  expect(controller.execute(body)).rejects.toThrow(new Error('Failed to validate body.'))
})
