import { EmailValidator } from "@/infra/validators/email-validator"

it('should return true if email is valid', () => {
  const validator = new EmailValidator()
  expect(validator.validate('example@mail.com')).toBe(true)
})