import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import contactTemplate from './email_templates/contactTemplate';
import { UserType } from '@contact/types'

const user_email : string = (process.env.user_email as string);
const admin_email : string = (process.env.admin_email as string);
const sendgrid_key : any = (process.env['SENDGRID_API_KEY'] as any);

const ContactEmail = async(user : UserType) => {
    const name = user.name;
    const organization_name = user.organizationName;
    const email = user.email;
    const contact_number = user.contactNumber;
    const details = user.details;
    
    const templateData = contactTemplate(name,organization_name,email,contact_number,details);
    
    //step 1
    const transporter = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: sendgrid_key
        })
    );

    //step 2
    var mailOptions={
        from:user_email,
        to:admin_email,
        subject:'Contact information',
        html: templateData.toString()
    };

    //step 3  
    const emailSend =  await transporter.sendMail(mailOptions)
    if(!emailSend){
        return {
            message : 'Technical Issue!, Please click on resend for verify your Email'
        }
    }
    else{
        return { 
            message : 'Email Send to admin'
        }
    }
}

export default ContactEmail