import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useNotUser() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/session")
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("비정상 접근입니다.");
          return router.replace("/");
        }
        setUser(data.profile);
      });
  }, [router]);
  return user;
}
