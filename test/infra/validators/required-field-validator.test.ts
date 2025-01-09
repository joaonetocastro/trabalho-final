import { RequiredFieldValidator } from "../../../src/infra/validators/required-field-validator"

it('should return true if input is not empty', () => {
  const validator = new RequiredFieldValidator()
  expect(validator.validate(2)).toBe(true)
})