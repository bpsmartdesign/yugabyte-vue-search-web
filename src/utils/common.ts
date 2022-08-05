import { Role } from "@/store/data/types"

/**
 * function the role provided is at least the needed one
 * @author BIYA Paul <bpsmartdesign@hotmail.com>
 * @param {Role} role The role to check
 * @param {Role} neededRole The minimal role to have
 */
export function isAtLeastRole(role: Role, neededRole: Role): boolean {
  switch (neededRole) {
    case Role.GUEST:
      return [
        Role.GUEST,
        Role.USER,
        Role.SUBSCRIBER,
        Role.TRANSCRIBER,
        Role.EDITOR,
        Role.MODERATOR,
        Role.ADMIN,
        Role.OWNER,
      ].includes(role)
    case Role.USER:
      return [
        Role.USER,
        Role.SUBSCRIBER,
        Role.TRANSCRIBER,
        Role.EDITOR,
        Role.MODERATOR,
        Role.ADMIN,
        Role.OWNER,
      ].includes(role)
    case Role.SUBSCRIBER:
      return [
        Role.SUBSCRIBER,
        Role.TRANSCRIBER,
        Role.EDITOR,
        Role.MODERATOR,
        Role.ADMIN,
        Role.OWNER,
      ].includes(role)
    case Role.TRANSCRIBER:
      return [
        Role.TRANSCRIBER,
        Role.EDITOR,
        Role.MODERATOR,
        Role.ADMIN,
        Role.OWNER,
      ].includes(role)
    case Role.EDITOR:
      return [Role.EDITOR, Role.MODERATOR, Role.ADMIN, Role.OWNER].includes(
        role
      )
    case Role.MODERATOR:
      return [Role.MODERATOR, Role.ADMIN, Role.OWNER].includes(role)
    case Role.ADMIN:
      return [Role.ADMIN, Role.OWNER].includes(role)
    case Role.OWNER:
      return [Role.OWNER].includes(role)
    default:
      return false
  }
}
