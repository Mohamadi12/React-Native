import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  //Executer le router si l'utilisateur est connecté
  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile");
    }
  }, [user, authChecked]);

  //Si l'utilisateur existe
  if (!authChecked || user) {
    return <ThemedLoader />;
  }
  return children;
};

export default GuestOnly;
