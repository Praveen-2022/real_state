// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import emailjs from "@emailjs/browser";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { fullName, mobile, email } = req.body;

    // Replace these with your EmailJS service and template IDs
    const serviceID = 'service_75z24gw';
    const templateID = 'template_ajf7eyq';
    const userID = 'ouygEjLnbklGCMcBv';

    try {
      const templateParams = {
        fullName,
        mobile,
        email,
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('EmailJS error:', error);
      return res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
