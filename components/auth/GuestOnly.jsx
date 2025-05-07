import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";

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
    return <Text>Loading...</Text>;
  }
  return children;
};

export default GuestOnly;
