import { type DefaultSession } from "next-auth";
import { type DefaultJWT } from "next-auth/jwt";
interface UserExtended extends DefaultSession["user"] {
  id: string;
  name: string;
  email: string;
  emailVerified: Date | null;
  role: "Admin" | "User";
  image?: string;
}
declare module "next-auth" {

   
interface Session {
  user?: User;}
}
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    data: UserExtended;
  }
}