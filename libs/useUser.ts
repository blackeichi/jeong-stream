import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/session")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("로그인을 해주세요.");
          return router.replace("/enter");
        }
        setUser(data.profile);
      });
  }, [router]);
  return user;
}
