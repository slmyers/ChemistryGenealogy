# @author Steven Myers
# This mailer is used to notify a user that registered that their account has
# been approved.
# NOTE: this is not fully implemented due to lack of requirment, so you should
# view this as a starting point for extending the application. 
class UserMailer < ActionMailer::Base
  default from: "chemGeno@do_not_reply.com"

  # the view for this email is textual and it should be extended to have a link
  # to the site in the email.
  # view: /app/views/user_mailer/notify_user.text.erb
  def self.notify_user(user)
    @user = user
    mail(to: @user.email, subject: 'Chemistry Geneology registration')
  end
end
