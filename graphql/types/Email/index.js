export default `
  type EmailResult {
    result: String!
  }
  type Mutation {
    sendEmail(from: String!, to: String!, cc: String!, bcc: String!, subject: String!, body: String! ): EmailResult
  }
`;
