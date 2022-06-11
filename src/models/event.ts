export interface IEvent {
  id: number
  skills: any //под вопросом
  coordinates: IPlaces[]
  tags: string[]
  type: string
  title: string
  category: string
  location: string
  focus_group: string
  date_and_time: string
  application_response_email: string
  urgent: number
  reward: number | null
  is_online: boolean
  img: string
}

interface IPlaces {
  latitude: number
  longitude: number
}
