import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import signUpTemplate  from './email_templates/signUpTemplate';

const user_email : string = (process.env.user_email as string);
const sendgrid_key : any = (process.env['SENDGRID_API_KEY'] as any);

const sendSignUpEmail = async(email : string,token : string) => {
    const url = `http://localhost:3000/signUpLoader/${token}`
    const templateData =  signUpTemplate(url);
        //step 1
    const transporter = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: sendgrid_key
        })
    );

    //step 2
    var mailOptions={
        from:user_email,
        to:email,
        subject:'Verify Your Email Address',
        html: templateData.toString()
    };

    //step 3  
    const emailSend =  await transporter.sendMail(mailOptions)
    if(!emailSend){
        return  'Technical Issue!, Please click on resend for verify your Email.' 
    }
    else{
        return `Verification email sent to: ${email}`
    }
}

export default sendSignUpEmail
