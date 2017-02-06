const globalConstants = {
     LOCALURl : 'http://localhost:8001',
     MONGODB : {
          LOCALHOST : {
               URI : 'mongodb://localhost/mangal',
          }
     },
     EMAIL : "mangal.singh@mobilyte.com",
     REGISTERATION_TEMPLATE : "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td style=\"background-color:#fff\">&nbsp;<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:600px\"><tbody><tr><td style=\"background-color:#EBF8A4\"><table align=\"center\" border=\"0\" cellpadding=\"15\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td>New Account</td></tr></tbody></table></td></tr><tr><td><table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td style=\"background-color:#fff\"><table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td><p>Dear&nbsp; {{USERNAME}},</p><p>Please confirm your registration here <a  target=_blank href='http://localhost:3000/#/auth/verifyEmail/token={{TOKEN}}/id={{ID}}'>Confirm your email</a></p></td></tr></tbody></table><table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td><pre>Thanks and Regards:<br><strong>Mangal Team </strong></pre><p></p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style=\"background-color:#EBF8A4\">&nbsp;</td></tr></tbody></table></td></tr></tbody></table>",
}

module.exports = globalConstants;
