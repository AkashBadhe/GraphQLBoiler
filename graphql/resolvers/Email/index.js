// The Email schema.
import EmailService from '../../../EmailService';
export default {
	Mutation: {
		sendEmail: (root, { from, to, cc, bcc, subject, body }) => {
			return new Promise((resolve, reject) => {
				var mailOptions = {
					from: from,
					to: to,
					cc: cc,
					bcc: bcc,
					subject: subject,
					html: body
				};
				EmailService.sendMail(mailOptions, function(error, info) {
					if (error) {
						reject({ result: error });
						console.log(error);
					} else {
						resolve({ result: info.response });
						console.log('Email sent: ' + info.response);
					}
				});
			});
		}
	}
};
