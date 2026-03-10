import { quickActions } from "./mock-data";

export default function QuickActions() {
    return (
        <div className="mx-auto w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {quickActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                    <button
                        key={idx}
                        className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md hover:shadow-primary-500/5 transition-all group cursor-pointer"
                    >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${action.color} group-hover:scale-110 transition-transform`}>
                            <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                            {action.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
