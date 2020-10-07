class ContactMailer < ApplicationMailer
    default from: 'maxsultankent@gmail.com'
    layout 'mailer'
  
    def contact_email
        @contact = params[:contact]
      mail(
        to:'maxwell.sultan@icloud.com', 
        subject: "#{@contact.subject} from: #{@contact.email}", 
        body: @contact.message
      )
    end 
  end
