module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verfied_user
    end

    private

    def find_verfied_user
      current_user = User.find_by(id: request.query_parameters["id"])
      if current_user
          current_user
       else
          reject_unauthorized_connection
      end
    end
  end
end
