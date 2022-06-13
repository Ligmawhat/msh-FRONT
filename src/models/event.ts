export interface IEvent {
  id: number
  coordinates: string
  type: string
  title: string
  category: string
  category_id?: number
  location: string
  date_and_time: string
  application_response_email: string
  urgent: number
  reward: number | null
  is_online: boolean
  img_url: string
  age_restrictions: string
  employment: string
  time_period: string
  term_description: string
  occupation: string
}

interface IPlaces {
  latitude: number
  longitude: number
}

export interface location {
  id: number
  place: string
  latitude: number
  longitude: number
}
