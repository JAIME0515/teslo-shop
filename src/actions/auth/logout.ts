"use server";

import { signOut } from "@/auth.config";

export const logout = async () => {
  try {
    console.log("Cerrando sesión...");
    await signOut({ redirect: false });
    console.log("Sesión cerrada correctamente");
    return true;   
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    return false;   
  }
};

