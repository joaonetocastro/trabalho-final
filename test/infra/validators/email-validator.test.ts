import { EmailValidator } from "@/infra/validators/email-validator"

it('should return true if email is valid', () => {
  const validator = new EmailValidator()
  expect(validator.validate('example@mail.com')).toBe(true)
})
it('should return false if @ is not present', () => {
  const validator = new EmailValidator()
  expect(validator.validate('examplemail.com')).toBe(false)
})