//#region random
export interface State {
  count: number
}
/**
 * An empty request data.
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface EmptyRequestData {}

/**
 * An empty response data.
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface EmptyResponseData {}

/**
 * The extra data type
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface Extra {
  icon: string
  title: string
  subtitle: string
  value: string
}

/**
 * The resume meta data type
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface Meta {
  design: {
    primary_font: string
    secondary_font: string
    primary_color: string
    secondary_color: string
    neutral_color: string
    font_icons: string
  }
}

/**
 * The list of works type.
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
//  export enum EmployeeHireStatus {
//   OnSite = 'On site',
//   Hybrid = 'Hybrid',
//   Remote = 'Full Remote',
// }

/**
 * Timezone object definition as received from Google API.
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface FullTimezone {
  status: string
  dstOffset: number
  rawOffset: number
  timeZoneId: string
  timeZoneName: string
}
//#endregion

//#region resume
/**
 * The user-lite response data
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface LiteUser {
  first_name: string
  last_name: string
  middle_name: string
  birth_date: string
  title: string
  pp: string
}

/**
 * The user-detail response data
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface UserDetails {
  email: string
  address_line_one: string
  address_line_two: string
  main_phone_number: string
  second_phone_number: string
  city: string
  state: string
  po_box: string
  country: string
  social: Extra[]
  languages: Extra[]
  interest: Extra[]
}

/**
 * The education response data
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface Education {
  school: string
  start: string
  end: string
  rounded_duration: string
  description: string
}

/**
 * The work contribution response data
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface Contribution {
  product_name: string
  url: string
  subtitle: string
  description: string
  tags: string[]
  start: string
  end: string
  status: string
  period: string
}

/**
 * The work response data
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface Work {
  company: string
  title: string
  duration: string
  workType: string
  start: string
  end: string
  status: string
  rounded_duration: string
  contributions: Contribution[]
}

/**
 * The skill response data
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface Skill {
  tech: string
  level: string
}

/**
 * The resume response data
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface Resume {
  user: LiteUser
  user_details: UserDetails
  education: Education[]
  work_experience: Work[]
  personal_skills: Skill[]
  technical_skills: Skill[]
  references: Extra[]
  awards: Extra[]
  meta: Meta
}
//#endregion

//#region access
/**
 * Provides the list of possible actions and associated
 * permissions for each role
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export interface AppPermission {
  /**
   * The permission needed to create an object.
   * @type {string}
   */
  create?: string

  /**
   * The permission needed to delete an object.
   * @type {string}
   */
  delete?: string

  /**
   * The permission needed to update an object.
   * @type {string}
   */
  update?: string

  /**
   * The permission needed to consult an object.
   * @type {string}
   */
  consult?: string
}

/**
 * The different roles available in the application
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 */
export enum Role {
  "GUEST",
  "USER",
  "SUBSCRIBER",
  "TRANSCRIBER",
  "EDITOR",
  "MODERATOR",
  "ADMIN",
  "OWNER",
}
//#endregion
