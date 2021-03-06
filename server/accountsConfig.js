Accounts.emailTemplates.from = 'no-reply@parentpickup.org';
Accounts.emailTemplates.siteName = 'Parent Pickup';

Accounts.emailTemplates.verifyEmail = {
    subject() {
        return 'Confirm Your Email Address Please';
    },
    text(user, url) {
        let emailAddress = user.emails[0].address,
          urlWithoutHash = url.replace('#/', ''),
          supportEmail = "no-reply@parentpickup.org",
          emailBody = "Thank you for signing up to use Parent Pickup!\n\n You signed up with " + emailAddress + " . Please confirm your email address.\n\n We will not enroll you in any mailing lists, nor will we ever share you email address or personal information for any reason.\n\n You can confirm you address by clicking the following link: \n\n " + urlWithoutHash

        return emailBody;
    },
}
