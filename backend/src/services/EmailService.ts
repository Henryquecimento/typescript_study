interface IMailTo {
  name : string;
  email : string;
}

interface IMailMessage {
  subject : string;
  body : string;
  attachment ?: string[];
}

interface IMessageDTO{
  to: IMailTo;
  message: IMailMessage;
}

class EmailService {
  sendEmail({ to, message } : IMessageDTO) {
    console.log(`Email Sent to ${to.name}: ${message.subject}!`);
  }
}

export default EmailService;