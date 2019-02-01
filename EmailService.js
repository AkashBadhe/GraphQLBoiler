import nodemailer from 'nodemailer';

var emailService = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'akashbadhe1992@gmail.com',
		pass: 'Askext@003'
	}
});

export default emailService;
