import { twMerge } from "tailwind-merge";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({
  children,
  className = "",
}: MaxWidthWrapperProps) {
  return (
    <div
      className={twMerge(
        `w-full px-4 lg:mx-auto lg:max-w-screen-2xl lg:px-8`,
        className,
      )}
    >
      {children}
    </div>
  );
}
