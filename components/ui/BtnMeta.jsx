import Image from "next/image";
import Link from "next/link";

const BtnMeta = ({imgWidth , imgHeight}) => {
  return (
    <Link href="/learn-more" className="">
      <Image src="/home/meta.webp" alt="meta logo" width={imgWidth || 129} height={imgHeight || 74} className="" />
    </Link>
  );
};

export default BtnMeta;
