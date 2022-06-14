class ZoomChannel < ApplicationCable::Channel
  def subscribed
    @participants = participants

    stream_from "zoom_#{params[:room]}"
    send_data
  end

  def unsubscribed
    leave({"type" => "left", "user_id" => current_user.id})

    send_data
  end
  
  def receive(data)
    @participants = participants

    join(data)
    leave(data)
    send_data
  end

  def join(data)
    return if data["type"] != "joined"

    @participants << data["user_id"]
    $redis.set "participants", JSON.generate(@participants)
  end

  def leave(data)
    return if data["type"] != "left"

    @participants.delete(data["user_id"])
    $redis.set "participants", JSON.generate(@participants)
  end

  def send_data
    users = User.where(id: participants).as_json(only: %i[email role])

    ActionCable.server.broadcast("zoom_#{params[:room]}", {participants: users})
  end

  def participants
    value = $redis.get("participants")
    return [] if value.blank?

    JSON.parse value
  end
end
