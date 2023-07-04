import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const EPCardSkeleton = () => {
  return (
    <Card>
      {/* Skeleton element to represent the loading state of the card */}
      <Skeleton height="450px" />
      <CardBody>
        {/* SkeletonText element to represent the loading state of the card body */}
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default EPCardSkeleton;
