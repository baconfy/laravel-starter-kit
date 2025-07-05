import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { LucideIcon, Monitor, Moon, Sun } from 'lucide-react';

const ChangeAppearance = () => {
    const { appearance, updateAppearance } = useAppearance();

    const tabs: { value: Appearance; icon: LucideIcon; label: string }[] = [
        { value: 'light', icon: Sun, label: 'Light' },
        { value: 'dark', icon: Moon, label: 'Dark' },
        { value: 'system', icon: Monitor, label: 'System' },
    ];

    return (
        <div className="grid gap-2 md:grid-cols-12 md:gap-6">
            <div className="col-span-5 content-center">
                <p className="font-bold">Appearance settings</p>
                <p className="hidden text-muted-foreground md:block">Update your account's appearance settings.</p>
            </div>

            <div className="col-span-7 content-center">
                <div className={cn('inline-flex w-full gap-1 rounded bg-accent p-1 md:w-fit dark:bg-neutral-800')}>
                    {tabs.map(({ value, icon: Icon, label }) => (
                        <button
                            key={value}
                            onClick={() => updateAppearance(value)}
                            className={cn(
                                'flex w-full items-center justify-center rounded px-4 py-2 transition-colors',
                                appearance === value
                                    ? 'bg-primary text-primary-foreground shadow-xs'
                                    : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                            )}
                        >
                            <Icon className="-ml-1 h-4 w-4" />
                            <span className="ml-1.5 text-sm">{label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChangeAppearance;
