import Link from "next/link";
import { GoArrowUpLeft } from "react-icons/go";

// Props for easy reusability (optional defaults)
export default function BtnSubscribe({
  href = "/some-path",
  content = null,
  children = "",
  className = "bg-primary h-[74px] gap-2.5",
  icon = <GoArrowUpLeft />,
  iconContainerClassName = "bg-white text-primary",
  ...props
}) {
  return (
    <Link
      href={href}
      className={`btn  rounded-9px  font-medium text-24px px-9 py-5 h-[74px] flex items-center gap-2.5 ${className}`}
      {...props}
    >
      {children}
      {content}
      <span
        className={` size-11 center_flex rounded-5px ${iconContainerClassName}`}
      >
        {icon}
      </span>
    </Link>
  );
}
