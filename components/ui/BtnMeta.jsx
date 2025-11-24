import Image from "next/image";
import Link from "next/link";

const BtnMeta = () => {
  return (
    <Link href="/learn-more" className=" ">
      <Image src="/home/meta.webp" alt="meta logo" width={129} height={74} />
    </Link>
  );
};

export default BtnMeta;
