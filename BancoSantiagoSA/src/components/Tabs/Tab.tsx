export const Tab = ({ name, isActive, onTabChange }: { name: string, isActive: boolean, onTabChange: () => void }) => {
    return (
        <button
            key={name}
            className={`max-md:w-full flex h-12 items-center justify-center border rounded-md  bg-background px-8 text-base font-bold  shadow transition-all hover:text-accent  focus-visible:outline-none ${isActive === true ? `border-secondaryText text-accent` : 'border-slate-800'}`}
            onClick={onTabChange}
        >
            {name}
        </button>
    )
}