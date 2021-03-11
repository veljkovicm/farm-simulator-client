import Link from 'next/link';

const FarmItem = ({ farm }) => (
  <Link href="/farm/[id]" as={`/farm/${farm.id}`}>
    <a>{farm.name}</a>
  </Link>
);

export default FarmItem;
