type EquipsCardProps = {
  equipColor: string;
  equips: string[];
};

export default function EquipsCard(
  { equipColor = 'white', equips = [] }: EquipsCardProps,
) {
  if (equipColor !== '') {
    return (
      <div
        className="w-72 min-h-[264px] max-sm:min-h-fit
      max-sm:pb-8 flex flex-col rounded-lg border-2 pb-3"
      >
        <div
          className={ `bg-${equipColor}-500 w-full
          h-24 max-sm:h-12 rounded-t-lg border-4 border-${equipColor}-500 mb-3` }
        />
        {equips.map((equip) => (
          <p
            key={ `${equip}` }
            className="text-sm ml-3"
          >
            {equip}
          </p>))}
      </div>
    );
  }

  return (
    <div className="w-72 min-h-[264px] flex flex-col rounded-lg border-2  pb-3">
      <div
        className="bg-white w-full h-24 rounded-t-lg border-4 border-white mb-3"
      />
      {equips.map((equip) => (
        <p
          key={ `${equip}` }
          className="text-sm ml-3"
        >
          {equip}
        </p>))}
    </div>
  );
}
