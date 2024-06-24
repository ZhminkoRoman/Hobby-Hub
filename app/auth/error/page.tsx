import { useRouter } from "next/router";

export default function LoginError() {
  const router = useRouter();

  console.log(router.query);

  return <p>Login Error page</p>;
}
