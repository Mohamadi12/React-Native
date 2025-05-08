import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  //Executer le router si l'utilisateur n'est pas connecte
  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login");
    }
  }, [user, authChecked]);

  //Chargement jusqu'à trouver un utilisateur valide
  if (!authChecked || !user) {
    return <ThemedLoader />;
  }

  //Si l'utilisateur est connecté, afficher les enfants
  return children;
};
export default UserOnly;
