import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: 'Henryque', email: 'henry@mecha.com'
  }
];

export default {
  async index(req: Request, res:Response) {
    return res.json(users);
  },
  async create(req: Request, res:Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: { 
        name: 'Henryque',
        email: 'henry@random.com'
      },
      message: { 
        subject: 'Welcome friend!', 
        body: 'Heey, nice to meet you!!'
      }
    });

    res.send();
  }
};