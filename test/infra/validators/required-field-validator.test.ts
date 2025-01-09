import { RequiredFieldValidator } from "../../../src/infra/validators/required-field-validator"

it('should return true if input is not empty', () => {
  const validator = new RequiredFieldValidator()
  expect(validator.validate(2)).toBe(true)
})

it('should return false if input is empty', () => {
  const validator = new RequiredFieldValidator()
  expect(validator.validate(undefined)).toBe(false)
  expect(validator.validate(null)).toBe(false)
})