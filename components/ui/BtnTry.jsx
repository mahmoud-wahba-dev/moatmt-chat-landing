import Link from "next/link";
import { GoArrowUpLeft } from "react-icons/go";

const BtnTry = () => {
  return (
    <Link
      href="/some-path"
      className="btn bg-white rounded-40px h-14 font-bold text-14px p-2.5 flex items-center gap-3"
    >
      جـــرّب مجــانًــا
      <div className="bg-primary text-white size-11 center_flex rounded-full">
        <GoArrowUpLeft />
      </div>
    </Link>
  );
};

export default BtnTry;
