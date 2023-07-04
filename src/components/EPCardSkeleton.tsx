import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const EPCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="450px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default EPCardSkeleton