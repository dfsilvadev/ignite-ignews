import { signin, useSession } from "next-auth/client";
import styles from "./styles.module.scss";

interface SubscriberButtonProps {
  priceId: string;
}

export function SubscriberButton({ priceId }: SubscriberButtonProps) {
  const [session] = useSession();

  function handleSubscriber() {
    if (!session) {
      signin("github");
      return;
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribe}
      onClick={handleSubscriber}
    >
      Subscribe now
    </button>
  );
}
