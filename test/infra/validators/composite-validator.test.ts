import { CompositeValidator } from "@/infra/validators/composite-validator"
import { EmailValidator } from "@/infra/validators/email-validator"

it('should return true input is valid', () => {
  const validator = new CompositeValidator({
    email: new EmailValidator()
  })
  expect(validator.validate({
    email: 'example@mail.com'
  })).toBe(true)
})
