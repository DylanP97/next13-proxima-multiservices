'use client';

const ClientCard = ({ src }) => (
  <div className="flex items-center justify-center h-full ">
    <img src={src} height={170} width={170} alt={src} />
  </div>
);

export default ClientCard;
