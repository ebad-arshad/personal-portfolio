import emailjs from '@emailjs/browser';

interface Props {
    fName: string;
    lName: string;
    email: string;
    phoneNumber: string;
    message: any;
}

export const SendEmail = ({ fName, lName, email, phoneNumber, message }: Props) => {
    const templateParams = {
        from_name: fName + " " + lName,
        to_name: "Muhammad Ebad Arshad",
        email,
        message,
        phoneNumber,
    }
    return emailjs.send(process.env.SERVICE_ID!, process.env.TEMPLATE_ID!, templateParams, process.env.PUBLIC_KEY!)
}