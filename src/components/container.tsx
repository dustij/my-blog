type Props = {
  children?: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="container mx-auto mt-[64px] p-7 sm:mt-[72px]">
      {children}
      <p className="mt-36 text-sm text-stone-400">
        {`© ${new Date().getFullYear()} Dusti Johnson. All rights reserved.`}
      </p>
    </div>
  );
}
