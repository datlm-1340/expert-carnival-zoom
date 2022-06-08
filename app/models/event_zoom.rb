class EventZoom < ApplicationRecord
  def signature
    iat = Time.now.to_i - 30;
    exp = iat + 60 * 60 * 2
    header = { alg: 'HS256', typ: 'JWT' }
    payload = {
      sdkKey: Settings.zoom.sdk_key,
      mn: metting_id,
      role: 0, # chỉ cho PIC làm host
      iat: iat,
      exp: exp,
      appKey: Settings.zoom.sdk_key,
      tokenExp: iat + 60 * 60 * 2
    }

    JWT.encode(payload, Settings.zoom.sdk_secret, 'HS256', header)
  end
end
