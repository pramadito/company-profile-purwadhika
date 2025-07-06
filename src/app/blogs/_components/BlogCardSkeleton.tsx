import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogListSkeletonProps {
  count?: number;
}

const BlogCardSkeleton: FC<BlogListSkeletonProps> = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="space-y-3">
          <Skeleton className="h-[200px] w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCardSkeleton;