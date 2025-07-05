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
                <div className={cn('inline-flex w-full gap-1 rounded bg-accent p-1.5 md:w-fit')}>
                    {tabs.map(({ value, icon: Icon, label }) => (
                        <button
                            key={value}
                            onClick={() => updateAppearance(value)}
                            className={cn(
                                'flex w-full cursor-pointer items-center justify-center rounded px-4 py-2 font-bold transition-all duration-150',
                                appearance === value ? 'bg-primary text-primary-foreground shadow-xs' : 'text-accent-foreground hover:bg-primary/10',
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
