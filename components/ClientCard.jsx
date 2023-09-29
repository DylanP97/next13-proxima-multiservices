'use client';

import Image from 'next/image';

const ClientCard = ({ src }) => (
  <div className="flex items-center justify-center h-full ">
    <Image src={src} height={170} width={170} alt={src} />
  </div>
);

export default ClientCard;
