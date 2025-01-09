import { CompositeValidator } from "@/infra/validators/composite-validator"
import { Validator } from "@/presentation/validator";
import { mock } from 'jest-mock-extended';

it('should return true when input is valid', () => {
  const emailValidator = mock<Validator>()
  emailValidator.validate.mockReturnValueOnce(true)

  const validator = new CompositeValidator({
    email: emailValidator
  })
  expect(validator.validate({
    email: 'example@mail.com'
  })).toBe(true)
})

it('should return false when input is not valid', () => {
  const emailValidator = mock<Validator>()
  emailValidator.validate.mockReturnValueOnce(false)
  const validator = new CompositeValidator({
    email: emailValidator
  })
  expect(validator.validate({
    email: 'example@mail.com'
  })).toBe(false)
})
