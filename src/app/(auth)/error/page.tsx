import { useRouter } from "next/router";

export default function LoginError() {
  const router = useRouter();

  return <p>Login Error page</p>;
}
