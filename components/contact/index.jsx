import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import data from "../../data/contact.json";

const contact = (props) => {
  return (
    <div id="contact" className={styles.contactWrapper}>
      <div className={styles.address}>
        <p>
          <strong>Email: </strong>
          {data.address.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {data.address.phone}
        </p>
        <p>
          <strong>Address: </strong>
          {data.address.location}
        </p>
      </div>
      <div className={styles.socialWrapper}>
        {data.imagelinks.map((media) => {
          return (
            <Link href={media.href}>
              <Image
                src={media.image}
                alt={media.name}
                width={20}
                height={20}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default contact;
