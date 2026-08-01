"use client";

import { Button, Typography } from "antd";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

interface PageHeaderProps {
  title: string;
  hasBackButton?: boolean;
}

function PageHeader({ title, hasBackButton = false }: PageHeaderProps) {
  const router = useRouter();

  return (
    <div className="sticky top-0 right-0 left-0 z-10 bg-white flex items-center p-4 border-b-2 shadow-2xs h-16">
      {hasBackButton ? (
        <Button
          shape="circle"
          type="text"
          icon={<IoArrowBackOutline size={24} />}
          onClick={() => router.back()}
          className="absolute left-0"
        />
      ) : null}
      <Typography.Title
        level={2}
        className="m-0! absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
      >
        {title}
      </Typography.Title>
    </div>
  );
}

export default PageHeader;
