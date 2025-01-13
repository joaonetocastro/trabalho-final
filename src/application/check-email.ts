export class CheckEmail {
  email: string

  constructor (email: string) {
    this.email = email
  }

  // Validates an email using a regular expression.
  static validateWithRegex (email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validates the instance's email property using regex
  validate (): boolean {
    return CheckEmail.validateWithRegex(this.email)
  }
}

// Example usage
const validatorInstance = new CheckEmail('test@example.com')
console.log('Validation Result:', validatorInstance.validate()) // Output: true
